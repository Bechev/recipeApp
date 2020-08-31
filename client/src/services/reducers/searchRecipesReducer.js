export default function suggestionsReducer(state = {
    isLoaded: false,
    errorMessage: '',
    searchResults: [],
    filters: []

    }, action) {

    switch (action.type) {
        case 'LOAD_RESULTS':
            return  {
                ...state,
                isLoaded: false}
        
        case 'LOAD_RESULTS_SUCCESS':
            return  {
                ...state,
                isLoaded: true,
                searchResults: [].concat(action.payload)}

        case 'LOAD_RESULTS_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message}

        case 'ADD_FILTER':
            return{
                ...state,
                filters: state.filters.concat(action.payload)
            }

        case 'REMOVE_FILTER':
            return{
                ...state,
                filters: state.filters.filter(e => e !== action.payload)
            }

        case 'RESET_FILTER':
            return{
                ...state,
                filters: []
            }

        default:
            return state;
    }
}