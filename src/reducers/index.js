import {combineReducers} from 'redux';
// Reducers

const songsReducer = () => {
    return [
        { title: 'Like a Rolling Stone', duration: '4:10'},
        { title: '(I Cant Get No) Satisfaction', duration: '3:50'},
        { title: 'Imagine', duration: '3:40'},
        { title: 'Whats Going On', duration: '4:15'},
        { title: 'Respect', duration: '3:56'},
    ]
}

const selectedSongreducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongreducer
})