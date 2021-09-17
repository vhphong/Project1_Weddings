import { useRef } from "react";
import axios from "axios";


export default function UpdateWeddingForm() {

    // GOOD================================================
    const weddingIdInputToUpdate = useRef(null);
    const nameInputToUpdate = useRef(null);
    const weddingDateInputToUpdate = useRef(null);;
    const weddingLocationInputToUpdate = useRef(null);
    const weddingBudgetToUpdate = useRef(null);

    async function updateWedding(event) {

        let newWeddingToUpdate = {
            weddingID: weddingIdInputToUpdate.current.value,
            name: nameInputToUpdate.current.value,
            weddingDate: weddingDateInputToUpdate.current.value,
            weddingLocation: weddingLocationInputToUpdate.current.value,
            budget: weddingBudgetToUpdate.current.value
        }

        const response = await axios.put(`http://localhost:3000/weddings/${weddingIdInputToUpdate.current.value}`, newWeddingToUpdate);
        alert(`Wedding ID: ${weddingIdInputToUpdate.current.value} updated :D `);

        console.log(response);
        const updateWeddingResult = response.data;
        console.log(updateWeddingResult);
    }


    return (
        <div>
            {/* GOOD================================================ */}
            {/* UPDATE A WEDDING */}
            <div>
                <h3>Update A Wedding</h3>
            </div>
            <div>
                <input placeholder="wedding ID to UPDATE" type="number" ref={weddingIdInputToUpdate}></input>
                <input placeholder="names" ref={nameInputToUpdate}></input>
                <input placeholder="wedding date" ref={weddingDateInputToUpdate} type="date"></input>
                <input placeholder="location" ref={weddingLocationInputToUpdate}></input>
                <input placeholder="budget" ref={weddingBudgetToUpdate}></input>
            </div>
            <div>
                <button onClick={updateWedding}>UPDATE a wedding</button>
            </div>
        </div>
    )
}