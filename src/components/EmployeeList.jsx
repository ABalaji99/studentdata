import { EmployeeItem } from './EmployeeItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from './../service/localstorage';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">Students Data</h1>

            {
                employees.length > 0 ? (
                    <div className="cards">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope='col'>Roll No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Class</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => <EmployeeItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center"><b>ADD</b> Students</h3>
                )
            }

        </div>
    )
}
