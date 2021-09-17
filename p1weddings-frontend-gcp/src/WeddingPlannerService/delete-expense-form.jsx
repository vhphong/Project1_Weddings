import axios from "axios";
import { useRef } from "react";


export default function DeleteExpenseForm() {

    // ================================================
    const expenseIdInputToDelete = useRef(null);

    async function deleteExpense(event) {
        try {
            const expenseID = expenseIdInputToDelete.current.value;
            const response = await axios.delete(`http://localhost:3000/expenses/${expenseID}`);
            // console.log(response);
            alert(`Wedding ID: ${expenseID} deleted :(( `);
        } catch (error) {
            console.log(error);
            alert(`Expense ID ${expenseIdInputToDelete.current.value} does not exist or was deleted!`);
        }
    }


    return (
        <div>
            {/* GOOD================================================ */}
            {/* DELETE AN EXPENSE */}
            <div>
                <h3>Delete An Expense</h3>
            </div>
            <div>
                <input placeholder="expense ID to DELETE" type="number" ref={expenseIdInputToDelete}></input>
            </div>
            <div>
                <button onClick={deleteExpense}>Delete Expense</button>
            </div>

        </div>
    )
}