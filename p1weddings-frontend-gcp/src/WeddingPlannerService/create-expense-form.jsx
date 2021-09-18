import { useRef } from "react";
import axios from "axios";



export default function CreateNewExpenseForm() {

    // GOOD================================================
    const expenseIdInputToCreate = useRef(null);
    const weddingEmailIdInputToCreate = useRef(null);
    const reasonInputToCreate = useRef(null);
    const amountInputToCreate = useRef(null);

    async function addExpense() {

        const newExpense = {
            // expenseID: 11,
            email: weddingEmailIdInputToCreate.current.value,
            reason: reasonInputToCreate.current.value,
            amount: amountInputToCreate.current.value
        }

        const response = await axios.post(`http://localhost:3000/expenses`, newExpense);
        console.log(response);

        alert(`A new expense for wedding: ${weddingEmailIdInputToCreate.current.value} created. :)) `);
    }



    return (
        <div>
            {/* ================================================ */}
            {/* CREATE A NEW EXPENSE */}
            <div>
                <h3>Create A New Expense</h3>
            </div>
            <div>
                <input placeholder="wedding email ID" type='email' ref={weddingEmailIdInputToCreate}></input>
                <input placeholder="reason" ref={reasonInputToCreate}></input>
                <input placeholder="amount" type="number" ref={amountInputToCreate}></input>
            </div>
            <div>
                <button onClick={addExpense}>CREATE a expense</button>
            </div>
        </div>
    )
}