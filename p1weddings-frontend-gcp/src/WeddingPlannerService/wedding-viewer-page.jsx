import axios from "axios";
import { useState } from "react";
import WeddingTable from "./wedding-table";


export default function WeddingViewerPage() {

    const [retrievedWeddings, setWeddings] = useState([]);

    async function getWeddings(event) {
        const response = await axios.get('http://localhost:3000/weddings');
        console.log(response);
        setWeddings(response.data);
    }

    return (
        <div>
            <h1>Wedding Viewer Page</h1>

            {/* shows records manually*/}
            {/* <button onClick={(getWeddings) }>Get Weddings</button> */}
            
            {/* shows records automatically*/}
            <button onClick={(getWeddings)("/weddings", "_self")}>GET ALL Weddings</button>
            <button>CREATE a wedding</button>
            <button>GET a wedding</button>
            <button>UPDATE a wedding</button>
            <button>DELETE a wedding</button>
            <ul>
                {/* <li onClick={getWeddings}>Link to Get Weddings</li> */}
            </ul>

            <WeddingTable weddings={retrievedWeddings}></WeddingTable>
        </div>
    )
}