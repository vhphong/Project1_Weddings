import { useRef } from "react";
import axios from "axios";


export default function UpdateWeddingForm() {

    // GOOD================================================
    const emailIdInputToUpdate = useRef(null);
    const nameInputToUpdate = useRef(null);
    const weddingDateInputToUpdate = useRef(null);;
    const weddingLocationInputToUpdate = useRef(null);
    const weddingBudgetToUpdate = useRef(null);

    async function updateWedding(event) {

        alert("updateWedding called")

        let newWeddingToUpdate = {
            email: emailIdInputToUpdate.current.value,
            name: nameInputToUpdate.current.value,
            weddingDate: weddingDateInputToUpdate.current.value,
            weddingLocation: weddingLocationInputToUpdate.current.value,
            budget: weddingBudgetToUpdate.current.value
        }

        alert("newWeddingToUpdate: " + newWeddingToUpdate);

        const response = await axios.put(`http://localhost:3000/weddings/${emailIdInputToUpdate.current.value}`, newWeddingToUpdate);
        alert(`Wedding ID: ${emailIdInputToUpdate.current.value} updated :D `);

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
                <input placeholder="wedding email ID" ref={emailIdInputToUpdate}></input>
                <input placeholder="names" ref={nameInputToUpdate}></input>
                <input placeholder="wedding date" ref={weddingDateInputToUpdate} type="date"></input>
                <input placeholder="location" ref={weddingLocationInputToUpdate}></input>
                <input placeholder="budget" ref={weddingBudgetToUpdate}></input>
            </div>
            <div>
                <button onClick={updateWedding}>UPDATE wedding</button>
            </div>
        </div>
    )
}