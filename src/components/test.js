import React from 'react';
import CartList from './Cart/CartList';

export default function test({value}){
    
    const {Checkout} =  value;
    console.log(value,Checkout);
 sessionStorage.setItem('value');
    return (
        <div className="container-fluid">
        {Checkout.map(item => {
            return (<CartList key = {item.id} item = {item} value = {value}/>);
        })}
        

        
        </div>
    );
}