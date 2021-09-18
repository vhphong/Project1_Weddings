
export default function AllWeddingTable(props) {

    const retrievedWeddings = props.allWeddings;

    return (
        <table>
            <thead>
                <tr>
                    <th>Wedding Email ID</th>
                    <th>Groom and Bride</th>
                    <th>Wedding Date<br />(mm/dd/yyyy)</th>
                    <th>Location</th>
                    <th>Budget</th>
                </tr>
            </thead>
            <tbody>
                {retrievedWeddings.map(w =>
                    <tr key={w.weddingID}>
                        <td style={{ "textAlign": "center" }}>{w.email}</td>
                        <td style={{ "textAlign": "center" }}>{w.name}</td>
                        <td style={{ "textAlign": "center" }}>{w.weddingDate}</td>
                        <td style={{ "textAlign": "center" }}>{w.weddingLocation}</td>
                        <td style={{ "textAlign": "right" }}>{'$ ' + w.budget}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}