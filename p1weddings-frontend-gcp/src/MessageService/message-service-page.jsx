import axios from "axios";
import { useRef } from "react";

export default function MessageServicePage() {





    return (
        <div>
            <div>
                <h3>Internal Message Service Page</h3>
            </div>
            <div>
                <button onClick={() => window.open("/messages/create", "_self")}>Send a message</button>
                <button onClick={() => window.open("/messages/viewall", "_self")}>View all messages</button>
                <button onClick={() => window.open("/messages/sender", "_self")}>View messages of a Sender</button>
                <button onClick={() => window.open("/messages/recipient", "_self")}>View messages of a Recipient</button>
            </div>
        </div>
    );
}
