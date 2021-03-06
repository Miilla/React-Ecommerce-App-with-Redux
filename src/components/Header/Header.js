import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Background from '../../resources/cars.png';
import './Header.scss';

var headerImgae = {
    width: "100%",
    height: "10%",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
};
var menuShadow = {
    backgroundColor: "rgba(0,0,0,0.8)"
};


const Header = ({ cartLength }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={headerImgae}>
            <div className="container" style={menuShadow}>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Sklep</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/contact"}>Kontakt</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                aria-hidden="true" />Koszyk {cartLength ? `(${cartLength})` : ''}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


const mapStateToProps = (state) => {
    return {
        cartLength: state.shop.cart.length
    }
};

export default connect(mapStateToProps, null)(Header);


/*
*                         <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
* */