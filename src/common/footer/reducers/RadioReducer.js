export const radio = (storeRadio = {}, action) => {
    let newStore;
    switch (action.type) {
        case "TOGGLE_RADIO_ACTIVATION" :
            newStore = {...storeRadio};
            newStore.status = action.payload ? "play" : "pause";
            break;
        default :
            newStore = storeRadio;
    }
    return newStore;
};
