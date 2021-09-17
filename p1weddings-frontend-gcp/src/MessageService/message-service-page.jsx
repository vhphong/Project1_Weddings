

export default function MessageServicePage() {



    async function sendMessage(event) {

        alert(`sendMessage function called`);
    }






    return (
        <div>
            <div>

                <h3>Internal Message ServicePage</h3>
            </div>

            <div>
                <textarea>

                </textarea>
            </div>

            <div>
                <input placeholder="recipient"></input>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    )
}