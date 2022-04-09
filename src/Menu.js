import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Menu = (props) => {

    const totalCount = props.cart.reduce((total, item) => (total = total + item.count), 0);

    const totalPrice = props.cart.reduce((total, item) => (total = total + item.count * item.price), 0);

    return (
        <div className='container' style={{ color: "white" }}>
            <nav className="navbar navbar-dark bg-dark">
                <p>Total Price: {(props.cart.length > 0 ? totalPrice < 150 ? totalPrice + props.cargo : totalPrice : 0).toFixed(2)} &#8378;</p>
                <Link to="/cart">Go To Cart ({totalCount})</Link>
            </nav>
            <Link style={{ float: 'right' }} to="/yeniurun">Click To Add New Product</Link>
            <section className="about-area pt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 mb-60"><br />
                            <div className="section-title text-center">
                                <Link style={{ padding: "10px" }} to="/drinks">Baverages</Link>
                                <Link style={{ padding: "10px" }} to="/foods">Foods</Link>
                                <Link style={{ padding: "10px" }} to="/desserts">Desserts</Link><br /><br />
                                <h4 className="section-title text-center">Our Menu</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        cargo: state.cargo
    }
}

export default connect(mapStateToProps)(Menu);
