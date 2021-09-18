import axios from "axios";
import { useRef, useState } from "react"
import AllMessageTable from "./all-message-table";


export default function AllMessageViewerPageOfSenderRecipient() {
    const senderEmail = useRef(null);
    const recipientEmail = useRef(null);

    const [retrievedMessage, setAllMessages] = useState([]);

    async function getAllMessagesSentRecieved(event) {
        try {
            const senderEmailInput = String(senderEmail.current.value);
            const recipientEmailInput = String(recipientEmail.current.value);

            const response = await axios.get(`http://localhost:3000/messages?sender=${senderEmailInput}&recipient=${recipientEmailInput}`);
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
                <h3>View All Messages Of A Sender Sent to A Recipient</h3>
            </div>
            <div>
                <button onClick={getAllMessagesSentRecieved}>VIEW All Messages Sent FROM: </button>
                <input placeholder="sender's email" ref={senderEmail}></input>
                {/* <p>TO:</p> */}
                <label> TO: </label>
                <input placeholder="recipient's email" ref={recipientEmail}></input>
                <p id='messageresult'></p>
            </div>
            <div>
                <AllMessageTable allMessages={retrievedMessage}></AllMessageTable>
            </div>
        </div>
    )
}