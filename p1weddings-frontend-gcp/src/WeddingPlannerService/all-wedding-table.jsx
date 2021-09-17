
export default function AllWeddingTable(props) {

    const retrievedWeddings = props.allWeddings;

    return (
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
                {retrievedWeddings.map(w =>
                    <tr key={w.weddingID}>
                        <td style={{ "textAlign": "center" }}>{w.weddingID}</td>
                        <td style={{ "textAlign": "center" }}>{w.name}</td>
                        <td style={{ "textAlign": "center" }}>{JSON.stringify(w.weddingDate).slice(1, 11)}</td>
                        <td style={{ "textAlign": "center" }}>{w.weddingLocation}</td>
                        <td style={{ "textAlign": "right" }}>{'$' + w.budget.toFixed(2)}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}