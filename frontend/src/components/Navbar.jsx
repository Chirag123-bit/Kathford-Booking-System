import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <Link className="navbar-brand" to="/"> Mi<span className='colored-text'>Casa</span> </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/listings">Listings</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>

                    <div>
                        <Link className="btn btn-outline-primary mx-2" to='/login'>Login</Link>
                        <Link className="btn btn-success" to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar