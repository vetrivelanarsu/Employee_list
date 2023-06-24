


import './EmployeeList.css'
import React from 'react';
import { Link } from 'react-router-dom'



export default function EmployeeList({ employees })  {


  return (
    <div className="employee-list">
      {employees?.map(employee => (   
       
      <Link to={`/users?page=2&id=${employee.id}`} key={employee.id} style={{textDecoration:'none',color:'black'}}>
        <div className='employee-div'  >
         <div key={employee.id} className="employee-item">
            <div className='circle'>{employee.id}</div>
            <img src={employee.avatar} alt="Avatar" className="avatar" tabIndex={0}/>
         </div>
         <p className="first-name">{employee.first_name}</p>
        </div>
      </Link>
      ))}
    </div>
  );
};

