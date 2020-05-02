import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => { //used destructuring to avoid typing props.song every time 
    if (!song) {
        return(
            <div>
                Select a song.
            </div>
        )
    }
    
    return (
        <div>
            <h3>You chose:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>
        </div>
    )
}

const mapStateToProps = state => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail)