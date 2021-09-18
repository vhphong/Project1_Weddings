// import {Datastore} from '@google-cloud/datastore';
// import express from 'express';
// import cors from 'cors'

const { Datastore } = require("@google-cloud/datastore");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const datastore = new Datastore();

// =======================================
// Wedding Services
// Wedding {email:"" (unique indentifier), weddingID, weddingDate, weddingLocation, name, budget}
// {"email":"alex@email.com","name":"Alex Ellie","weddingDate":"09/10/2021","weddingLocation":"CA","budget": 1000}


// CREATE a new wedding
app.post("/weddings", async (req, res) => {
    const newWedding = req.body;
    const weddingKey = datastore.key(["Weddings", newWedding.email]); // assign emails as unique identifers
    const response = await datastore.save({ key: weddingKey, data: newWedding });

    res.status(201);
    res.send("Successfully created a new Wedding");
});


// GET all Weddings
app.get("/weddings", async (req, res) => {
    const query = datastore.createQuery("Weddings");
    const [data, metaInfo] = await datastore.runQuery(query);

    res.send(data);
});


// GET a wedding by email
app.get("/weddings/:email", async (req, res) => {
    const key = datastore.key(["Weddings", String(req.params.email)]);
    const response = await datastore.get(key);

    res.send(response[0]);
});


// UPDATE a wedding by email
app.put("weddings/:email", async (req, res) => {
    const newData = req.body;
    const key = datastore.key(["Weddings", String(req.params.email)]);
    const response = await datastore.merge({ key: key, data: newData });
    const updatedWedding = await datastore.get(key);

    res.send(updatedWedding);
});


// DELETE a wedding by email
app.delete("/weddings/:email", async (req, res) => {
    const key = datastore.key(["Weddings", req.params.email]);
    const response = await datastore.delete(key);

    res.send("Successfully deleted the wedding");
});


// =======================================
// Expense Services
// Expense {expenseID:"" (unique indentifier), email, reason, amount}
// {"expenseID":1,"email":"alex@email.com","reason":"Cake","amount": 123}

// CREATE a new Expense
app.post("/expenses", async (req, res) => {
    const expense = req.body;
    const key = datastore.key(["Expenses"]);
    // const key = datastore.key(["Expenses", Number(expense.expenseID)]); // not working
    // const key = datastore.key(["Expenses", String(expense.email)]);      // working
    const response = await datastore.save({ key: key, data: expense });

    res.status(201);
    res.send("Successfully created a new expense");
});


// GET all Expenses
app.get("/expenses", async (req, res) => {
    const query = datastore.createQuery("Expenses");
    const [data, metaInfo] = await datastore.runQuery(query);

    res.send(data);
});


// GET expense by expense ID
app.get("/expenses/:expenseid", async (req, res) => {
    const key = datastore.key(["Expenses", Number(req.params.expenseid)]);
    const response = await datastore.get(key);

    res.send(response[0]);
});


// GET expense by wedding email
app.get("/expenses/email/:email", async (req, res) => {
    const key = datastore.key(["Expenses", String(req.params.email)]);
    const expense = await datastore.get(key);

    res.send(expense[0]);
});

// UPDATE a wedding by email
// app.put("weddings/:email", async (req, res) => {
//     const newData = req.body;
//     const key = datastore.key(["Weddings", String(req.params.email)]);
//     const response = await datastore.merge({ key: key, data: newData });
//     const updatedWedding = await datastore.get(key);

//     res.send(updatedWedding);
// });


// UPDATE an expense by expenseID
app.put("expenses/:id", async (req, res) => {
    const newData = req.body;
    const key = datastore.key(["Expenses", Number(req.params.id)]);
    const response = await datastore.merge({ key: key, data: newData });
    const updatedExpense = await datastore.get(key);

    res.send(updatedExpense);
});


// DELETE expense by expenseID
app.delete("/expenses/:expenseid", async (req, res) => {
    const key = datastore.key(["Expenses", Number(req.params.expenseid)]);
    const response = await datastore.delete(key);

    res.send("Successfully deleted the expense");
});



// =======================================
// Employee Services

// Employee {email:"" (unique indentifier), employeeID, fName, lName, password}
// {"email":"phong@email.com","employeeID":1,"fName":"Phong","lName":"Vo","password":"blue"}
// {"email":"eric@email.com","employeeID":2,"fName":"Eric","lName":"Thomson","password":"red"}
// {"email":"test1@email.com","employeeID":3,"fName":"Test1","lName":"One","password":"any1"}

// CREATE a new Employee
app.post('/employees', async (req, res) => {
    const employee = req.body;
    const key = datastore.key(['Employee', employee.email]);
    const response = await datastore.save({ key: key, data: employee });

    res.status(201);
    res.send("Successfully created a new Employee");
});


// GET all Employees
app.get('/employees', async (req, res) => {
    const query = datastore.createQuery('Employee');
    const [data, metaInfo] = await datastore.runQuery(query);

    res.send(data);
});


// GET an Employee by email
app.get('/employees/:email', async (req, res) => {
    const key = datastore.key(['Employee', req.params.email]);
    const employee = await datastore.get(key);

    // console.log("JSON.stringify(employee).email: " + JSON.stringify(employee.length));
    res.send(employee);
});


// VERIFY an employee email 
// http://localhost:3000/users/${employeeEmailInput}/verify
app.get('/employees/:email/verify', async (req, res) => {

    const email = req.params.email;
    console.log("email: " + email);

    const query = datastore.createQuery('Employee').filter('email', '=', email);

    const [emailData] = await datastore.runQuery(query);

    // emailData.length = 0 if email DNE; =1 if exists
    if (emailData.length === 0) {
        res.status(404);
        res.send(false);
    }

    if (emailData.length === 1) {
        res.status(200);
        res.send(true);
    }
});


// UPDATE Employee by email
app.put('/employees/:email', async (req, res) => {
    const newData = req.body;
    const key = datastore.key(['Employee', req.params.email]);
    const response = await datastore.merge({ key: key, data: newData });
    const updatedEmployee = await datastore.get(key);

    res.send(updatedEmployee);
});


// LOGIN
// http://localhost:3000/employees/login
app.patch('/employees/login', async (req, res) => {
    const loginData = req.body;
    const emailInput = req.body.email;
    const passwordInput = req.body.password;

    const query = datastore.createQuery('Employee').filter('email', '=', emailInput).filter('password', '=', passwordInput);

    const [data] = await datastore.runQuery(query);

    // data.length = 0 if email DNE; = 1 if exists
    if (data.length === 0) {
        res.status(404);
        res.send(false);
    }

    if (data.length === 1) {
        res.status(200);
        const key = datastore.key(['Employee', emailInput]);
        const employee = await datastore.get(key);

        res.send(JSON.stringify(employee));        
    }
});


// DELETE Employee by email
app.delete('/employees/:email', async (req, res) => {
    const key = datastore.key(['Employee', req.params.email]);
    const response = await datastore.delete(key);

    res.send('Successfully deleted the employee');
});


// =======================================
// Message Services

// Message {"messageID":"" (unique indentifier), sender, recipient, note}
// {"sender":"phong@email.com","recipient":"eric@email.com","note":"Hello"}
// {"sender":"eric@email.com","recipient":"phong@email.com","note":"Hi"}
// {"sender": "bill@wed.com", "recipient": "jane@wed.com", "note":"great job"}


// CREATE a new message
app.post('/messages', async (req, res) => {

    const newMessage = req.body;

    const senderEmail = newMessage.sender;
    const recipientEmail = newMessage.recipient;

    console.log("senderEmail: " + senderEmail);
    console.log("recipientEmail: " + recipientEmail);

    const senderQuery = datastore.createQuery('Employee').filter('email', '=', senderEmail);
    const recipientQuery = datastore.createQuery('Employee').filter('email', '=', recipientEmail);

    // console.log("senderQuery: " + JSON.stringify(senderQuery.length));
    // console.log("recipientQuery: " + JSON.stringify(recipientQuery.length));

    const [senderData] = await datastore.runQuery(senderQuery);
    const [recipientData] = await datastore.runQuery(recipientQuery);


    // senderData.length = 0 if email DNE; =1 if exists
    if (senderData.length === 0) {
        res.status(404);
        res.send("Sender is invalid.");
    }

    if (recipientData.length === 0) {
        res.status(404);
        res.send("Recipient is invalid.");
    }
    
    // if both sender and recipient are valid
    if ((senderData.length === 1) && (recipientData.length === 1)) {
        const messageKey = datastore.key(['Message']);  // autogenerated key
        const response = await datastore.save({ key: messageKey, data: newMessage });
    
        res.status(201);
        res.send("Successfully created a new message");
    } else {
        res.status(404);
        res.send("Invalid email(s)");
    }
});


// GET all messages
app.get('/messages', async (req, res) => {

    if (req.query.sender && req.query.recipient) {
        // if BOTH sender's email AND recipient's email are asked for
        // GET messages sent by sender AND received by recipient
        // GET /messages?sender=someone&recipient=someoneelse
        const query = datastore.createQuery('Message').filter('sender', '=', String(req.query.sender)).filter('recipient', '=', String(req.query.recipient));
        const [data, metaInfo] = await datastore.runQuery(query);
        res.send(data);
    } else if (req.query.recipient) {
        // if recipient's email is asked for
        // GET messages received by recipient
        // GET /messages?recipient=someone
        const query = datastore.createQuery('Message').filter('recipient', '=', String(req.query.recipient));
        const [data, metaInfo] = await datastore.runQuery(query);
        // console.log("recipient data: " + data.length);       //data exists? 1 for yes, 0 for no
        res.send(data);
    } else if (req.query.sender) {
        // if sender's email is asked for
        // GET messages sent by sender
        // GET /messages?sender=someone
        const query = datastore.createQuery('Message').filter('sender', '=', String(req.query.sender));
        const [data, metaInfo] = await datastore.runQuery(query);
        res.send(data);
    } else {
        // if no sender or recipient is asked for
        const query = datastore.createQuery('Message');
        const [data, metaInfo] = await datastore.runQuery(query);
        res.send(data);
    }

});


// GET message by messageID
app.get('/messages/:mid', async (req, res) => {
    const key = datastore.key(['Message', Number(req.params.mid)]);
    const message = await datastore.get(key);
    res.send(message);
});






// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log("Application started"));

app.listen(3000, () => console.log("Application started"));
