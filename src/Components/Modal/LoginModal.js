import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/productReducers'

export const Modal = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = function (e) {
        e.preventDefault()
        console.log('called submit');
        dispatch(login({ username, password }))
    }
    return (
        <>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src='https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png' height="30px"></img>
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login To Continue</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className='d-grid gap-2'>
                                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
