import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import AllExpenseTable from "./all-expense-table";


export default function AllExpenseViewerPage() {

    // GOOD================================================
    const [retrievedExpenses, setAllExpenses] = useState([]);

    async function getAllExpenses(event) {

        const response = await axios.get('http://localhost:3000/expenses');
        console.log(response);
        const allExpensesResult = response.data;
        setAllExpenses(allExpensesResult);
    }


    return (
        <div>
            {/* ================================================ */}
            {/* SHOW ALL EXPENSE */}
            <div>

                {/* shows records manually*/}
                <h3>View All Expenses</h3>
                <button onClick={getAllExpenses}>Get All Expenses</button>

                {/* shows records automatically*/}
                {/* <button onClick={(getAllExpenses)("/expenses", "_self")}>View Expense Records</button> */}
                {/* <ul>
                    <li onClick={getAllExpenses}>Get All Expenses</li>
                </ul> */}
            </div>

            <AllExpenseTable allExpenses={retrievedExpenses}></AllExpenseTable>
        </div>
    )
}