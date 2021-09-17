import express, { json, response } from "express";
import cors from "cors";
import WeddingService from "./services/wedding-service";
import ExpenseService from "./services/expense-service";
import EmployeeService from "./services/employee-service";
import { Expense, Wedding, Employee } from "./entities";
import { MissingResourceError } from "./errors";
import { WeddingServiceImpl } from "./services/wedding-service-impl";
import { ExpenseServiceImpl } from "./services/expense-service-impl";
import { EmployeeServiceImpl } from "./services/employee-service-impl";

const app = express();
app.use(express.json());
app.use(cors());


const weddingService: WeddingService = new WeddingServiceImpl();
const expenseService: ExpenseService = new ExpenseServiceImpl();
const employeeService: EmployeeService = new EmployeeServiceImpl();


/////////////////////////////////////////////////////////////////

// Wedding Services

/**
 * POST /weddings
 *    creates a new wedding
 *    returns 201 status code
 */
app.post("/weddings", async (req, res) => {
    let newWedding: Wedding = req.body;
    newWedding = await weddingService.createWedding(newWedding);
    res.status(201);
    res.send(newWedding);
});


/**
 * GET /weddings
 *    gets all weddings
 *    return 200
 */
app.get("/weddings", async (req, res) => {
    try {
        const allWeddings: Wedding[] = await weddingService.getAllWeddings();
        res.status(200);
        res.send(allWeddings);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});


/**
 * GET /weddings/:id
 *    gets a wedding with wedding ID
 *    returns 404 if wedding DNE
 */
app.get("/weddings/:weddingid", async (req, res) => {
    try {
        const weddingID: number = Number(req.params.weddingid);
        const retrievedWedding: Wedding = await weddingService.getWeddingByWeddingID(weddingID);
        res.send(retrievedWedding);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});


/**
 * PUT /weddings
 *    update a wedding
 *    returns 404 if wedding DNE
 */
app.put("/weddings/:weddingid", async (req, res) => {
    try {
        const weddingID: number = Number(req.params.weddingid);
        let retrievedWedding: Wedding = await weddingService.getWeddingByWeddingID(weddingID);
        let retrievedWeddingDate: string = JSON.stringify(retrievedWedding.weddingDate);
        let retrievedWeddingLocation: string = retrievedWedding.weddingLocation;
        let retrievedWeddingName = retrievedWedding.name;
        let retrievedWeddingBudget = retrievedWedding.budget;

        const reqBody = req.body;

        // If no changes, then new value = old value. If changes, then new value = req.body input
        let newDate = retrievedWeddingDate;
        let newLocation = retrievedWeddingLocation;
        let newName = retrievedWeddingName;
        let newBudget = retrievedWeddingBudget;

        if (reqBody.weddingDate != retrievedWeddingDate) {
            newDate = (reqBody.weddingDate != "") ? reqBody.weddingDate : retrievedWeddingDate;
        }

        if (reqBody.weddingLocation != retrievedWeddingLocation) {
            newLocation = (reqBody.weddingLocation != "") ? reqBody.weddingLocation : retrievedWeddingLocation;
        }

        if (reqBody.name != retrievedWeddingName) {
            newName = (reqBody.name != "") ? reqBody.name : retrievedWeddingName;
        }

        if (reqBody.budget != retrievedWeddingBudget) {
            newBudget = (reqBody.budget != "") ? reqBody.budget : retrievedWeddingBudget;
        }

        let updatedWedding: Wedding = new Wedding(weddingID, newDate, newLocation, newName, newBudget);
        updatedWedding = await weddingService.updateWedding(updatedWedding);
        res.send(updatedWedding);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});


/**
 * DELETE /weddings/:weddingid
 *    deletes a wedding
 *    returns 404 if DNE
 */
app.delete("/weddings/:weddingid", async (req, res) => {
    try {
        const weddingID: number = Number(req.params.weddingid);
        const deleteResult: boolean = await weddingService.deleteWedding(weddingID);
        res.status(205);
        res.send(deleteResult);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});


/////////////////////////////////////////////////////////////////

// Expense Services

/**
 * POST /expenses/:weddingid
 *    creates an expense for an existed wedding ID
 *    returns 201 if success
 */
app.post("/expenses/:weddingid", async (req, res) => {
    try {
        const weddingID: number = Number(req.params.weddingid);
        let newExpense: Expense = req.body;
        newExpense = await expenseService.createExpense(weddingID, newExpense);

        res.status(201);
        res.send(newExpense);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});


/**
 * GET /expenses
 *    gets all expenses
 *    returns 200 if success
 */
app.get("/expenses", async (req, res) => {
    try {
        const allExpenses: Expense[] = await expenseService.getAllExpenses();
        res.status(200);
        res.send(allExpenses);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});


/**
 * GET /expenses/:expenseid
 *    gets expense by expense ID
 *    returns 404 if DNE
 */
app.get("/expenses/:expenseid", async (req, res) => {
    try {
        const expenseID: number = Number(req.params.expenseid);
        const retrievedExpense: Expense = await expenseService.getExpenseByExpenseID(expenseID);
        res.send(retrievedExpense);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});


/**
 * GET /weddings/:id/expenses
 *    gets all expenses of an existed wedding ID
 *    returns 404 if weddings or expenses DNE
 */
app.get("/weddings/:id/expenses", async (req, res) => {
    try {
        const weddingID: number = Number(req.params.id);
        const retrievedAllExpenses: Expense[] = await expenseService.getAllExpensesOfAWedding(weddingID);
        res.send(retrievedAllExpenses);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});


/**
 * PUT /expenses/:id
 *    update expense by expense ID
 */
app.put("/expenses/:id", async (req, res) => {
    try {
        const expenseID: number = Number(req.params.id);

        let retrievedExpense: Expense = await expenseService.getExpenseByExpenseID(expenseID);
        const retrievedExpenseEID: number = retrievedExpense.expenseID;
        const retrievedExpenseWID: number = retrievedExpense.wedding_ID;

        const reqBody = req.body;

        // if no changes, then new value = old value. If changes, then new value = req.body
        let newReason: string = retrievedExpense.reason;
        let newAmount: number = retrievedExpense.amount;

        // if reason changes. eg: {"reason": "Cake"}, and new input is not null
        if (reqBody.reason != retrievedExpense.reason) {
            newReason = (reqBody.reason != "") ? reqBody.reason : "TBD";
        }

        // if amount changes, and new input is not null 
        if (reqBody.amount != retrievedExpense.amount) {
            newAmount = (reqBody.amount != '') ? reqBody.amount : 0.00;
        }

        let updatedExpense: Expense = new Expense(retrievedExpenseEID, retrievedExpenseWID, newReason, newAmount);
        updatedExpense = await expenseService.updateExpense(updatedExpense);
        res.send(updatedExpense);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});


/**
 * DELETE /expenses/:id
 *    deletes expense by expense ID
 *    returns 404 if DNE
 */
app.delete("/expenses/:id", async (req, res) => {
    try {
        const expenseID: number = Number(req.params.id);
        const deleteResult: boolean = await expenseService.deleteExpenseByExpenseID(expenseID);
        res.send(deleteResult);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});



/////////////////////////////////////////////////////////////////

// Employee Services

/**
 * GET /users/:email/verify
 * 200 if user exists
 * 404 if no user found
 */
app.get("/users/:email/verify", async (req, res) => {
    try {
        const emplEmail: string = String(req.params.email);
        const verifiedEmployeeEmail: boolean = await employeeService.verifyEmployeeEmailExists(emplEmail);
        res.status(200);
        res.send(verifiedEmployeeEmail);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(error);
        }
    }
});


app.get("/users/:email/verifypassword", async (req, res) => {
    try {
        const emplEmail: string = String(req.params.email);
        // const emplPassword: string = String(req.params.password);
        const verifiedEmployeePassword: string = await employeeService.getEmployeePasswordByEmployeeEmail(emplEmail);
        res.status(200);
        res.send(verifiedEmployeePassword);
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send("Invalid password");
        }
    }
});



/**
 * PATCH /users/login 
 * Request Body: {"email": "bill@wed.com", "password":"gatorfan1"}
 * Response Body: {"fname":"Bill", "lname":"Smith"}
 */
app.patch("/users/login", async (req, res) => {
    try {
        const emplEmail: string = String(req.body.email);
        const emplPassword: string = String(req.body.password);
        const emplFirstname: string = await employeeService.getEmployeeFirstNameByEmailPassword(emplEmail, emplPassword);
        const emplLastname: string = await employeeService.getEmployeeLastNameByEmailPassword(emplEmail, emplPassword);
        res.send(`{"fname":${emplFirstname}, "lname":${emplLastname}}`);
        // res.send(JSON.stringify(emplFirstname + ' ' + emplLastname));
    } catch (error) {
        if (error instanceof MissingResourceError) {
            res.status(404);
            res.send(`Employee with email ${req.body.email} does not exist.`);
        }
    }
});






app.listen(3000, () => { console.log("Application started.") });