import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    // whatever mapStateToProps function returns falls into props, in this case songs
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

const mapStateToProps = state => { //as it is obvious from the name takes the global state and return to props 
    return {songs: state.songs}
}

export default connect(mapStateToProps)(SongList);