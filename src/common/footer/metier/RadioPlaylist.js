import {REST_API_GET_SONGS_URL, REST_API_SERVER} from "../../util/common";
import defaultAudio from "musiques/default_songs/Big_Blood_-_01_-_Bah-num.mp3";

export default class RadioPlaylist {

    constructor() {
        this.songs = [];
        this.random = true;

        // this.sound = new Audio(props.radioState.flux);
        this.sound = new Audio(defaultAudio);
        this.sound.onerror = () => console.log("error");
        this.sound.onended = () => console.log("ended");

        fetch(REST_API_SERVER + REST_API_GET_SONGS_URL)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
            })
            .catch(error => {
                console.error("Error while getting playlist songs");
                console.error(error);
            });
    }

    play() {
        this.sound.play();
    }
    pause() {
        this.sound.pause();
    }

    toggle(status) {
        if ((!status && this.sound.paused) || status === "play") {
            this.play();
        } else {
            this.pause();
        }
    }

    getNextSong() {

    }


}