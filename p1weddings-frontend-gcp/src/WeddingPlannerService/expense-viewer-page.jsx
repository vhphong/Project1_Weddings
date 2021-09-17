import axios from "axios";
import { useState } from "react";
import ExpenseTable from "./expense-table";


export default function ExpenseViewerPage() {

    const [retrievedExpenses, setExpenses] = useState([]);

    async function getExpenses(event) {
        const response = await axios.get('http://localhost:3000/expenses');
        console.log(response);
        setExpenses(response.data);
    }

    return (
        <div>
            <h1>Expense Viewer Page</h1>

            {/* shows records manually*/}
            {/* <button onClick={getExpenses}>Get Expenses</button> */}

            {/* shows records automatically*/}
            <button onClick={(getExpenses)("/expenses", "_self")}>View Expense Records</button>
            <button>CREATE a expense</button>
            <button>GET a expense</button>
            <button>UPDATE a expense</button>
            <button>DELETE a expense</button>
            <ul>
                <li onClick={getExpenses}>Link to Get Expenses</li>
            </ul>

            <ExpenseTable expenses={retrievedExpenses}></ExpenseTable>
        </div>
    )
}