import axios from "axios";
import { useRef } from "react";



export default function DeleteWeddingForm() {

    // GOOD================================================
    const weddingIdInputToDelete = useRef(null);

    async function deleteWedding(event) {
        try {
            const email = weddingIdInputToDelete.current.value;
            const response = await axios.delete(`http://localhost:3000/weddings/${email}`);
            console.log(response);
            alert(`Wedding ID: ${email} deleted :(( `);
        } catch (error) {
            console.log(error);
            alert('Enter a valid wedding ID to delete!');
        }
    }


    return (
        <div>
            {/* GOOD================================================ */}
            {/* DELETE A WEDDING */}
            <div>
                <h3>Delete A Wedding</h3>
            </div>
            <div>
                <input placeholder="wedding email ID" ref={weddingIdInputToDelete}></input>
            </div>
            <div>
                <button onClick={deleteWedding}>Delete Wedding</button>
            </div>
        </div>
    )
}