
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSearch } from '../../Actions/createSearch';
import { SearchResultsActions } from '../../Actions/searchResultsActions';


class Navbar extends Component {
    state = {
        searchTerm: "" 
    }

    handleChange = (e) => {
        // value of the input from the search form
        let newSearchTerm = e.target.value;
        // takes newSearchTerm and places it into state
        this.setState({
            searchTerm: newSearchTerm
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // capture the current input to save to our search history
        this.props.createSearch(this.state.searchTerm);
        // capture the input search tearm to save for search history
        this.props.SearchResultsActions(this.state.searchTerm)
    }

    render() {
        return(
            <div>
                <span>hello from search bar component</span>
                <form onSubmit={this.handleSubmit}>                  
                    <label htmlFor='name'>Search:</label>
                    <input type='text' id='SearchTerm' onChange={this.handleChange}></input>                   
                    <button >Submit</button>                
                </form>
                <div className='searchResults'>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.previousSearchTerms)
    return {
        searches: state.searches,
        results: state.previousSearchTerms
    }
}

const mapDispatchToProps = (dispatch) => {
    // pretty self explanatory. allows the createSearch(), and SearchResultsActions() in the Actions folder to be accessible via props
    return {
        createSearch: (terms) => { dispatch(createSearch(terms)) },
        SearchResultsActions: (query) => dispatch(SearchResultsActions(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);