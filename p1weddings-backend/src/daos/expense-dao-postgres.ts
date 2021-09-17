import { conn } from "../connection";
import { Expense } from "../entities";
import { MissingResourceError } from "../errors";
import { ExpenseDAO } from "./expense-dao";


export class ExpenseDaoPostgres implements ExpenseDAO {


    async getAllExpenses(): Promise<Expense[]> {
        const sql: string = 'SELECT * FROM expense ORDER BY wedding_id, expenseid';
        const result = await conn.query(sql);
        const allExpenses: Expense[] = [];

        for (const row of result.rows) {
            const expense: Expense = new Expense(row.expenseid, 
                                                 row.wedding_id, 
                                                 row.reason, 
                                                 row.amount);
            allExpenses.push(expense);
        }

        return allExpenses;
    }


    async getExpenseByExpenseID(expenseID: number): Promise<Expense> {
        const sql: string = 'SELECT * FROM expense WHERE expenseid = $1';
        const values = [expenseID];
        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`The expense with ID ${expenseID} does not exist.`);
        }

        const row = result.rows[0];
        const retrievedExpense: Expense = new Expense(row.expenseid, 
                                                      row.wedding_id, 
                                                      row.reason, 
                                                      row.amount);

        return retrievedExpense;
    }


    async getAllExpensesOfAWedding(weddingID: number): Promise<Expense[]> {
        const sql: string = 'SELECT * FROM expense WHERE wedding_id = $1 ORDER BY wedding_id, expenseid';

        const values = [weddingID];
        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`The weddingID ${weddingID} does NOT have any expense.`);
        }

        const retrievedExpenses: Expense[] = [];

        for (const row of result.rows) {
            const e: Expense = new Expense(row.expenseid, 
                                           row.wedding_id, 
                                           row.reason, 
                                           row.amount);
                               
            retrievedExpenses.push(e);
        }

        return retrievedExpenses;
    }


    async createExpense(weddingID: number, newExpense: Expense): Promise<Expense> {
    // async createExpense(weddingID: number): Promise<Expense> {
        const sql: string = 'INSERT INTO expense (reason, amount, wedding_id) VALUES ($1, $2, $3) returning expenseid';
        const values = [newExpense.reason, newExpense.amount, weddingID];
        const result = await conn.query(sql, values);

        newExpense.expenseID = result.rows[0].expenseid;

        return newExpense;
    }


    async updateExpense(e: Expense): Promise<Expense> {
        const sql: string = 'UPDATE expense SET reason=$1, amount=$2 WHERE expenseid = $3';
        const values = [e.reason, e.amount, e.expenseID];
        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`The expense with ID ${e.expenseID} does not exist.`);
        }

        return e;
    }


    async deleteExpenseByExpenseID(expenseID: number): Promise<boolean> {
        const sql: string = 'DELETE FROM expense WHERE expenseid = $1';
        const values = [expenseID];
        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`The expense with ID ${expenseID} does not exist.`);
        }
        
        console.log("Expense ID ${expenseID} deleted successfully.");

        return true;
        
    }
}