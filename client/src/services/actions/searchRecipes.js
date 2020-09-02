export function searchRecipes(query){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        dispatch({ type: 'LOAD_RESULTS' });    
        return fetch("http://localhost:3000/api/v1/search" ,{
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "uid": user.uid,
                "client":  user.client,
                "access-token":  user['access-token'],
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                char: query
            })
        })
        .then(response => response.json())
        .then(response => { 
            let resultsArr = []
            response.map((recipe, key)=>{
                resultsArr.push(recipe.name)
                return resultsArr
            })
            dispatch({type:'LOAD_RESULTS_SUCCESS', payload: resultsArr})
        })
        .catch(error =>{
            dispatch({type:'LOAD_RESULTS_FAILURE', payload: error, error:true})
        })
    }
};

export function addFilter(filter, filters){
    return (dispatch) => {
        const strUser = localStorage.getItem('user')
        let user = JSON.parse(strUser)
        let URLFilterString = filter + "," + filters.join (",")
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

// export function addFilter(filter){
//     return{
//         type: 'ADD_FILTER',
//         payload: {'filter': filter}
//     }
// }

// export function removeFilter(filter){
//     return{
//         type: 'REMOVE_FILTER',
//         payload: {'filter': filter}
//     }
// }

export function resetFilter(){
    return{
        type: 'RESET_FILTER',
    }
}