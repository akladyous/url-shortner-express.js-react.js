import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userState } from "../features/users/userSlice.js";
export default function Header() {
    const state = useSelector(userState);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <a href="/" className="navbar-brand p-0">
                {/* <img src='../assets/images/favicon.ico' alt="Logo" /> */}
                <h1 className="m-0">URL </h1>
            </a>
            <button
                className="navbar-toggler rounded-pill"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">

                    {/* <Link className="nav-item nav-link" aria-current="page" to="#home" >Home</Link>
                    <Link className="nav-item nav-link" aria-current="page" to="#about" >About</Link>
                    <Link className="nav-item nav-link" aria-current="page" to="#overview" >Overview</Link>
                    <Link className="nav-item nav-link" aria-current="page" to="#features" >Features</Link>
                    <Link className="nav-item nav-link" aria-current="page" to="#pricing" >Pricing</Link>
                    <Link className="nav-item nav-link" aria-current="page" to="#testimonial" >Testimonial</Link>
                    <Link className="nav-item nav-link" aria-current="page" to="#contact" >Contact</Link> */}

                    <a href="#home" className="nav-item nav-link">Home</a>
                    <a href="#about" className="nav-item nav-link">About</a>
                    <a href="#overview" className="nav-item nav-link">Overview</a>
                    <a href="#features" className="nav-item nav-link">Features</a>
                    <a href="#pricing" className="nav-item nav-link">Pricing</a>
                    <a href="#testimonial" className="nav-item nav-link">Testimonial</a>
                    <a href="#contact" className="nav-item nav-link">Contact</a>

                </div>
                <Link
                    className="btn btn-light rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
                    to={state.isAuthenticated ? 'users/logout' : 'users/signin'}
                >
                    {state.isAuthenticated ? 'Logout' : 'Login'}
                </Link>
                {/* <a href="/" className="btn btn-light rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Login</a> */}
                <a href="/" className="btn btn-light rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
                    Singup
                </a>
            </div>
        </nav>
    );
}
