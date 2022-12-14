import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {

    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}><img src={"/img/logo.png"} alt="tiendaOn" width={192} height={80}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"category/hombre"}>Hombre</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"category/mujer"}>Mujer</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"category/catalogo"}>Catalogo</NavLink>
                            </li>
                            <li className="nav-item">
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )


}

export default Navbar
