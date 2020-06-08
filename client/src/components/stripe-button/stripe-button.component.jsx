import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceFroStripe = price * 100;
  const publishableKey = 'pk_test_MXM9u9RytR3kJ59VIG0LjqRd00YiUwijua';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceFroStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert(
          `There was an issue with your payment. 
          Please make sure you use the provided credit card`
        );
      });
  };

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
  );
};

export default StripeCheckoutButton;
