import axios from "axios"
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/';
const API_KEY = 'AIzaSyDCHyjUnnntr9QMaufRn_buNdQ_YyvjCx0';
export const signUp = (details, callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}accounts:signUp?key=${API_KEY}`,
                {
                    email: details.email,
                    password: details.password,
                    returnSecureToken: true
                }
            )
            dispatch({
                type: 'SIGNUP',
                payload: response.data
            })
            localStorage.setItem("token", response.data.idToken)
            return callback(response.data)
        }
        catch (error) {

            return callback({
                error: true,
                response: error.response
            })
        }
    }

}


export const loginWithEmailAndPassword = (details, callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}accounts:signInWithPassword?key=${API_KEY}`,
                {
                    email: details.email,
                    password: details.password,
                    returnSecureToken: true
                }
            )
            dispatch({
                type: 'LOGIN',
                payload: response.data
            })
            localStorage.setItem("token", response.data.idToken)
            return callback(response.data)
        }
        catch (error) {

            return callback({
                error: true,
                response: error.response
            })
        }
    }
}

export const checkIsLoggedIn = callback => {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem("token")
            if (!token) {
                return;
            }
            const response = await axios.post(`${BASE_URL}accounts:lookup?key=${API_KEY}`,
                {
                    idToken: token
                }
            )
            dispatch({
                type: 'LOGIN',
                payload: {
                    idToken: token,
                    localID: response.data.users[0].localID,
                    ...response.data
                }
            })

            return callback(response.data)
        }
        catch (error) {

            return callback({
                error: true,
                response: error.response
            })
        }
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem("token")
        dispatch({
            type: "LOGOUT"
        })
    }
}