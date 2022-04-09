import React, { useState } from 'react';
import { newAdd, setSelect } from './actions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const YeniUrun = (props) => {
    console.log(props.foods);
    const [product, setProduct] = useState({ id: Math.floor(Math.random() * 96), name: "", type: "", price: "", image: ""});
    console.log(product);
    return (
        <form>
            <select value={"Eklemek istediğiniz ürün kategorisi seçin."} onChange={e => props.setSelect(e.target.value)} className="form-select" aria-label="Default select example">
                <option selected>Select The Category You Want To Add.</option>
                <option value="foods">Foods</option>
                <option value="drinks">Drinks</option>
                <option value="desserts">Desserts</option>
            </select>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Name</label>
                <input onChange={e => setProduct({ ...product, name: e.target.value })} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name" />
                <small id="emailHelp" className="form-text text-muted">This field is required</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Type</label>
                <input onChange={e => setProduct({ ...product, type: e.target.value })} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Type" />
                <small id="emailHelp" className="form-text text-muted">This field is required</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Price</label>
                <input onChange={e => setProduct({ ...product, price: e.target.value })} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Price" />
                <small id="emailHelp" className="form-text text-muted">This field is required</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Product Image</label>
                <input onChange={e => setProduct({ ...product, image: e.target.value })} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Image" />
                <small id="emailHelp" className="form-text text-muted">This field is required</small>
            </div>
            <button onClick={e => {
                e.preventDefault();
                props.newAdd(product)
            }} type="submit" className="btn btn-primary">Add Product</button>
            <Link to="/">Go To The Homepage</Link>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        foods: state.foods
    }
}

export default connect(mapStateToProps, { newAdd ,setSelect})(YeniUrun);
