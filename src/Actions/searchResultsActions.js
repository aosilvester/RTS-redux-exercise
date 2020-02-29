import axios from 'axios';

export const SearchResultsActions = (searchTerm) => {
    return (dispatch) => {
        // console.log('searchTerm: ', searchTerm)
        const apiPrefix = 'http://hn.algolia.com/api/v1/search?query='
        //API is called. async
        return axios.get(apiPrefix + searchTerm).then((response) => {
            // console.log(response.data.hits);
            // capture relevant data from response
            const ApiResponse = response.data.hits
            dispatch({ type: 'FETCH_RESULTS', ApiResponse });
        }).catch((err) => {
            // If the request fails, send error action
            dispatch({ type: 'FETCH_RESULTS_ERROR', err });
        })
    }
};