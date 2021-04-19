import React, { Component } from 'react';
import './Searcher.css';

class Searcher extends Component {

    render() {
        return (
            <div className="row">
                <div className="search col-md-12">
                <div className="top-flex">
                    <button className="clear-btn col-md-4" onClick={()=>this.props.handle('close')}>Back to search</button>
                    <button className="clear-btn col-md-4" onClick={()=>this.props.handle('setting')}>Setting</button>
                    <button className="clear-btn col-md-4" onClick={()=>this.props.handle('dashboard')}>Dashboard</button>
                </div>
                    <label>Search for user</label>
                    <input type="search" onChange={this.props.onchange}
                    
                    placeholder="Search..." />
                    <div className="recent-search">
                        <button className="clear-btn col-md-8" 
                         
                        onClick={this.props.clicker}
                        >Recent Users</button>
                        <div className="recent-search__list"></div>
                    </div>
                </div>
                <div className="list" id="list" data-searchable="data-searchable"></div>
            </div>
        );
    }
}

export default Searcher;