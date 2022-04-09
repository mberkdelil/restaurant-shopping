import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addDrinks } from './actions';


const Drinks = (props) => {

    const totalCount = props.cart.reduce((total, item) => (total = total + item.count), 0);

    const totalPrice = props.cart.reduce((total, item) => (total = total + item.count * item.price), 0);

    return (
        <div className='container' style={{ color: "white" }}>
            <nav className="navbar navbar-dark bg-dark">
            <p>Total Price: {(props.cart.length > 0 ? totalPrice < 150 ? totalPrice + props.cargo : totalPrice : 0).toFixed(2)} &#8378;</p>
            <p style={{ marginLeft: "-710px", marginBottom: "-32px" }}>
                    {totalPrice < 150 ? <p>Add {(150 - totalPrice).toFixed(2)} &#8378; More Product to Your Cart and Get Free Shipping.</p>
                        : (totalPrice).toFixed(2)}
                </p>
                <Link to="/cart">Go To Cart ({totalCount})</Link>
            </nav>
            <Link style={{ float: 'right' }} to="/yeniurun">Click To Add New Product</Link>
            <section className="about-area pt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 mb-60"><br />
                            <div className="section-title text-center">
                                <Link style={{ padding: "10px" }} to="/foods">Foods</Link>
                                <Link style={{ padding: "10px" }} to="/desserts">Desserts</Link><br /><br />
                                <h4 className="section-title text-center">Our Drinks</h4>
                            </div>
                        </div>
                    </div>
                    {
                        props.drinks.map(drink => (
                            <div style={{ display: "inline-block" }} key={drink.id} className="menu_style1 col-6">
                                <div >
                                    <div className="single_menu_list">
                                        <img src={drink.image} alt={drink.name} />
                                        <div className="menu_content">
                                            <h4>{drink.name}  <br />
                                                <p>{drink.kind}</p>
                                                <button onClick={()=>props.addDrinks(drink)} className="btn btn-warning">Add To Cart</button>
                                                <span style={{ textAlign: "center" }} >{drink.price} &#8378;</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                     <div className="row pb-60">
                        <div className="col-xl-12 text-center">
                            <div className="box_btn">
                                <Link className='footer' to="/cart">Complete The Shopping</Link>
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
        drinks: state.drinks,
        cart: state.cart,
        cargo: state.cargo
    }
}

export default connect(mapStateToProps, { addDrinks })(Drinks);
