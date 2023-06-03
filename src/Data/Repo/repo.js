import { signInWithEmailnPassword, signUpWithEmailnPassword } from "../DataSrc/data_src"


export const signInWithEmail = async(email, password) =>{
    try {
        const user = signInWithEmailnPassword(email, password);

        console.log(user);
        
        return user;
    } catch (error) {
        console.log(error);
    }
}

export const signUpWithEmail = async(fullName, email, password, title, bio, userName) =>{
    try{
        const user = signUpWithEmailnPassword(fullName, email, password, title, bio, userName);

        console.log(user);
    }catch(error){
        console.log(error);
    }
}