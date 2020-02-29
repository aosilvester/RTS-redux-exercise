// root reducer is sufficient for application

const initialState = {
    searches: [],
    previousSearchTerms: []
}

const rootReducer = (state = initialState, action) => {
    // createStore() in app.js uses rootReducer() as an argument to determine state. State is determined by examining action.type and
    // returning the new state accordingly. 
    if (action.type === 'FETCH_RESULTS_ERROR') {
        console.log('Error fecthing results', action.err);
        return state;
    } 
    else if (action.type === 'CREATE_NEW_SEARCH') {
        // This will create search terms in Store
        const newID = Math.random()
        return {
            ...state,
            previousSearchTerms: [...state.previousSearchTerms, { id:newID, title:action.terms}]
        }
    } 
    else if (action.type === 'FETCH_RESULTS') {
        console.log(action.ApiResponse)
        return {
            ...state,
            searches: action.ApiResponse
        }
    } 
    return state;
}

export default rootReducer;