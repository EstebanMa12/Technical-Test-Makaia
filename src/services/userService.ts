import {doc, getDoc, setDoc} from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { Data, UserData } from "../models/user.models";

const collectionName = 'users'

export const createUserInCollection = async (uid: string, data:Data) => {
    try {
        const docRef = doc(db, collectionName, uid);
        await setDoc(docRef, data);
        return {
            uid,
            ...data
        }
    } catch (error) {
        console.warn(error);
        return false
    }
}

export const getUserById = async (uid: string) => {
    try {
        const docRef = doc(db, collectionName, uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return {
                uid,
                ...docSnap.data()
            }
        } else {
            return false
        }
    } catch (error) {
        console.warn(error);
        return false
    }
}

export const loginFromFirestore = async ( userData: UserData ) =>{
    try {
        const user = await getUserById(userData.uid);
        if (user) {
            return user
        } else {
            return await createUserInCollection(userData.uid, {
                displayName: userData.displayName,
                photoURL: userData.photoURL,
                accessToken: userData.accessToken,
                email: userData.email,
            });
        }
    }
    catch (error) {
        console.warn(error);
        return false
    }
}