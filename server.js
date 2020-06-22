if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const compression = require('compression');
const enforce = require('express-sslify');

// create express nodejs application
const app = express();

// define port number
const port = process.env.PORT || 5000;

// Using compression Middleware
// To solve Heroku Gzipping problem
app.use(compression());

// Using body-parser Middleware
// Make sure we convert all data sent to route to json format
app.use(bodyParser.json());

/**
 * if you have binary (non-alphanumeric) data (or a significantly sized payload)
 * to transmit, use multipart/form-data.
 * Otherwise, use application/x-www-form-urlencoded.
 */

// Make sure that all url that using is
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Using express-sslify Middleware
// To redirect HTTP --> HTTPS
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Cors Middleware
// Using it to allow api call from everywhere
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// payment route for STRIPE
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ err: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
