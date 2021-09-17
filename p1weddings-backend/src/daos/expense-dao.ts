import { Expense } from "../entities";

export interface ExpenseDAO {

    // GET /expenses
    // get all expenses
    getAllExpenses(): Promise<Expense[]>;


    // GET /expenses/:id
    // get expenses by an expense ID
    getExpenseByExpenseID(expenseID: number): Promise<Expense>;


    // GET /weddings/:id/expenses
    // get the expenses of a wedding
    getAllExpensesOfAWedding(weddingID: number): Promise<Expense[]>;


    // POST /expenses
    // create expenses
    createExpense(weddingID: number, expense: Expense): Promise<Expense>;
    // createExpense(weddingID: number): Promise<Expense>;


    // PUT /expenses/:id
    // update expense by expense ID
    updateExpense(expense: Expense): Promise<Expense>;


    // DELETE /expenses/:id
    // delete expense by expense ID
    deleteExpenseByExpenseID(expenseID: number): Promise<boolean>;
}

