import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createSearch } from '../../Actions/createSearch';
import { SearchResultsActions } from '../../Actions/searchResultsActions';

class SearchHistory extends Component {

    searchAgain = (e) => {
        console.log(e.target.value)
        // this.props.createSearch(e.target.value);
        this.props.SearchResultsActions(e.target.value)
    }

    receiveSearchHistory = () => {
        if(this.props.searchResults.length > 0) {
            const { searchResults } = this.props;
            // console.log(searchResults)
            return (
                <div>
                    <h3>Search History</h3>
                    <span>Click on a search term to search it again</span>
                    <div>
                        {searchResults.map(searchTerm=>{
                            return(
                                <button key={searchTerm.id} id={searchTerm.id} value={searchTerm.title} onClick={this.searchAgain}>  
                                    {searchTerm.title}
                                </button>
                            )
                        })}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h3>Type in the Search Bar to produce results</h3>
                </div>
            )
        }
    }
 
    render() {
        return(
            <div>
                <div className='previous-search-term-list'>
                    {this.receiveSearchHistory()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.previousSearchTerms,
        searches: state.searches,
        results: state.previousSearchTerms
    }
}

const mapDispatchToProps = (dispatch) => {
    // pretty self explanatory. allows the createSearch(), and SearchResultsActions() in the Actions folder to be accessible via props
    return {
        SearchResultsActions: (query) => dispatch(SearchResultsActions(query))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchHistory);