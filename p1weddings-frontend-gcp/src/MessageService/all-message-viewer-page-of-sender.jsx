import axios from "axios";
import { useRef, useState } from "react"
import AllMessageTable from "./all-message-table";


export default function AllMessageViewerPageOfSender() {
    const senderEmail = useRef(null);

    const [retrievedMessage, setAllMessages] = useState([]);

    async function getAllMessagesSent(event) {
        try {
            const senderEmailInput = String(senderEmail.current.value);

            const response = await axios.get(`http://localhost:3000/messages?sender=${senderEmailInput}`);
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
                <h3>View All Messages Of A Sender</h3>
            </div>
            <div>
                <input placeholder="sender's email" ref={senderEmail}></input>
                <button onClick={getAllMessagesSent}>VIEW All Messages Sent by </button>
                <p id='messageresult'></p>
            </div>
            <div>
                <AllMessageTable allMessages={retrievedMessage}></AllMessageTable>
            </div>
        </div>
    )
}