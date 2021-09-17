

export default function ExpenseTable(props) {

    const retrievedExpenses = props.expenses;

    return (
        <table>
            <thead>
                <tr>
                    <th>Expense ID</th><th>Wedding ID</th><th>Reason</th><th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {retrievedExpenses.map(e =>
                    <tr key={e.expenseID}>
                        <td style={{ "textAlign": "center" }}>{e.expenseID}</td>
                        <td style={{ "textAlign": "center" }}>{e.wedding_ID}</td>
                        <td style={{ "textAlign": "left" }}>{e.reason}</td>
                        <td style={{ "textAlign": "right" }}>{e.amount}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}