export function login(email, password){
    return (dispatch) => {
        dispatch({ type: 'SIGNING_IN_USER' });    
        return fetch("http://localhost:3000/api/v1/auth/sign_in" ,{
            method: "POST", 
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => { 
            const user = {};
            response.headers.forEach((value, name) => user[name] = value);
            localStorage.setItem('user', JSON.stringify(user));
            return response.json()
        })
        .then(response =>{
            if(response.success ===  false) throw new Error(response.errors)
            else dispatch({type:'SIGN_IN_USER_SUCCESS', payload: response.data })
        })
        .catch(error =>{
            dispatch({type:'SIGN_IN_USER_FAILURE', payload: error, error:true})
        })
    }    
};

export function verify_credentials(){
    return(dispatch=>{
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({type: "CREDENTIAL_VERIFICATION"})
        console.log("user " + user)
        return fetch("http://localhost:3000/api/v1/auth/validate_token", {
            headers:{
                "uid": user.uid,
                "client": user.client,
                "access-token": user['access-token']
            }
        })
        .then(response => response.json())
        .then(response=>{
            if(!response.success) throw new Error(response.errors)
            else dispatch({type: "CREDENTIAL_VERIFICATION_SUCCESS", payload: response.data})
        })  
        .catch(error=>{
            dispatch({type:'CREDENTIAL_VERIFICATION_FAILURE', payload: error, error:true})
        })
    })
}

export function logout(){
    return(dispatch=>{
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        dispatch({type: "SIGNING_OUT_USER", payload: user})
        return fetch("http://localhost:3000/api/v1/auth/sign_out", {
        method: 'DELETE',
        headers:{
            "uid": user['uid'],
            "client":  user['client'],
            "access-token":  user['access-token']
            }
        })
        .then(response => response.json())
        .then(response=>{
            if(!response.success) throw new Error(response.errors)
            dispatch({type: "SIGN_OUT_USER_SUCCESS", payload: response})
            console.log(response)
        })
        .catch(error=>{
            dispatch({type:'SIGN_OUT_USER_FAILURE', payload: error, error:true})
        })
    })
}

export function signup( email, password, password_confirmation, state){
    return (dispatch) => {
        dispatch({ type: 'SIGNING_UP_USER' });    
        return fetch("http://localhost:3000/api/v1/auth/" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                password_confirmation: password_confirmation,
                state: state
            })
        })
        .then(response => {
            const user = {};
            response.headers.forEach((value, name) => user[name] = value);
            localStorage.setItem('user', JSON.stringify(user));
            return response.json()
        })
        .then(response => { 
            if(response.status === 'error') throw new Error(response.errors)
            else dispatch({type:'SIGN_UP_USER_SUCCESS', payload: response.data })
        })
        .catch(error =>{
            dispatch({type:'SIGN_UP_USER_FAILURE', payload: error, error:true})
        })
    }    
};