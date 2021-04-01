import React, { Component } from 'react';
import './Searcher.css';

class Searcher extends Component {

    render() {
        return (
            <div class="row">
                <div class="search col-md-12">
                    <label>Search for user</label>
                    <input type="search" data-search="data-search" placeholder="Search..." />

                    <div class="recent-search">
                        <button class="clear-btn" disabled="disabled" onclick="clearRecent()">Recent Users</button>
                        <div class="recent-search__list"></div>
                    </div>
                </div>
                <div class="list" id="list" data-searchable="data-searchable"></div>
            </div>
        );
    }
}

export default Searcher;