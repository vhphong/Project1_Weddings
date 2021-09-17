


export default function AllExpenseTable(props) {

    const retrievedExpenses = props.allExpenses;

    return (
        <table>
            <thead>
                <tr>
                    <th>Expense ID</th>
                    <th>Wedding Email ID</th>
                    <th>Reason</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {retrievedExpenses.map(e =>
                    <tr key={e.expenseID}>
                        <td style={{ "textAlign": "center" }}>{e.expenseID}</td>
                        <td style={{ "textAlign": "center" }}>{e.email}</td>
                        <td style={{ "textAlign": "left" }}>{e.reason}</td>
                        <td style={{ "textAlign": "right" }}>{e.amount.toFixed(2)}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
