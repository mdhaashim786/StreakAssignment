const initialState = {
    details: {
        firstname: "hi",
        secondname: "",
        email: "",
        phone: ""
    }
};
const PersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_DETAILS": {
            return {
                ...state,
                details: action.details
            }
        }
        default: {
            return state;
        }
    }
}
export default PersonReducer;