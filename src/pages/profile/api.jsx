import axios from 'axios';
import { redirect } from "react-router-dom";

let auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxOTM4OTYxLCJpYXQiOjE3MjE5MzcxNjEsImp0aSI6IjE4YWYzZTZmNmFjMTRjMDViMGI0ZmJmMWJkYmEzNjM5IiwidXNlcl9pZCI6MTJ9.fKL9UB8I2mW8MvZfab4g9WrVY6sc43pmtKKNmI9tWHc";

export const fetchProfile = (token,pathname) =>{

  let data= axios.get('https://saviorte.pythonanywhere.com/api/profile/', {
      headers: {
        'Authorization':`Bearer  ${auth}`,
      },}
    ).then(response => {console.log(response.data)
     const data = response.data;
     console.log(data)
     return data
    })
    .catch(error => {console.log(error)
      throw redirect(`/login?message=Please-login-to-continue&redirectTo= ${pathname}`);
    });

    console.log({data})
    return data
}

export const updateProfile = (profile) => {
 axios.patch('https://saviorte.pythonanywhere.com/api/profile/', {
    headers: {
      'Authorization':`Bearer  ${auth}`,
    }}).then(response => {console.log(response.data)
   const data = response;
   console.log(data)
   return data
  })
  .catch(error => {console.log(error)
  });
}