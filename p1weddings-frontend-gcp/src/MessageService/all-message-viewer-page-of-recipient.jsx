import axios from "axios";
import { useRef, useState } from "react"
import AllMessageTable from "./all-message-table";


export default function AllMessageViewerPageOfRecipient() {
    const recipientEmail = useRef(null);

    const [retrievedMessage, setAllMessages] = useState([]);

    async function getAllMessagesReceived(event) {
        try {
            const recipientEmailInput = String(recipientEmail.current.value);

            const response = await axios.get(`http://localhost:3000/messages?recipient=${recipientEmailInput}`);
            console.log(response);
            const allMessagesResult = response.data;
            setAllMessages(allMessagesResult);

        } catch (error) {
            document.getElementById("messageresult").innerHTML = `No messages found or invalid email.`;
        }

    }
    return (
        <div>
            <div>
                <h3>View All Messages Of A Recipient</h3>
            </div>
            <div>
                <button onClick={getAllMessagesReceived}>VIEW All Messages Received By</button>
                <input placeholder="recipient's email" ref={recipientEmail}></input>
                <p id='messageresult'></p>
            </div>
            <div>
                <AllMessageTable allMessages={retrievedMessage}></AllMessageTable>
            </div>
        </div>
    )
}