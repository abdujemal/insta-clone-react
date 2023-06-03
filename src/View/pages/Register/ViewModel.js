import { useState } from "react";

const RegisterViewModel = () => {
    const [inputs, setInputs] = useState({
        email: "",
        fullName: "",
        password: "",
        userName: "",
        title: "",
        bio: "",  
    });

    
   

    return {
        inputs,
        setInputs,
    }
}

export default RegisterViewModel
