import React from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {assign} from "lodash";
import {bindActionCreators} from "redux";
import cn from 'classnames';
import RadioActions from "../actions/RadioActions";
import radioIcon from 'images/radio.png';
import Playlist from "../metier/Playlist";
import defaultAudio from "../../../public/musiques/default_songs/Big_Blood_-_01_-_Bah-num.mp3";

class Radio extends React.Component {

    constructor(props) {
        super(props);
        // this.sound = new Audio(props.radioState.flux);
        this.sound = new Audio(defaultAudio);
        this.sound.onerror = () => console.log("error");
        this.sound.onended = () => console.log("ended");

        new Playlist();
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.radioState !== this.props.radioState) {
            if (nextProps.radioState.status === "play") this.sound.play();
            else this.sound.pause();
        }
    }


    render() {
        const { radioState, radioActions } = this.props;

        return (
            <div>
                <div id={"radioIcon"}
                     className={cn({ activated : radioState.status === "play" })}
                     onClick={ radioActions.toggleRadio }>
                    <img src={ radioIcon } />
                </div>
            </div>
        );
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