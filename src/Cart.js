import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart, increaseCount, decreaseCount } from "./actions/index"

const Cart = (props) => {

    const totalPrice = props.cart.reduce((total, item) => (total = total + item.count * item.price), 0);

    const total = totalPrice < 150 ? totalPrice + props.cargo : totalPrice;

    return (
        <>
            <div>

                <h5 style={{ color: "yellow", textDecoration: "underline", fontWeight: "bold" }}>
                Free Shipping on Purchases of $150 or More!</h5>
                <p style={{ color: "yellow", float: "right", position: "absolute", marginLeft: "1050px", marginTop: "-30px" }}>
                    {totalPrice < 150 ? <p>Add {(150 - totalPrice).toFixed(2)} More Product to Your Cart and Get Free Shipping.</p>
                        : (totalPrice).toFixed(2)}
                </p>

                {
                    props.cart.map(cart => (
                        <div key={cart.id} style={{ background: "grey" }} className="book">
                            <img
                                src={cart.image}
                                alt={cart.name}
                            />
                            <div>
                                <h4>Product: {cart.name}</h4>
                                <p>Type: {cart.type}</p>
                                <p>Price: {cart.price}&#8378;</p>
                                <p>Total: {(cart.price * cart.count).toFixed(2)} &#8378;</p>
                                <p>There Are Totally {cart.count} Items Of This Product In Your Cart.</p>
                                <button onClick={() => props.decreaseCount(cart.id)} style={{ background: "orange" }}>-</button>
                                <button onClick={() => props.removeFromCart(cart.id)}
                                    style={{ background: "black", color: "yellow", fontWeight: "bold", fontSize: "15px" }} >
                                    Remove From Cart</button>
                                <button onClick={() => props.increaseCount(cart.id)} style={{ background: "orange" }}>+</button>
                            </div>
                        </div>
                    ))
                }
                <div style={{ background: "black", textAlign: "center", fontWeight: "bold" }} >
                    <Link style={{ textAlign: "center" }} to="/">Continue Shopping</Link>
                </div>
                <hr/>
                <h3 style={{ color: "white" }}>Total Cart Price:
                    <ul style={{ marginLeft: "250px", marginTop: "-35px" }}>
                        <li>Cargo:  {totalPrice < 150 ? props.cargo : <span>Free Cargo!</span>} </li>
                        <li>Your Products: {totalPrice.toFixed(2)} &#8378;</li>
                        <span>Total : {total.toFixed(2)} &#8378;</span>
                    </ul>
                </h3>

            </div>
            <div className="row pb-60">
                <div className="col-xl-12 text-center">
                    <div className="box_btn">

                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        cargo: state.cargo
    }
}

export default connect(mapStateToProps, { removeFromCart, increaseCount, decreaseCount })(Cart);
