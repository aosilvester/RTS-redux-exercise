// // http://hn.algolia.com/api/v1/search?query=

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './searchResults.css'
class SearchResults extends Component {

    receiveSearchResults = () => {
        // console.log(this.props.searchResults.length)
        if (this.props.searchResults.length  < 1){

            return(
                <div>
                    <p className="">There are no results to display.</p>
                </div>
            )
        } else {
            const { searchResults } = this.props;
            return(
                <div className='search-card'>
                    {searchResults.map(item=>{
                        {/* console.log(item.created_at_i) */}
                        return(
                            <div>
                            <a key={item.created_at_i} className='search-item' href={item.url}>{item.title}</a>
                            </div>
                        )
                    })}
                </div>
            )
            
        }
    }

    render() {
        return(
            <div>
               <h1>Search Results</h1>
                <div className='search-results-list'>
                    {this.receiveSearchResults()}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        // the returned object represents the different properties we want to be in props
        searchResults: state.searches
    }
}

export default connect(mapStateToProps)(SearchResults);
