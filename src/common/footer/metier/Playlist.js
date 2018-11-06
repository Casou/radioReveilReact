import {REST_API_GET_SONGS_URL, REST_API_SERVER} from "../../util/common";

export default class Playlist {

    constructor() {
        this.songs = [];
        this.random = true;

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

    getNextSong() {

    }


}