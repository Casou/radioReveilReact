export default {

    toggleRadio: () => (dispatch, getState) => {
        return dispatch({
            type : "TOGGLE_RADIO_ACTIVATION",
            payload : getState().radio.status !== "play"
        });
    },

};