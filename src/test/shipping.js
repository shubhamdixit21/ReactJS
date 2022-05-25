import { render } from '@testing-library/react';
import React, {Component} from 'react';
import ShippingMethodData from '../data/shipping_method.json';
import './styles.css';

console.log(ShippingMethodData);
class Shipping extends Component{
    render(){
        return(
            <div>
                <h1 style={{textAlign:"center", color:"darkred"}}><u>Program to Print Shipping Method</u></h1>
                <MethodPrint />
            </div>
        )
    }
}

class MethodPrint extends Component{
    render(){
        return(
            <div>
                <table className='tabledata'>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>Amount</td>
                            <td>Available</td>
                            <td>Base Amount</td>
                            <td>Carrier Code</td>
                            <td>Carrier Title</td>
                            <td>Error Message</td>
                            <td>Method Code</td>
                            <td>Method Title</td>
                            <td>Price Excluding Tax</td>
                            <td>Price Including Tax</td>
                            <td>Action</td>
                        </tr>
                        {ShippingMethodData.map((ShippingMethod,index)=>{
                                let status = ShippingMethod.available == true ? "Available" : "Not Available"; 
                             return   <tr key={index}>
                                    <td>{index = index + 1}</td>
                                    <td>{ShippingMethod.amount}</td>
                                    <td>{status}</td>
                                    <td>{ShippingMethod.base_amount}</td>
                                    <td>{ShippingMethod.carrier_code}</td>
                                    <td>{ShippingMethod.carrier_title}</td>
                                    <td>{ShippingMethod.error_message}</td>
                                    <td>{ShippingMethod.method_code}</td>
                                    <td>{ShippingMethod.method_title}</td>
                                    <td>{ShippingMethod.price_excl_tax}</td>
                                    <td>{ShippingMethod.price_incl_tax}</td>
                                    <td><button>View</button></td>
                                </tr>
                        }                     
                        
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}




export default Shipping;