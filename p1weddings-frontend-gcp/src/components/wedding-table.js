

export default function WeddingTable(props) {

    const retrievedWeddings = props.weddings;

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
                {retrievedWeddings.map(w =>
                    <tr key={w.weddingID}>
                        <td style={{ "textAlign": "center" }}>{w.weddingID}</td>
                        <td style={{ "textAlign": "center" }}>{w.name}</td>
                        <td style={{ "textAlign": "center" }}>{w.weddingDate}</td>
                        <td style={{ "textAlign": "center" }}>{w.weddingLocation}</td>
                        <td style={{ "textAlign": "right" }}>{w.budget}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
