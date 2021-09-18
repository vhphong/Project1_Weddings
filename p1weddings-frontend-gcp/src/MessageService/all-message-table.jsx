

export default function AllMessageTable(props) {

    const retrievedMessages = props.allMessages;

    return (
        <table>
            <thead>
                <tr>
                    <th>Message ID</th>
                    <th>Sender</th>
                    <th>Recipient</th>
                    <th>Content</th>
                    <th>Date & Time</th>
                </tr>
            </thead>
            <tbody>
                {retrievedMessages.map(m =>
                    <tr key={m.id}>
                        <td>{m.id}</td>
                        <td>{m.sender}</td>
                        <td>{m.recipient}</td>
                        <td>{m.note}</td>
                        <td>{m.datetimestamp}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}