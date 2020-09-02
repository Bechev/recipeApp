export default function suggestionsReducer(state = {
    isLoaded: false,
    errorMessage: '',
    searchResults: [],
    filters: [],
    filteredRecipes: []

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

        case 'ADDING_FILTER':
            return{
                ...state,
                filters: state.filters.concat(action.payload),
                isLoaded: false,
            }

        case 'ADDING_FILTER_SUCCESS':
            return{
                ...state,
                filteredRecipes: [].concat(action.payload),
                isLoaded: true
            }
        
        case 'ADDING_FILTER_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message
            }

        case 'REMOVE_FILTER':
            return{
                ...state,
                filters: state.filters.filter(e => e !== action.payload.filter)
            }

        case 'REMOVING_FILTER':
            return{
                ...state,
                filters: state.filters.filter(e => e !== action.payload.filter),
                isLoaded: false,
            }

        case 'REMOVING_FILTER_SUCCESS':
            return{
                ...state,
                filteredRecipes: [].concat(action.payload),
                isLoaded: true
            }
        
        case 'REMOVING_FILTER_FAILURE':
            return{
                ...state,
                isLoaded: true,
                errorMessage: action.payload.message
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