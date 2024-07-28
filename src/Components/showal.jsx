import React, { useState, useEffect } from 'react';

function AllUsers() {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend API
    fetch('http://localhost:5050/api/users/all-users')
      .then(response => {
        console.log('Response received:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        setProperty(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);
  

  return (
    <div>
      <h1></h1>
      <ul>
        {property.map(hous => (
          <li key={hous._id}>{hous._id}...{hous.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AllUsers;