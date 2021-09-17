import { EmployeeDAO } from "../daos/employee-dao";
import { EmployeeDaoPostgres } from "../daos/employee-dao-postgres";
import { Employee } from "../entities";
import EmployeeService from "./employee-service";


export class EmployeeServiceImpl implements EmployeeService {

    employeeDAO: EmployeeDAO = new EmployeeDaoPostgres();


    getAllEmployees(): Promise<Employee[]> {
        return this.employeeDAO.getAllEmployees();
    }


    getOneEmployeeByEmployeeID(employeeID: number): Promise<Employee> {
        return this.employeeDAO.getOneEmployeeByEmployeeID(employeeID);
    }


    getEmployeePasswordByEmployeeID(employeeID: number): Promise<string> {
        return this.employeeDAO.getEmployeePasswordByEmployeeID(employeeID);
    }


    getEmployeePasswordByEmployeeEmail(employeeEmail: string): Promise<string> {
        return this.employeeDAO.getEmployeePasswordByEmployeeEmail(employeeEmail);
    }


    verifyEmployeeEmailExists(employeeEmail: string): Promise<boolean> {
        return this.employeeDAO.verifyEmployeeEmailExists(employeeEmail);
    }


    getEmployeeFirstNameByEmailPassword(employeeEmail: string, employeePW: string): Promise<string> {
        return this.employeeDAO.getEmployeeFirstNameByEmailPassword(employeeEmail, employeePW);
    }

    
    getEmployeeLastNameByEmailPassword(employeeEmail: string, employeePW: string): Promise<string> {
        return this.employeeDAO.getEmployeeLastNameByEmailPassword(employeeEmail, employeePW);
    }

}