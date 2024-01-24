/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    createUserWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth"
import { auth } from "../../firebase/firebaseConfig";
import { UserData } from "../../models/user.models";
import { createUserInCollection, getUserFromCollection, loginFromFirestore } from "../../services/userService";
import { setError, 
    setIsAuthenticate, 
    setUser } from "./userSlice";

export const createAnAccountAsync = (newUser)=>async (dispatch) =>{
    try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          newUser.email,
          newUser.password
        )
        await updateProfile(auth.currentUser, {
          displayName: newUser.name,
          photoURL: newUser.photoUrl,
        })
        const userLogged = await createUserInCollection(user.uid, { name: newUser.name, photoURL: newUser.photoUrl, accessToken: user.accessToken, email: newUser.email })
        // console.log(user)
        dispatch(
          setUser({
            id: userLogged.uid,
            displayName: userLogged.name,
            email: userLogged.email,
            photoURL: userLogged.photoURL,
            accessToken: userLogged.accessToken,
          })
        )
        dispatch(setIsAuthenticate(true))
        dispatch(setError(false))
      } catch (error) {
        console.warn(error)
        dispatch(
          setError({ error: true, code: error.code, message: error.message })
        )
      }
}