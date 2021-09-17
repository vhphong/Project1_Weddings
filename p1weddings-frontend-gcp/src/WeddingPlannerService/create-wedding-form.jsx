import { useRef } from "react";
import axios from "axios";


export default function CreateNewWeddingForm() {

    // GOOD================================================
    const emailInputToCreate = useRef(null);
    const nameInputToCreate = useRef(null);
    const weddingDateInputToCreate = useRef(null);;
    const weddingLocationInputToCreate = useRef(null);
    const weddingBudgetToCreate = useRef(null);

    async function addWedding() {

        const newWedding = {
            email: emailInputToCreate.current.value,
            name: nameInputToCreate.current.value,
            weddingDate: weddingDateInputToCreate.current.value,
            weddingLocation: weddingLocationInputToCreate.current.value,
            budget: weddingBudgetToCreate.current.value
        }

        const response = await axios.post('http://localhost:3000/weddings', newWedding);
        console.log(response);

        alert("A new wedding created. :)) ");
    }




    return (
        <div>
            {/* GOOD================================================ */}
            {/* CREATE A NEW WEDDING */}
            <div>
                <h3>Create A New Wedding</h3>
            </div>
            <div>
                {/* <input placeholder="wedding ID" type="number" ref={weddingIdInputToCreate}></input> */}
                <input placeholder="email" ref={emailInputToCreate}></input>
                <input placeholder="Groom & Bride' names" ref={nameInputToCreate}></input>
                <input placeholder="wedding date" ref={weddingDateInputToCreate} type="date"></input>
                <input placeholder="location" ref={weddingLocationInputToCreate}></input>
                <input placeholder="budget" ref={weddingBudgetToCreate}></input>
            </div>
            <div>
                <button onClick={addWedding}>Create Wedding</button>
            </div>
        </div>
    )

}