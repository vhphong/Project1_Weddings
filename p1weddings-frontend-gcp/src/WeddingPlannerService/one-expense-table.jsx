

export default function OneExpenseTable(props) {

    // const retrievedOneWedding = props.oneWedding;

    return (
        <table>
            <thead>
                <tr>
                    <th>Wedding ID</th>
                    <th>Groom and Bride</th>
                    <th>Wedding Date</th>
                    <th>Wedding Location</th>
                    <th>Budget</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ "textAlign": "center" }}>{props.weddingID}</td>
                    <td style={{ "textAlign": "center" }}>{props.name}</td>
                    <td style={{ "textAlign": "center" }}>{props.weddingDate}</td>
                    <td style={{ "textAlign": "center" }}>{props.weddingLocation}</td>
                    <td style={{ "textAlign": "right" }}>{props.budget}</td>
                </tr>

            </tbody>
        </table>
    );
}