import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthInitializer from "../Firebase/firebase.init";

firebaseAuthInitializer();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signinUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        signinUsingGoogle,
        logOut
    }
}

export default useFirebase;