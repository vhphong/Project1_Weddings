import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import AllWeddingTable from "./all-wedding-table";
import OneWeddingTable from "./one-wedding-table";


export default function AllWeddingViewerPage() {

    // GOOD================================================
    const [retrievedWeddings, setAllWeddings] = useState([]);

    async function getAllWeddings(event) {

        const response = await axios.get('http://localhost:3000/weddings');
        console.log(response);
        const allWeddingsResult = response.data;
        setAllWeddings(allWeddingsResult);
    }


    return (
        <div>
            {/* GOOD================================================ */}
            {/* SHOW ALL WEDDINGS */}
            <div>
                <h3>Show All Weddings</h3>
                <button onClick={(getAllWeddings)}>VIEW All Weddings</button>
            </div>

            <AllWeddingTable allWeddings={retrievedWeddings}></AllWeddingTable>

            {/* <OneWeddingTable oneWedding={retrievedOneWedding}></OneWeddingTable> */}
        </div>
    )
}



