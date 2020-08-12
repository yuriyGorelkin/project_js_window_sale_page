const clearState = (state) => {
    for (let prop in state) {
        if (state.hasOwnProperty(prop)) {
            delete state[prop]
        }
    }
}

export default clearState