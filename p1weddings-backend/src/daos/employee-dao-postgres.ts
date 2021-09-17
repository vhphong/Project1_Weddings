import { conn } from "../connection";
import { Employee } from "../entities";
import { MissingResourceError } from "../errors";
import { EmployeeDAO } from "./employee-dao";



export class EmployeeDaoPostgres implements EmployeeDAO {
  
    
    async getAllEmployees(): Promise<Employee[]> {

        const sql: string = 'SELECT * FROM employee ORDER BY empl_id';
        const result = await conn.query(sql);
        const allEmployees: Employee[] = [];

        for (let row of result.rows) {
            const empl: Employee = new Employee(row.empl_id, 
                                                row.empl_fname, 
                                                row.empl_lname,
                                                row.empl_email,
                                                row.empl_password);
            allEmployees.push(empl);
        }

        return allEmployees;
    }


    async getOneEmployeeByEmployeeID(employeeID: number): Promise<Employee> {
        
        const sql: string = 'SELECT * FROM employee WHERE empl_id = $1';
        const values = [employeeID];

        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`The employee with ID ${employeeID} does not exist.`);
        }

        const row = result.rows[0];
        const retrievedEmployee: Employee = new Employee(row.empl_id, 
                                                         row.empl_fname, 
                                                         row.empl_lname,
                                                         row.empl_email,
                                                         row.empl_password);

        return retrievedEmployee;
    }

    
    async getEmployeePasswordByEmployeeEmail(employeeEmail: string): Promise<string> {
        
        const sql:string = 'SELECT empl_password FROM employee WHERE empl_email = $1';
        const values = [employeeEmail];

        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`Wrong email or password`);
        }

        const row = result.rows[0];
        const retrievedEmployeePassword: string = row.empl_password;

        return retrievedEmployeePassword;
    }
    
    
    async getEmployeeFirstNameByEmailPassword(employeeEmail: string, employeePW: string): Promise<string> {

        const sql: string = 'SELECT empl_fname FROM employee WHERE empl_email = $1 AND empl_password = $2';
        const values = [employeeEmail, employeePW];

        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`First name with email ${employeeEmail} does not exist.`);
        }

        const row = result.rows[0];
        const retrievedEmployeeFirstName: string = row.empl_fname;

        return retrievedEmployeeFirstName;
    }



    async getEmployeeLastNameByEmailPassword(employeeEmail: string, employeePW: string): Promise<string> {
        const sql: string = 'SELECT empl_lname FROM employee WHERE empl_email = $1 AND empl_password = $2';
        const values = [employeeEmail, employeePW];

        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`Last name with email ${employeeEmail} does not exist.`);
        }

        const row = result.rows[0];
        const retrievedEmployeeLastName: string = row.empl_lname;

        return retrievedEmployeeLastName;
    }
    



    async getEmployeePasswordByEmployeeID(employeeID: number): Promise<string> {
    
        const sql: string =  'SELECT empl_fname FROM employee WHERE empl_id = $1';
        const values = [employeeID];

        const result = await conn.query(sql, values);

        if (result.rowCount === 0) {
            throw new MissingResourceError(`The password of employee ID ${employeeID} is invalid.`);
        }

        const row = result.rows[0];
        const retrievedEmployeePassword: string = String(row.empl_password);

        return retrievedEmployeePassword;
    }


    async verifyEmployeeEmailExists(employeeEmail: string): Promise<boolean> {
        const sql: string = 'SELECT empl_email FROM employee WHERE empl_email = $1';
        const values = [employeeEmail];

        const result = await conn.query(sql, values);

        let emailExistence: boolean = true;

        if (result.rowCount === 0) {
            emailExistence = false;
            throw new MissingResourceError(`The email ${employeeEmail} does not exist.`);
        }

        return emailExistence;
    }



}