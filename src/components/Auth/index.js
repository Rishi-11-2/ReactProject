import { Fragment, useEffect, useState } from "react"
import axios from "axios"
import { NavLink, useNavigate, useParams, } from "react-router-dom"
import { useDispatch } from "react-redux"
import Loader from "../UI/Loader"
import { loginWithEmailAndPassword, signUp } from "../../actions/auth"

const AuthIndex = type => {
    const [Loader1, setLoader] = useState(false)
    const params = useParams()
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const [details, setDetails] = useState(
        {
            email: "",
            password: ""
        }
    )
    const handleInput = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        return () => {
            setLoader(false)
            setDetails({
                email: "",
                password: ""
            })
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(details)
        if (type.type === "signup") {
            setLoader(true)
            dispatch(signUp(details, data => {
                if (data.error) {
                    alert(data?.response?.data?.error?.message || "error occured")

                }
                else {
                    console.log("successfully signed up")

                    Navigate("/", { replace: true })
                }
                setLoader(false)
            }))
        }
        else if (type.type === 'login') {
            setLoader(true)
            dispatch(loginWithEmailAndPassword(details, data => {
                if (data.error) {
                    alert(data?.response?.data?.error?.message || "error occured")

                }
                else {
                    console.log("successfully Logged IN")

                    Navigate("/", { replace: true })
                }
                setLoader(false)
            }))
        }
    }
    return (
        <Fragment>
            <div className="auth-container">
                <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink exact="true" to={"/login"}>  <h3>Login</h3></NavLink>
                        <NavLink exact="true" to={"/signup"}>  <h3>Signup</h3></NavLink>
                    </div>

                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="input-wrap">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type={"text"} name="email"
                                placeholder="Enter Email"
                                value={details.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input type={"password"} name="password"
                                placeholder="Enter Password"
                                value={details.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="button-wrap">
                            <button className="login-btn">
                                {type.type === "login" ? "Login" : "Signup"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {Loader1 && <Loader />}
        </Fragment>
    )

}
export default AuthIndex