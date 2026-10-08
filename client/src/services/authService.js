import auth from "../utils/firebase-config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { serializeAuthUser } from "../utils/serialize-auth-user";


export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast('Login Successful',
        {
            icon: '👻',
            style: {
            background: '#333',
            color: '#fff',
            },
        }
        );
        return serializeAuthUser(userCredential.user);
    } catch (error) {
        toast(error.message,
        {
            icon: '❌',
            style: {
            background: '#333',
            color: '#fff',
            },
        }
        );
        console.log(error);
    }

}

export const register = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        toast('Registration Successful',
        {
            icon: '👻',
            style: {
            background: '#333',
            color: '#fff',
            },
        }
        );
        return serializeAuthUser(userCredential.user);
    } catch (error) {
        toast(error.message,
            {
                icon: '❌',
                style: {
                background: '#333',
                color: '#fff',
                },
            }
            );
        console.log(error);
    }

}

export const signOutFromFirebase = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    }

}
