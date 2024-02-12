const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51OiX5VSBPi0sxMFbbXsAGi0o8Qcf8Va208Yryudrti8NrFRN9AVZVl9B2RLEGAjg58td6gtCTsI2dFiKDTdeqeJQ00ibxMCdB7"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    console.log(total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


//
exports.api = functions.https.onRequest(app)