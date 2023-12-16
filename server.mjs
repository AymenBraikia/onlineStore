/*
shell commands :
npm init -y
npm i express cors mongodb
*/

const password = "Far_cry_6";

import { MongoClient, ServerApiVersion } from "mongodb"
// import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = `mongodb+srv://Aymen:${password}@cluster0.eelos6c.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        console.log("connecting to the Db");
        await client.connect();
    } finally {
        // Ensures that the client will close when you finish/error
        console.log("connected");
    }
}
run().catch(console.dir);

async function getData() {
    let data = await client.db("Aymen").collection("webStore").find({}).toArray();
    return data;
}
getData();
async function hotDeals() {
    let data = await client.db("Aymen").collection("hot deals").find({}).toArray();
    return data;
}
hotDeals();

import fetch from 'node-fetch';
import path from "path"

const PAYPAL_CLIENT_ID = "AYo1IPJPIZp34kiDflQuY0ZPMxDJ5Kz1hH1r02RDMxK9nr1JY4ATV0eoP_tVoni-hMFUTQZPRRg7gxsS"
const PAYPAL_CLIENT_SECRET = "EHMi-GcTspwGTx2VuIjKbCigqaKQpO-R5pe4nBlYYuCcfX1X95PGyZy0WDtV_brqIaPSTqCe-zkvvAOh"
const base = "https://api-m.sandbox.paypal.com";

import express from "express";
const app = express();
import cors from "cors";
app.use(express.json());
app.use(cors());

const Port = 8080;
app.listen(Port, () => console.log("Server is running on port: " + Port));
app.get("/fetchData", async (req, res) => {
    res.json(await getData());
});
app.get("/fetchDeals", async (req, res) => {
    res.json(await hotDeals());
});

app.post("/signIn", async (req, res) => {
    const info = req.body;
    if ((await client.db("Aymen").collection("users").findOne({ username: info.username }) || await client.db("Aymen").collection("users").findOne({ email: info.email })) == null) {
        res.json(JSON.stringify({ succession: false, reason: "could not find the account", description: "we could not find this account" }));
        return;
    }

    if (await client.db("Aymen").collection("users").findOne({ "email": info.email }) || client.db("Aymen").collection("users").findOne({ "username": info.username })) {
        if (await client.db("Aymen").collection("users").findOne({ "password": info.password })) {
            let user = await client.db("Aymen").collection("users").findOne({ "email": info.email, "password": info.password });
            if (user == null) user = await client.db("Aymen").collection("users").findOne({ username: info.username, password: info.password });
            res.json(JSON.stringify({ succession: true, username: user.username, email: user.email }));
        }
        else res.json(JSON.stringify({ succession: false, reason: "password incorrect", description: "password incorrect" }));
    }
});
app.post("/signUp", async (req, res) => {
    const info = req.body;
    if (await client.db("Aymen").collection("users").findOne({ username: info.username })) {
        res.json(JSON.stringify({ succession: false, reason: "username already in use", description: "username is not valid use another one" }));
        return;
    }
    if (await client.db("Aymen").collection("users").findOne({ email: info.email })) {
        res.json(JSON.stringify({ succession: false, reason: "email already in use", description: "email is not valid user another one" }));
        return;
    }
    await client.db("Aymen").collection("users").insertOne({ username: info.username, email: info.email, password: info.password, cart: [], saves: [], date: new Date().getDate().toString() + "-" + (new Date().getMonth() + 1).toString() + "-" + new Date().getFullYear().toString() });
    res.json(JSON.stringify({ succession: true, username: info.username, email: info.email, cart: [], saves: [] }));
});

app.post("/settings", async (req, res) => {
    res.json(JSON.stringify(await client.db("Aymen").collection("users").findOne({ email: req.body.email, username: req.body.username })));
});

app.post("/save", async (req, res) => {
    const newData = req.body;
    const oldData = client.db("Aymen").collection("users").findOne({ email: req.body.oldEmail });
    if (oldData.email !== newData.email) await client.db("Aymen").collection("users").findOneAndUpdate({ email: oldData.email }, { email: newData.email }, (err) => { if (err) console.log(err); else console.log("done"); });
});

app.post("/saveAdd", async (req, res) => {
    await client.db("Aymen").collection("users").updateOne({ email: req.body.email },
        {
            $push: {
                saves: req.body.item
            }
        }
    ).catch(err => { res.json(JSON.stringify({ succession: false })); });
    res.json(JSON.stringify({ succession: true }));
});
app.post("/cartAdd", async (req, res) => {
    await client.db("Aymen").collection("users").updateOne({ email: req.body.email },
        {
            $push: {
                cart: req.body.item
            }
        }
    ).catch(err => { res.json(JSON.stringify({ succession: false })); });
    res.json(JSON.stringify({ succession: true }));
});

app.post("/cart", async (req, res) => {
    const cart = await client.db("Aymen").collection("users").findOne({ email: req.body.email });
    if (await client.db("Aymen").collection("users").findOne({ email: req.body.email })) res.json(JSON.stringify({ succession: true, items: cart.cart }));
    else res.json(JSON.stringify({ succession: false, reason: "could not find user" }));
});

app.post("/saves", async (req, res) => {
    const saves = await client.db("Aymen").collection("users").findOne({ email: req.body.email });
    if (await client.db("Aymen").collection("users").findOne({ email: req.body.email })) res.json(JSON.stringify({ succession: true, items: saves.saves }));
    else res.json(JSON.stringify({ succession: false, reason: "could not find user" }));
});

app.post("/savedList", async (req, res) => {
    const saved = await client.db("Aymen").collection("users").findOne({ email: req.body.email });
    if (await client.db("Aymen").collection("users").findOne({ email: req.body.email })) res.json(JSON.stringify({ succession: true, items: saved.saves }));
    else res.json(JSON.stringify({ succession: false, reason: "could not find user" }));
});

app.post("/cartContains", async (req, res) => {
    const cart = await client.db("Aymen").collection("users").findOne({ email: req.body.email }).catch(e => { return; });
    cart.forEach(item => {
        item.name == req.name && item.color == req.color ? res.json(JSON.stringify({ contained: true })) : res.json(JSON.stringify({ contained: false }));
    });
});

app.post("/cartRemove", async (req, res) => {
    let oldInfo = await client.db("Aymen").collection("users").findOne({ email: req.body.email });
    let oldCart = oldInfo.cart;
    await client.db("Aymen").collection("users").updateOne({ email: req.body.email }, {
        $pull: {
            cart: oldCart.filter(e => {
                return e.imageUrl == req.body.imageUrl;
            })[0]
        }
    });
});
app.post("/savesRemove", async (req, res) => {
    let oldInfo = await client.db("Aymen").collection("users").findOne({ email: req.body.email });
    let oldsaves = oldInfo.saves;
    await client.db("Aymen").collection("users").updateOne({ email: req.body.email }, {
        $pull: {
            saves: oldsaves.filter(e => {
                return e.imageUrl == req.body.imageUrl;
            })[0]
        }
    });
});


// paypal
const generateAccessToken = async () => {
    try {
        if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
            throw new Error("MISSING_API_CREDENTIALS");
        }
        const auth = Buffer.from(
            PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
        ).toString("base64");
        const response = await fetch(`${base}/v1/oauth2/token`, {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Failed to generate Access Token:", error);
    }
};

/**
* Create an order to start the transaction.
* @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
*/
const createOrder = async (cart) => {
    // use the cart information passed from the front-end to calculate the purchase unit details
    // console.log(
    //     "shopping cart information passed from the frontend createOrder() callback:",
    //     cart,
    // );
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const payload = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: cart[0].amount.currency_code,
                    value: cart[0].amount.value,
                },
            },
        ],
    };

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
            // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
            // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
        },
        method: "POST",
        body: JSON.stringify(payload),
    });


    return handleResponse(response);
};

/**
* Capture payment for the created order to complete the transaction.
* @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
*/
const captureOrder = async (orderID) => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
            // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
            // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
        },
    });
    // console.log(response);
    return handleResponse(response);
};

async function handleResponse(response) {
    try {
        const jsonResponse = await response.json();
        return {
            jsonResponse,
            httpStatusCode: response.status,
        };
    } catch (err) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
}

app.post("/api/orders", async (req, res) => {
    try {
        // use the cart information passed from the front-end to calculate the order amount detals
        const { cart } = req.body;
        const { jsonResponse, httpStatusCode } = await createOrder(cart);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to create order." });
    }
});

app.post("/api/orders/:orderID/capture", async (req, res) => {
    try {
        const { orderID } = req.params;
        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to capture order." });
    }
});

// serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./client/checkout.html"));
});
setTimeout(() => console.clear(), 1000);