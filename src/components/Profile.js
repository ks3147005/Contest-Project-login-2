import React, { useState, useEffect } from 'react';
import './profile.css';


const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      fetch(`https://dummyjson.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.log('Error fetching user data:', error));
    }
  }, []);

  return (
    <>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
};

export default Profile;