import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";

const App = express();
App.use(cors());

async function adduser(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("project");
    const userinfo = db.collection("user");
    let inputDoc = {
      name: req.query.name,
      username: req.query.username,
      email: req.query.email,
      phoneno: req.query.phoneno,
      gender: req.query.gender,
      password: req.query.password,
    };

    await userinfo.insertOne(inputDoc);
    await client.close();
    res.json({ opr: true });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function addcontactus(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  const userinfo = db.collection("contactus");
  let inputDoc = {
    name: req.query.name,
    email: req.query.email,
    message: req.query.message,
  };

  await userinfo.insertOne(inputDoc);
  await client.close();
  res.json({ opr: "success" });
}

async function alluserlist(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("project");
  const userinfo = db.collection("user");

  let list = await userinfo.find().toArray();

  await client.close();
  res.json(list);
}

async function loginByGet(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("project");
    const userinfo = db.collection("user");

    let query = { email: req.query.email, password: req.query.password };
    let userRef = await userinfo.findOne(query);

    await client.close();

    if (!userRef) {
      let errorMessage = `Authentication Failed:${req.query.email}`;
      throw new Error(errorMessage);
    }
    res.json(userRef);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function sendEmail(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("project");
    const userinfo = db.collection("user");

    const user = await userinfo.findOne({ username: req.query.username });

    const emailParams = {
      to_email: user.email,
      subject: "Your Purchase Confirmation",
      message: `Dear customer, 
      Thank you for your patience. Your order has been processed and will be delivered in 5 days`,
    };

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "sportscdac@gmail.com",
        pass: "hello@cdac",
      },
    });

    // Configure the email options
    let mailOptions = {
      from: "sportscdac@gmail.com",
      to: emailParams.to_email,
      subject: emailParams.subject,
      text: emailParams.message,
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    await client.close();
    res.json({ opr: "success" });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

App.get("/adduser", adduser);
App.get("/alluserlist", alluserlist);
App.get("/login-by-get", loginByGet);
App.get("/addcontactus", addcontactus);
App.get("/sendemail", sendEmail);

App.listen(4000);
