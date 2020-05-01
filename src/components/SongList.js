import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends Component {
    // whatever mapStateToProps function returns(in this case songs) is merged as props
    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

     render(){
         return (
             <div className="ui divided list">{this.renderList()}</div>
             );
         }
}

const mapStateToProps = state => { //the store state
    return {songs: state.songs}
}

// connect() is what connect a React component to a Redux store
// first parameter(mapStateToProps function) takes the store state as a parameter and returns an object that is merged as props to the connected component
// second parameter {selectSong} is an object with the action creator selectSong. internally, React-Redux binds the action creators to the dispatch of the store
export default connect(mapStateToProps, {selectSong})(SongList); // {selectSong} - es6 shortut syntax for {selectSong: selectSong}