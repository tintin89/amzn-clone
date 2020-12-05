// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const express = require('express');
const cors = require ('cors');
const stripe =require('stripe')('sk_test_51Hu8QOLPEJ9VOYsy6Oi3ORE8lQqmBbPIhd6Zb89tpKLmYCoJKIqoxs9tWXHRAMEyy3PAdg7mKfY8kmEcyk0g9xpB00nr5xlF9J');

//-----API-----

//App config
const app=express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());


//API routes
app.get('/',(request,response) =>response.status(200).send('hello world'));

app.post('/payments/create',async (request,response)=>{
    const total = request.query.total;
    console.log('payment request recieved >>>>>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    })

    //ok-created
    response.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
})




//Listen command

exports.api = functions.https.onRequest(app);


// http://localhost:5001/online-shopping-a4c35/us-central1/api    local API