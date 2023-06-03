import { createUserWithEmailAndPassword, signInWithCredential1, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc,  getDoc,  setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

export const signInWithEmailnPassword = async(email, password) =>{
    
    const cred = await signInWithEmailAndPassword(auth, email, password);
    
    const ref = doc(db, `users/${cred.user.uid}`);

    const ds = await getDoc(ref)
  
    return ds.data;
}
  
  
export const signUpWithEmailnPassword = async(fullName, email, password, title, bio, userName) =>{
    const cred = await createUserWithEmailAndPassword(auth, email, password);
  
    const ref = doc(db, `users/${cred.user.uid}`);

    const data = {
        uid: cred.user.uid,
        photoUrl: '',
        userName,
        email: cred.user.email,
        fullName,
        title,
        bio,
        followers: [],
        followings: [],
    }
    await setDoc(ref, data)
    return data
}
export const signInWithFacebook = async() => {
    
}

  