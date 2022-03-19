import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword ,GoogleAuthProvider  ,signInWithPopup , updateProfile } from "firebase/auth";
import initilizeAuthentication from '../Firebase/firebase.init';
initilizeAuthentication();

const useFirebase = () => {

    const [user,setUser] = useState({});
    const [loading,setloading] = useState(true);
    const [authError,setAuthError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    // GOOGLE SIGN IN
    const signInWithGoogle = (location,navigate) => {
        setloading(true);
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            // signed-in user info
            const user = result.user;
            
            // setting user to user state
            setUser(user);

            // emptying error message
            setAuthError('');

            // redirecting user
            const destination = location.state?.from || '/';
            // navigate(destination);
        })
        .catch((error)=>{
            // handling error
            const errorMessage = error.message; 
            setAuthError(errorMessage);
        })
        .finally(()=> setloading(false));
    }


    // REGISTER USER WITH EMAIL AND PASSWORD
    const registerUser = (email,password,name,navigate) => {
        setloading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);

            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            
            navigate('/home');
        })
        .catch((error)=>{
            setAuthError(error.message);
        })
        .finally(()=> setloading(false));

    };


    // LOGIN USER
    const loginUser = (email,password,location,navigate) => {
        setloading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            setAuthError('');
            const destination = location.state?.from || '/';
            // navigate(destination);

        })
        .catch((error)=> {
            setAuthError(error.message);
        })
        .finally(()=> setloading(false));
    }


    // LOGOUT USER
    const logout = () => {
        setloading(true);
        signOut(auth)
        .then(()=>{

        })
        .catch((error)=>{
            setAuthError(error.message);
        })
        .finally(()=> setloading(false));
    }


    // GET THE CURRENTLY SIGNED-IN USER
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setloading(false);
        })
        return () => unsubscribe;
    },[]);


    return {
        user,
        loading,
        signInWithGoogle,
        registerUser,
        authError,
        loginUser,
        logout


    }
}

export default useFirebase;