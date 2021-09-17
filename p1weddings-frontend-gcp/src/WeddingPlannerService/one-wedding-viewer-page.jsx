import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import OneWeddingTable from "./one-wedding-table";


export default function OneWeddingViewerPage() {

    // GOOD================================================
    const [retrievedOneWedding, setOneWedding] = useState();
    const weddingIdInputToShow = useRef(null);

    async function getOneWedding(event) {
        try {
            const weddingID = weddingIdInputToShow.current.value;
            const response = await axios.get(`http://localhost:3000/weddings/${weddingID}`);
            console.log(response);
            const oneWeddingResult = response.data;
            setOneWedding(oneWeddingResult);

            document.getElementById("weddingid").innerHTML = oneWeddingResult.weddingID;
            document.getElementById("wnames").innerHTML = oneWeddingResult.name;
            document.getElementById("wdate").innerHTML = JSON.stringify(oneWeddingResult.weddingDate).slice(1, 11);
            document.getElementById("wlocation").innerHTML = oneWeddingResult.weddingLocation;
            document.getElementById("wbudget").innerHTML = oneWeddingResult.budget.toFixed(2);

            document.getElementById("oneweddingresult").innerHTML = "";
        } catch (error) {
            console.log(error);
            document.getElementById("oneweddingresult").innerHTML = `Wedding ID ${weddingIdInputToShow.current.value} does not exist or was deleted!!!`;

            document.getElementById("weddingid").innerHTML = "";
            document.getElementById("wnames").innerHTML = "";
            document.getElementById("wdate").innerHTML = "";
            document.getElementById("wlocation").innerHTML = "";
            document.getElementById("wbudget").innerHTML = "";
        }
    }


    return (
        <div>
            {/* GOOD================================================ */}
            {/* VIEW A WEDDING */}
            <div>
                <h3>Show A Wedding</h3>
            </div>
            <div>
                <input placeholder="wedding ID to SHOW" type="number" ref={weddingIdInputToShow} required></input>
                <button onClick={getOneWedding}>GET a Wedding</button>
            </div>
            <div>
                <p id="oneweddingresult"></p>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Wedding ID</th>
                            <th>Groom and Bride</th>
                            <th>Wedding Date<br />(yyyy-mm-dd)</th>
                            <th>Location</th>
                            <th>Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="weddingid" style={{ "textAlign": "center" }}></td>
                            <td id="wnames" style={{ "textAlign": "center" }}></td>
                            <td id="wdate" style={{ "textAlign": "center" }}></td>
                            <td id="wlocation" style={{ "textAlign": "center" }}></td>
                            <td id="wbudget" style={{ "textAlign": "right" }}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                {/* <OneWeddingTable oneWedding={retrievedOneWedding}></OneWeddingTable> */}
                {/* <OneWeddingTable></OneWeddingTable> */}
            </div>
        </div>
    )
}