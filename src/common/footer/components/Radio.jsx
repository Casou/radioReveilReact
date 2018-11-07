import React from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {assign} from "lodash";
import {bindActionCreators} from "redux";
import cn from 'classnames';
import RadioActions from "../actions/RadioActions";
import radioIcon from 'images/radio.png';
import {REST_API_GET_SONGS_URL, REST_API_SERVER} from "../../util/common";
import song1 from 'musiques/default_songs/Big_Blood_-_01_-_Bah-num.mp3';
import song2 from 'musiques/default_songs/John_Wesley_Coleman_-_07_-_Tequila_10_Seconds.mp3';
import song3 from 'musiques/default_songs/junior85_-_07_-_Function.mp3';
import song4 from 'musiques/default_songs/Marco_Raaphorst_-_mafkees.mp3';
import song5 from 'musiques/default_songs/Supercute_Bye_Byes_-_11_-_odd_number_six.mp3';

class Radio extends React.Component {

    constructor(props) {
        super(props);
        this.audio = null;
        this.audioSource = null;

        this.state = {
            allSongs : [],
            remainingSongs : [],
            playedSongs : [],
            // currentSong : props.radioState.flux,
            currentSong : null,
        };

        this._handleError = this._handleError.bind(this);
        this._getNextSong = this._getNextSong.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.radioState.status !== this.props.radioState.status) {
            this.toggle(nextProps.radioState.status);
        }
    }

    componentDidMount() {
        this.fetchDefaultSongs()
            .then(songs => {
                this.setState({
                    ...this.state,
                    allSongs : songs.files,
                    remainingSongs : songs.files,
                    playedSongs : []
                });
            });

        this.audio.onerror = this._handleError;
        this.audio.onended = this._getNextSong;
        this.audioSource.onerror = this._handleError;
    }

    componentDidUpdate(prevProps, prevState) {
        this.audio.load();
    }

    render() {
        const { radioState, radioActions } = this.props;
        const { currentSong } = this.state;

        return (
            <div>
                <audio ref={instance => this.audio = instance } preload={"auto"}>
                    <source src={ currentSong }
                            type="audio/wav"
                            ref={instance => this.audioSource = instance } />
                </audio>
                <div id={"radioIcon"}
                     className={cn({ activated : radioState.status === "play" })}
                     onClick={ radioActions.toggleRadio }>
                    <img src={ radioIcon } />

                </div>
            </div>
        );
    }

    fetchDefaultSongs() {
        return new Promise((resolve, reject) =>
            fetch(REST_API_SERVER + REST_API_GET_SONGS_URL)
                .then((response) => response.json())
                .then((response) => {
                    resolve(response);
                })
                .catch(error => {
                    console.error("Error while getting playlist songs");
                    reject(error);
                }));
    }

    play() { this.audio.play(); }
    pause() { this.audio.pause(); }

    toggle(status) {
        if ((!status && this.audio.paused) || status === "play") {
            this.play();
        } else {
            this.pause();
        }
    }

    _handleError(error) {
        console.error("Error radio", error);
        this._getNextSong();
    }

    _getNextSong() {
        const { currentSong, playedSongs, remainingSongs, allSongs } = this.state;
        let remainingsSongsModified = [...remainingSongs];
        if (!remainingsSongsModified.length) {
            remainingsSongsModified = [...allSongs];
        }

        let playedSongsModified = [...playedSongs];
        if (currentSong) {
            playedSongsModified.push(currentSong);
        }

        let randomIndex = Math.round(Math.random() * remainingSongs.length);
        const newCurrentSong = remainingsSongsModified[randomIndex];
        remainingsSongsModified.splice(randomIndex, 1);

        this.setState({
            ...this.state,
            currentSong : require('musiques/default_songs/' + newCurrentSong.name),
            remainingSongs : remainingsSongsModified,
            playedSongs : playedSongsModified
        });
    }
}

Radio.propTypes = {
    radioState: PropTypes.object.isRequired
};


export default connect(state => assign({}, {
    radioState: state.radio
}), dispatch => ({
    radioActions: bindActionCreators(RadioActions, dispatch)
}))(Radio);