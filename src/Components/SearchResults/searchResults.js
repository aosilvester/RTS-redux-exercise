import React, { Component } from 'react';
import { connect } from 'react-redux';
import './searchResults.css'

class SearchResults extends Component {
    receiveSearchResults = () => {
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
                        return(
                            <div>
                                <a key={Math.random()} data-key={item.created_at_i} className='search-item' href={item.url}>{item.title}</a>
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
