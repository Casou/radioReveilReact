import React from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {assign} from "lodash";
import {bindActionCreators} from "redux";
import cn from 'classnames';
import RadioActions from "../actions/RadioActions";
import RadioPlaylist from "../metier/RadioPlaylist";
import radioIcon from 'images/radio.png';

class Radio extends React.Component {

    constructor(props) {
        super(props);
        this.playlist = new RadioPlaylist();
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.radioState !== this.props.radioState) {
            this.playlist.toggle(nextProps.radioState.status);
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