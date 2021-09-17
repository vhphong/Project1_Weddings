import { ExpenseDAO } from "../daos/expense-dao";
import { ExpenseDaoPostgres } from "../daos/expense-dao-postgres";
import { WeddingDAO } from "../daos/wedding-dao";
import { WeddingDaoPostgres } from "../daos/wedding-dao-postgres";
import { Expense } from "../entities";


const expenseDAO: ExpenseDAO = new ExpenseDaoPostgres();
const weddingDAO: WeddingDAO = new WeddingDaoPostgres();


// PASSED
test("Test: Create expense for an existed wedding", async () => {
    let testExpense: Expense = new Expense(0, 1, 'Flowers', 11111111);

    // createExpense
    testExpense = await expenseDAO.createExpense(testExpense.wedding_ID, testExpense);
    // console.log(testExpense);

    const result: Expense = await expenseDAO.getExpenseByExpenseID(testExpense.expenseID);
    // console.log(result);

    expect("Test: Create expense for an existed wedding " + testExpense.expenseID).not.toBe(0);
});


// PASSED
test("Test: Get all expenses", async () => {
    let expense1: Expense = new Expense(0, 1, 'Cake', 22);
    let expense2: Expense = new Expense(0, 1, 'Flowers', 33);
    let expense3: Expense = new Expense(0, 1, 'Hotel', 44);


    expense1 = await expenseDAO.createExpense(expense1.wedding_ID, expense1);
    expense2 = await expenseDAO.createExpense(expense2.wedding_ID, expense2);
    expense3 = await expenseDAO.createExpense(expense3.wedding_ID, expense3);

    const result1: Expense = await expenseDAO.getExpenseByExpenseID(expense1.expenseID)
    const result2: Expense = await expenseDAO.getExpenseByExpenseID(expense2.expenseID)
    const result3: Expense = await expenseDAO.getExpenseByExpenseID(expense3.expenseID)

    console.log(result1);
    console.log(result2);
    console.log(result3);

    const allExpenses: Expense[] = await expenseDAO.getAllExpenses();

    expect(allExpenses.length).toBeGreaterThanOrEqual(3);
});


// PASSED
test("Test: Get expense by expense ID", async () => {
    let testExpense: Expense = new Expense(0, 1, 'Cake', 55);
    console.log(testExpense);

    testExpense = await expenseDAO.createExpense(testExpense.wedding_ID, testExpense);

    const result: Expense = await expenseDAO.getExpenseByExpenseID(testExpense.expenseID);
    console.log(result);

    // const retrievedExpense: Expense = await expenseDAO.getExpenseByExpenseID(testExpense.expenseID);

    expect(result.expenseID).toBe(testExpense.expenseID);
});


// PASSED
test("Test: Get all expenses by wedding ID", async () => {
    let testExpense: Expense = new Expense(0, 1, 'Cake', 66);
    console.log(testExpense);

    testExpense = await expenseDAO.createExpense(testExpense.wedding_ID, testExpense);
    console.log(testExpense);

    const result: Expense = await expenseDAO.getExpenseByExpenseID(testExpense.expenseID);
    console.log(result);

    let retrievedAllExpenses: Expense[] = await expenseDAO.getAllExpensesOfAWedding(testExpense.wedding_ID);

    for (let eachExpense of retrievedAllExpenses) {
        console.log(eachExpense)
        expect(eachExpense.wedding_ID).toBe(testExpense.wedding_ID);
    }
});


// PASSED
test("Test: Update expense", async () => {
    let testExpense: Expense = new Expense(0, 1, 'Cake', 77);

    testExpense = await expenseDAO.createExpense(testExpense.wedding_ID, testExpense);
    console.log(testExpense);

    testExpense.reason = 'Flowers';
    testExpense.amount = 77;
    testExpense = await expenseDAO.updateExpense(testExpense);

    console.log("updated expense: " + testExpense);

    expect(testExpense.reason).toBe('Flowers');
});


// PASSED
test("Test: Delete expense", async () => {
    let testExpense: Expense = new Expense(0, 1, 'Cake', 88);

    console.log(testExpense);

    testExpense = await expenseDAO.createExpense(testExpense.wedding_ID, testExpense);
    console.log(testExpense);

    const result: Expense = await expenseDAO.getExpenseByExpenseID(testExpense.expenseID);
    console.log(result);

    const deleteResult: boolean = await expenseDAO.deleteExpenseByExpenseID(result.expenseID);

    expect(deleteResult).toBeTruthy();
});