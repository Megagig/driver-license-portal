import axios from 'axios';
let auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxOTA0NDYzLCJpYXQiOjE3MjE5MDI2NjMsImp0aSI6ImY1Zjk5MmE5OTc2MTQwOTE4MDFkMGU1MTRkMTkxYzJhIiwidXNlcl9pZCI6MTJ9.iqiMN3p9AQB0nDEwjbsB0MR-jZyIzokS7IAlr_sHJ9s";

export const fetchProfile = async (token) =>{
    let response  = axios.get('https://saviorte.pythonanywhere.com/api/profile/', {
      headers: {
        'Authorization':`Bearer  ${auth}`,
      },}
    ).then(response => {console.log(response.data)})
    .catch(error => {console.log(error)});

    return response
}