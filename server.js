/*
shell commands :
npm init -y
npm i express cors mongodb
*/

const password = "Far_cry_6";

const {MongoClient,ServerApiVersion} = require('mongodb');
const uri = `mongodb+srv://Aymen:${password}@cluster0.eelos6c.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,{
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
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const Port = 8080;
app.listen(Port,() => console.log("Server is running on port: " + Port));
app.get("/fetchData",async (req,res) => {
    res.json(await getData());
});
app.get("/fetchDeals",async (req,res) => {
    res.json(await hotDeals());
});

app.post("/signIn",async (req,res) => {
    console.clear();
    const info = req.body;
    if ((await client.db("Aymen").collection("users").findOne({username: info.username}) || await client.db("Aymen").collection("users").findOne({email: info.email})) == null) {
        res.json(JSON.stringify({succession: false,reason: "could not find the account",description: "we could not find this account"}));
        return;
    }

    if (await client.db("Aymen").collection("users").findOne({"email": info.email}) || client.db("Aymen").collection("users").findOne({"username": info.username})) {
        if (await client.db("Aymen").collection("users").findOne({"password": info.password})) {
            let user = await client.db("Aymen").collection("users").findOne({"email": info.email,"password": info.password});
            if (user == null) user = await client.db("Aymen").collection("users").findOne({username: info.username,password: info.password});
            res.json(JSON.stringify({succession: true,username: user.username,email: user.email}));
        }
        else res.json(JSON.stringify({succession: false,reason: "password incorrect",description: "password incorrect"}));
    }
});
app.post("/signUp",async (req,res) => {
    const info = req.body;
    if (await client.db("Aymen").collection("users").findOne({username: info.username})) {
        res.json(JSON.stringify({succession: false,reason: "username already in use",description: "username is not valid use another one"}));
        return;
    }
    if (await client.db("Aymen").collection("users").findOne({email: info.email})) {
        res.json(JSON.stringify({succession: false,reason: "email already in use",description: "email is not valid user another one"}));
        return;
    }
    await client.db("Aymen").collection("users").insertOne({username: info.username,email: info.email,password: info.password,cart: [],saves: [],date: new Date().getDate().toString() + "-" + (new Date().getMonth() + 1).toString() + "-" + new Date().getFullYear().toString()});
    res.json(JSON.stringify({succession: true,username: info.username,email: info.email,cart: [],saves: []}));
});

app.post("/settings",async (req,res) => {
    res.json(JSON.stringify(await client.db("Aymen").collection("users").findOne({email: req.body.email,username: req.body.username})));
});

app.post("/save",async (req,res) => {
    const newData = req.body;
    const oldData = client.db("Aymen").collection("users").findOne({email: req.body.oldEmail});
    if (oldData.email !== newData.email) await client.db("Aymen").collection("users").findOneAndUpdate({email: oldData.email},{email: newData.email},(err) => {if (err) console.log(err); else console.log("done");});
});

app.post("/saveAdd",async (req,res) => {
    await client.db("Aymen").collection("users").updateOne({email: req.body.email},
        {
            $push: {
                saves: req.body.item
            }
        }
    ).catch(err => {res.json(JSON.stringify({succession: false}));});
    res.json(JSON.stringify({succession: true}));
});
app.post("/cartAdd",async (req,res) => {
    await client.db("Aymen").collection("users").updateOne({email: req.body.email},
        {
            $push: {
                cart: req.body.item
            }
        }
    ).catch(err => {res.json(JSON.stringify({succession: false}));});
    res.json(JSON.stringify({succession: true}));
});

app.post("/cart",async (req,res) => {
    const cart = await client.db("Aymen").collection("users").findOne({email: req.body.email});
    if (await client.db("Aymen").collection("users").findOne({email: req.body.email})) res.json(JSON.stringify({succession: true,items: cart.cart}));
    else res.json(JSON.stringify({succession: false,reason: "could not find user"}));
});

app.post("/saves",async (req,res) => {
    const saves = await client.db("Aymen").collection("users").findOne({email: req.body.email});
    if (await client.db("Aymen").collection("users").findOne({email: req.body.email})) res.json(JSON.stringify({succession: true,items: saves.saves}));
    else res.json(JSON.stringify({succession: false,reason: "could not find user"}));
});

app.post("/savedList",async (req,res) => {
    const saved = await client.db("Aymen").collection("users").findOne({email: req.body.email});
    if (await client.db("Aymen").collection("users").findOne({email: req.body.email})) res.json(JSON.stringify({succession: true,items: saved.saves}));
    else res.json(JSON.stringify({succession: false,reason: "could not find user"}));
});

app.post("/cartContains",async (req,res) => {
    const cart = await client.db("Aymen").collection("users").findOne({email: req.body.email}).catch(e => {return;});
    cart.forEach(item => {
        item.name == req.name && item.color == req.color ? res.json(JSON.stringify({contained: true})) : res.json(JSON.stringify({contained: false}));
    });
});

app.post("/cartRemove",async (req,res) => {
    let oldInfo = await client.db("Aymen").collection("users").findOne({email: req.body.email});
    let oldCart = oldInfo.cart;
    await client.db("Aymen").collection("users").updateOne({email: req.body.email},{
        $pull: {
            cart: oldCart.filter(e => {
                return e.imageUrl == req.body.imageUrl;
            })[0]
        }
    });
});
app.post("/savesRemove",async (req,res) => {
    let oldInfo = await client.db("Aymen").collection("users").findOne({email: req.body.email});
    let oldsaves = oldInfo.saves;
    await client.db("Aymen").collection("users").updateOne({email: req.body.email},{
        $pull: {
            saves: oldsaves.filter(e => {
                return e.imageUrl == req.body.imageUrl;
            })[0]
        }
    });
});


setTimeout(() => console.clear(),1000);