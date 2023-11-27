import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    getAllEmployee() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }
    getEmployeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

}


export default new EmployeeService();