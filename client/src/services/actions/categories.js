export function fetch_categories(){
    return (dispatch) => {
        dispatch({ type: 'LOAD_CATEGORIES' });    
        return fetch("http://localhost:3000/api/v1/categories/" ,{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
        })
        .then(response => response.json())
        .then(post => { 
            dispatch({type:'LOAD_CATEGORIES_SUCCESS', payload: post})
        })
        .catch(error =>{
            dispatch({type:'LOAD_CATEGORIES_FAILURE', payload: error, error:true})
        })
    }    
};

export function addFilter(filter, filters){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        let URLFilterString
        if(filters===[]){
            URLFilterString = filter
        }else{
            URLFilterString = filter + "," + filters.join (",")
        }
        dispatch({ type: 'ADDING_FILTER', payload: filter });    
        return fetch("http://localhost:3000/api/v1/categories?name=" +URLFilterString ,{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']
            },
        })
        .then(response => response.json())
        .then(filteredRecipes => { 
            dispatch({type:'ADDING_FILTER_SUCCESS', payload: filteredRecipes })
        })
        .catch(error =>{
            dispatch({type:'ADDING_FILTER_FAILURE', payload: error, error:true})
        })
    }
};

export function removeFilter(filter, filters){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        let URLFilterString = filter + "," + filters.join (",")
        dispatch({ type: 'REMOVING_FILTER', payload: filter });    
        return fetch("http://localhost:3000/api/v1/categories?name=" +URLFilterString ,{
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token']
            },
        })
        .then(response => response.json())
        .then(filteredRecipes => { 
            dispatch({type:'REMOVING_FILTER_SUCCESS', payload: filteredRecipes })
        })
        .catch(error =>{
            dispatch({type:'REMOVING_FILTER_FAILURE', payload: error, error:true})
        })
    }
};

export function resetFilter(){
    return{
        type: 'RESET_FILTER',
    }
}