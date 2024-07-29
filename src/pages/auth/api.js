import axios from "axios";
import useAuth from "../../hooks/useAuth";

export const login = async (data) => {
    try {
        const response = await axios.post(
            "https://saviorte.pythonanywhere.com/api/login/",
            data
        );

        if (response.status === 200) {
            setTimeout(()=>{
                console.log("from the api js")
                updateAccessToken(response.data.refresh)
            },2900)
            return response.data;

        }
    } catch (error) {
        return error;
    }
};

export const createAccount = async (data) => {
    try {
        const response = await axios.post(
            "https://saviorte.pythonanywhere.com/api/signup/",
            data
        );
        
        if (response.status === 201) {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}

export const updateAccessToken = (refresh) =>{
    console.log({refresh})
    try{

        axios.post("https://saviorte.pythonanywhere.com/api/token/refresh",{
            "refresh": refresh
        }).then(response => {
            updateUserCredentials(reponse.data)
            console.log({response})})
    }
    catch(err){
        console.log(err)
    }
}

const updateUserCredentials = (data)=>{
    const { auth, setAuth } = useAuth();
    console.log({auth});
    console.log({data})
}