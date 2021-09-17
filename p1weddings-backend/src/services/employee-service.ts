import { Employee } from "../entities";


export default interface EmployeeService {

    // get all employees
    // GET /employees
    getAllEmployees(): Promise<Employee[]>;


    // get an employee
    // GET /employee/:emplid
    getOneEmployeeByEmployeeID(employeeID: number): Promise<Employee>;


    // get // get employee password for logging in
    getEmployeePasswordByEmployeeID(employeeID: number): Promise<string>;


    // get employee password by employee email
    getEmployeePasswordByEmployeeEmail(employeeEmail: string): Promise<string>;


    // verify existence of an email
    // GET /employee/:email
    verifyEmployeeEmailExists(employeeEmail: string): Promise<boolean>;


    // PATCH /users/login
    // Request Body: {"email": "bill@wed.com", "password":"gatorfan1"}
    // Response Body: {"fname":"Bill", "lname":"Smith"}
    // get employee first name
    getEmployeeFirstNameByEmailPassword(employeeEmail: string, employeePW: string): Promise<string>;


    // get employee last name
    getEmployeeLastNameByEmailPassword(employeeEmail: string, employeePW: string): Promise<string>;

}