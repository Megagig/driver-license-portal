import axios from "axios";

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
            },10000)
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
            updateUserCredentials(response.data)
            console.log({response})})
    }
    catch(err){
        console.log(err)
    }
}

const updateUserCredentials = (data)=>{
    let auth = JSON.parse(sessionStorage.getItem("auth"))
    console.log({auth});                                                    
    auth.access = data
    sessionStorage.setItem("auth",JSON.stringify(auth))
    console.log({auth});
    console.log({data})
    setTimeout(()=>{
        console.log("from the api js")
        updateAccessToken(auth.refresh)
    },10000)
}