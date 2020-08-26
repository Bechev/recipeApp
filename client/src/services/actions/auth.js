export function sign_in(email, password, history){
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
            console.log("response.headers" + response.headers)
            response.headers.forEach((value, name) => user[name] = value);
            localStorage.setItem('user', JSON.stringify(user));
            return response.json()
        })
        .then(response =>{
            if(!response){ 
                throw new Error("no reponse")
            }else{
                dispatch({type:'SIGN_IN_USER_SUCCESS', payload: response.data })
                history.push('/')
            }
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
            dispatch({type: "CREDENTIAL_VERIFICATION_SUCCESS", payload: response.data})
        })  
        .catch(error=>{
            dispatch({type:'CREDENTIAL_VERIFICATION_FAILURE', payload: error, error:true})
        })
    })
}

export function sign_out(){
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
            if(!response.ok) throw new Error(response.status)
            else dispatch({type: "SIGN_OUT_USER_SUCCESS", payload: response})
        })
        .catch(error=>{
            console.log(error)
        dispatch({type:'SIGN_OUT_USER_FAILURE', payload: error, error:true})
        })
    })
}

export function sign_up( email, username, password, password_confirmation, state,history){
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
                username: username,
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
            if(!response){ 
                // alert(reponse.message)
                throw new Error("Oops, something went wrong")
            }
            else {
                dispatch({type:'SIGN_UP_USER_SUCCESS', payload: response.data })
                window.location.reload(false);
            }
        })
        .catch(error =>{
            dispatch({type:'SIGN_UP_USER_FAILURE', payload: error, error:true})
        })
    }    
};