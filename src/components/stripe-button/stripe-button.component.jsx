import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceFroStripe = price * 100;
    const publishableKey = 'pk_test_MXM9u9RytR3kJ59VIG0LjqRd00YiUwijua';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Supreme BKK'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Yout total is $${price}`}
            amount={priceFroStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;