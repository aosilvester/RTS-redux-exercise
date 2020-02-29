export const createSearch = (term) => {
    return {
        type: 'CREATE_NEW_SEARCH',
        terms: term
    }
}