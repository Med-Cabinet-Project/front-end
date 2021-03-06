import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth'
import { useParams, useHistory } from 'react-router-dom';
import ProfileCard from './ProfileCard';

// import './profile.scss';

function UserProfile() {
    const dummyCredentials = 
        {
            first_name:'Lexi',
            last_name: 'Aros',
            email: 'hello@gmail.com',
            password: 'abc123!'
        };
        console.log(dummyCredentials);

  const [data, setData] = useState(dummyCredentials);
  const params = useParams();
  const { push } = useHistory();

  // const fetchData = (id) => {
  //   axiosWithAuth()
  //     .get(`http://UPDATE/${id}`)
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err.response));
  // };

  // useEffect(() => {
  //   fetchData(params.id);
  // }, [params.id]);

  // if (!data) {
  //   return <div>Loading user information...</div>;
  // }

  const handleUpdate = e => {
    e.preventDefault();
      
    // axiosWithAuth()
    // .put(`UPDATE/${params.id}`, data)
    // .then(res => {
    //   push(`UPDATE/${params.id}`);
    // })
    // .catch(err =>
    //   console.error("ProfileInfo.js: handleUpdate: err ", err.message, err.response)
    //   );
  }

  const handleChange = e => {
    // e.persist();
    // let value =  e.target.value;
    // if(e.target.name === 'first_name') {
    //     value = parseInt(value, 10);
    // setData(e.target.value)
    

    setData({
        ...data,
        [e.target.name]:e.target.value
    });
  };

  return (
    <div className="Profile-Page">
      <h2>Profile Details</h2>
      <ProfileCard profile={data} />
      <div className="update-form">
        <h3>Update Profile</h3>
            <form onSubmit={handleUpdate}>
                <input 
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    onChange={e => handleChange(e)}
                    value={setData.first_name}
                />
                <input 
                    type='text'
                    name='last_name'
                    placeholder='Last Name'
                    onChange={e => handleChange(e)}
                    // value={setData.last_name}
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={e => handleChange(e)}
                    // value={setData.email}
                />
                <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={e => handleChange(e)}
                    // value={setData.password}
                />
                <button type='submit'>Update</button>
            </form>
            </div>
    </div>
  );
}

export default UserProfile;
