import Nav from 'react-bootstrap/Nav'
// https://react-bootstrap.github.io/components/navs/
// https://react-bootstrap.github.io/components/navs/#nav-props




export default function OneWeddingTable() {

    // const retrievedOneWedding = props.oneWedding;

    const weddingSample = [
        { weddingID: 101, name: "No Name", weddingDate: "2021/09/13", weddingLocation: "U.S.", budget: 123.45 },
        { weddingID: 102, name: "No Names", weddingDate: "2021/09/14", weddingLocation: "CA", budget: 67.45 }
                        ];


    return (

        <div>
            <h3>OneWeddingTable</h3>
            <table>
                <thead>
                    <tr>
                        <th>Wedding ID</th>
                        <th>Groom and Bride</th>
                        <th>Wedding Date <br /> (yyyy-mm-dd)</th>
                        <th>Wedding Location</th>
                        <th>Budget</th>
                    </tr>
                </thead>
                <tbody>
                    {weddingSample.map(w => <tr key={w.weddingID}>
                        <td style={{ "textAlign": "center" }}>{weddingSample.weddingID}</td>
                        <td style={{ "textAlign": "center" }}>{weddingSample.name}</td>
                        <td style={{ "textAlign": "center" }}>{weddingSample.weddingDate}</td>
                        <td style={{ "textAlign": "center" }}>{weddingSample.weddingLocation}</td>
                        <td style={{ "textAlign": "right" }}>{weddingSample.budget}</td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    );
}