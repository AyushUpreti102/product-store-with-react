import React, { useState } from 'react'
import { login } from '../../reducers/authReducers'
import { useDispatch } from 'react-redux'

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = function (e) {
        e.preventDefault()

        // Perform login in productReducers
        dispatch(login({ username, password }))
    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid" alt="Phone image" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                                <input type="text" required id="form1Example13" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <label className="form-label" htmlFor="form1Example13">Email address</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-4">
                                <input type="password" required id="form1Example23" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label className="form-label" htmlFor="form1Example23">Password</label>
                            </div>

                            <div className="d-flex justify-content-around align-items-center mb-4">
                                {/* <!-- Checkbox --> */}
                                <a href="#">Forgot password?</a>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
