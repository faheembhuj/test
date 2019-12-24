const add_user = (user) => {
    return {
        type: "SET_USER",
        data: user
    }
}

const add_data = (data) => {
    return {
        type: "SET_DATA",
        data: data
    }
}


export {
    add_user,
    add_data,
}