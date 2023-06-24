import React, { useState, useEffect } from 'react';
import EmployeeList from './EmployeeList'
import './Home.css';

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  let page=2

  const fetchAndUpdate = async () => {
    try {
      setLoading(true);
      setErr(false);
      let data = await getData(`https://reqres.in/api/users?page=${page}`);
      setEmployees(data.data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndUpdate();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <h1 style={{ textAlign: 'center' }}>Loading....</h1>;
  }

  if (err) {
    return <h1 style={{ textAlign: 'center' }}>Something Went Wrong...</h1>;
  }

  return (
    <div className="container">
      <h1>EMPLOYEE LIST</h1>
      <div className="inputfield">
        <input
          type="text"
          className="search-hover"
          placeholder="Search by first name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredEmployees.length > 0 ? (
      <div className="employees-list">
        <EmployeeList employees={filteredEmployees} />
      </div>
    ) : (
      <p className="not-found">Not Found</p>
    )}
    
    </div>
  );
};

export default Home;
