import axios from "axios";
import { useRef } from "react";

export default function MessageServicePage() {
    const noteContent = useRef(null);
    const senderEmail = useRef(null);
    const recipientEmail = useRef(null);

    async function sendMessage(event) {
        // alert(`GCP: sendMessage function called`);

        const noteContentInput = String(noteContent.current.value);
        const senderEmailInput = String(senderEmail.current.value);
        const recipientEmailInput = String(recipientEmail.current.value);


        try {
            const newMessage = {
                note: noteContentInput,
                sender: senderEmailInput,
                recipient: recipientEmailInput
            };

            // alert('senderEmailInput: ' + senderEmailInput);
            // alert('recipientEmailInput: ' + recipientEmailInput);

            // verify emails
            const senderValidation = await axios.get(`http://localhost:3000/employees/${senderEmailInput}/verify`);
            const recipientValidation = await axios.get(`http://localhost:3000/employees/${recipientEmailInput}/verify`);

            // create a message if BOTH emails are verified
            if ((senderValidation.data === true) && (recipientValidation.data === true)) {
                const response = await axios.post("http://localhost:3000/messages", newMessage);

                alert("A new message created. :)) ");
                document.getElementById("chatresult").innerHTML = ``;
            }
        } catch (error) {
            // alert(error);
            document.getElementById("chatresult").innerHTML = `Message was not sent due to invalid email(s).`;
        }
    }


    return (
        <div>
            <div>
                <h3>Internal Message Service Page</h3>
            </div>

            <div>
                <textarea placeholder="note" ref={noteContent}></textarea>
            </div>

            <div>
                <input placeholder="sender" ref={senderEmail} required></input>
                <input placeholder="recipient" ref={recipientEmail} required></input>
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                <p id="chatresult"></p>
            </div>
        </div>
    );
}
