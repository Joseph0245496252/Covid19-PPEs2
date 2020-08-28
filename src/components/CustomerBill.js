import React from 'react'

export const CustomerBill = ({name, address, email, cartItems}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{address}</h3>
            <h3>{email}</h3>
        <div>
        {cartItems && cartItems.map((item)=>(
            <ul>
                <li>{item._id}</li>
                <li>{item._titile}</li>
                <li>{item._description}</li>
                <li>{item._availableSizes}</li>
                <li>{item._price}</li>
            </ul>
        ))}
        
        </div> 
        </div>
    )
}
