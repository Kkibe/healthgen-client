import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data));
        window.history.back()
    } catch (err) {
        dispatch(loginFailure(true))
        setTimeout(() => {
            dispatch(loginFailure(false))
        }, 3000)
    }
}

export const register = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/register', user)
        dispatch(loginSuccess(res.data));
        window.history.back()
    } catch (err) {
        dispatch(loginFailure(true))
        setTimeout(() => {
            dispatch(loginFailure(false))
        }, 3000)
    }
}

export const updatedUser = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/users', user)
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure())
    }
}