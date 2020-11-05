import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}){
    const {cartSubTotal,cartTax,cartTotal, clearCart}= value;
    const {id, company, img, info, price, title, inCart } = value.detailProduct;
    return (
        <React.Fragment>
            <div className="container">
            <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
        <Link to ="/">
            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button" 
            onClick={()=> clearCart()}
            >
                clear cart 
            </button>
        </Link>&nbsp;&nbsp;&nbsp;
        <Link to ="/checkout">
        <button className="btn btn-outline-info text-uppercase mb-3 px-5"
            type="button"  onClick={() => {
                value.addToCart(id);
                
                

                //3.07
            }}
            
            >
                checkout
            </button>
      </Link>
        <h5>
            <span className="text-title">subtotal : </span>
            <strong>Rs {cartSubTotal}</strong>
        </h5>
        <h5>
            <span className="text-title">shipping : </span>
            <strong>Rs {cartTax}</strong>
        </h5>
        <h5>
            <span className="text-title">total : </span>
            <strong>Rs {cartTotal}</strong>
        </h5>

            </div>

            </div>
            </div>
        </React.Fragment>
    );
}