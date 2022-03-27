import React, { useEffect, useRef, useState } from 'react'

export default function PayPal({total}) {
    // const { cart } = useSelector(state => state.cart);
    const paypal = useRef();
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: "CAD",
                                    // value: cart.reduce(
                                    //     (currentSum, currentCartItem) =>
                                    //         currentSum +
                                    //         currentCartItem.count *
                                    //         currentCartItem.productPrice,
                                    //     0
                                    // ).toFixed(2)
                                    value:total
                                    //JSON.parse(window.localStorage.getItem('cart'))
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);
            
    }, []);
    return (
        <div>
            <div ref={paypal}> </div>
        </div>
    )
}
