import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import UserGrid from './UserGrid';
import Loader from './Loader';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar onClick={getUsers} />
      {loading ? <Loader /> : <UserGrid users={users} />}
    </div>
  );
};

export default App;
