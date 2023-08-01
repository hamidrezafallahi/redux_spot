const initialstate = {
    count: 20,
}
const reducer=(state=initialstate,action) => {
    switch (action.type) {
        case "INCREASE":
            return { ...state, count: state.count + 1 }
        default:
            return state;
    }
}
export default reducer;