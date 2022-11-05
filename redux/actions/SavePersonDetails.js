//REDUX Store

export const SavePersonDetails = (details) => ({
    type: "SAVE_DETAILS",
    details: {
        firstname: details.firstname,
        secondname: details.secondname,
        email: details.email,
        phone: details.phone
    }
});