import { useState } from "react";
import { useRef } from "react";
import axios from "axios";


export default function EmployeeLoginPage() {

    const employeeEmailToLogin = useRef(null);
    const employeePasswordToLogin = useRef(null);

    async function EmployeeLogin(event) {
        try {
            const employeeEmailInput = employeeEmailToLogin.current.value;
            const employeePasswordInput = employeePasswordToLogin.current.value;

            // verify that if employeeEmailInput exists, returns TRUE if email exists
            // const emailExistence = await axios.get(`http://localhost:3000/users/${employeeEmailInput}/verify`);

            // verify that employee email and password exist
            const savedPassword = await axios.get(`http://localhost:3000/users/${employeeEmailInput}/verifypassword`);
            // document.getElementById("loginresult").innerHTML = "savedPassword: " + JSON.stringify(savedPassword.data);

            // compare employeePasswordInput to the saved password in the database
            if (employeePasswordInput === JSON.stringify(savedPassword.data)) {
                document.getElementById("loginresult").innerHTML = `logged in as ${employeeEmailInput}`;
                window.open("/", "_blank");
            }

        } catch (error) {
            document.getElementById("loginresult").innerHTML = "Invalid email and/or password";
            // window.location.reload();
        }
    }


    return (
        <div>
            {/* EMPLOYEE LOGIN PAGE */}
            <div>
                <h3>Employee Login Page</h3>
            </div>

            <div>
                <input placeholder="email" ref={employeeEmailToLogin} required></input>
                <input placeholder="password" ref={employeePasswordToLogin} type="password" required></input>

            </div>
            <div>
                <p id="loginresult"></p>
            </div>

            <div>
                <button onClick={EmployeeLogin}>Login</button>
            </div>
        </div>
    )
}