import { ExpenseDAO } from "../daos/expense-dao";
import { ExpenseDaoPostgres } from "../daos/expense-dao-postgres";
import { Expense } from "../entities";
import ExpenseService from "./expense-service";


export class ExpenseServiceImpl implements ExpenseService {


    expenseDAO: ExpenseDAO = new ExpenseDaoPostgres();


    createExpense(weddingID: number, expense: Expense): Promise<Expense> {
        return this.expenseDAO.createExpense(weddingID, expense);
    }


    getAllExpenses(): Promise<Expense[]> {
        return this.expenseDAO.getAllExpenses();
    }


    getExpenseByExpenseID(expenseID: number): Promise<Expense> {
        return this.expenseDAO.getExpenseByExpenseID(expenseID);
    }


    getAllExpensesOfAWedding(weddingID: number): Promise<Expense[]> {
        return this.expenseDAO.getAllExpensesOfAWedding(weddingID);
    }


    updateExpense(expense: Expense): Promise<Expense> {
        return this.expenseDAO.updateExpense(expense)
    }


    deleteExpenseByExpenseID(expenseID: number): Promise<boolean> {
        return this.expenseDAO.deleteExpenseByExpenseID(expenseID);
    }

}