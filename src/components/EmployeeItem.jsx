import React from 'react'
import { removeEmployee } from '../service/localstorage';
import { getListEmployees } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';

export const EmployeeItem = ({ employee, setEmployees }) => {
    const { id ,roll, name, grade, email, address, phone } = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
        removeEmployee(id);
        setEmployees(getListEmployees());
    }

   
    
         
    return (
        <tr className="table table-responsive">
            <th>{roll}</th>
            <th>{name}</th>
            <th>{grade}</th>
            <td>{email}</td>
            <td className='addr' >{address}</td>
            <td>{phone}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() =>deleteEmployee()}>Delete</span>
                </div>
            </td>
        </tr>
    )
}
