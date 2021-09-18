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
                <button>View messages sent from a person</button>
                <button>View messages received by a person</button>
            </div>
        </div>
    );
}
