// import React, { useState, useEffect }  from 'react';
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux'
// import Card from './UsersCard'
// import { getUsers } from '../../Actions/actions';
// import UpdateForm from '../HomePage/Profile'
// import Profile from './Profile';
// import { useParams, useHistory } from 'react-router-dom';
// import axiosWithAuth from '../../utils/axiosWithAuth';

// const HomePage = () => {
//     const dummyData = 
//         [{"flavor":"Sweet,Earthy,Citrus",
//         "id":1007,
//         "medical":"Depression,Insomnia,Pain,Stress,Headache,Fatigue",
//         "name":"Juicy Jack","negative":"Dry Mouth,Paranoid","positive":"Euphoric,Happy,Creative,Energetic,Uplifted",
//         "type":"hybrid"},
//         {"flavor":"Pungent,Pine,Earthy","id":1192,"medical":"Depression,Insomnia,Pain,Stress,Headache,Fatigue","name":"Master Jedi","negative":"Dizzy,Dry Mouth,Dry Eyes,Anxious","positive":"Relaxed,Hungry,Euphoric,Happy,Sleepy","type":"indica"},{"flavor":"Earthy,Chemical,Pine","id":708,"medical":"Depression,Pain,Stress,Nausea,Headache,Fatigue","name":"Frank's Gift","negative":"Dizzy,Paranoid,Dry Eyes,Anxious","positive":"Relaxed,Hungry,Euphoric,Happy,Giggly","type":"hybrid"},{"flavor":"Berry,Blue Cheese,Diesel","id":557,"medical":"Depression,Fatigue","name":"Dank Sinatra","negative":"","positive":"Relaxed,Euphoric,Happy,Sleepy,Focused","type":"hybrid"},{"flavor":"Berry,Blueberry,Sweet","id":769,"medical":"Depression,Insomnia,Pain,Stress,Headache,Muscle Spasms","name":"Godberry","negative":"Dizzy,Dry Mouth,Paranoid,Dry Eyes","positive":"Relaxed,Euphoric,Happy,Sleepy,Giggly","type":"indica"}]
    
//         console.log(dummyData);
//     const [strains, setStrains] = React.useState(dummyData)


//     return (
//         <div className="home-profile">
//           <h1 className="h1-profile">Welcome to Med-Cabinet!</h1>
//           <h2>User Profile</h2>
//           <h3>Recommended Strains</h3>
//           <div className='card'>
//                 {strains.map(strain => {
//               return (
//                   <Card strain={strain}/>
//               )
//           })} 
//           </div>
       
//           <p>*Add/remove*</p>
//           {/* <UpdateForm {...dummyData}  setStrains={setStrains} /> */}
//         </div>
//       )
// };
// // export default HomePage;

// const mapStateToProps = state => {
//     return(
//        { 
//         recommend: state.recommend,
//         error: state.error
//         }
//     )
// };

// export default connect( mapStateToProps, { getUsers }) (HomePage);


import React, { useState, useEffect }  from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import axiosWithAuth from '../../utils/axiosWithAuth';
import Card from './UsersCard'


function Profile() {
    const dummyData = 
        [{"flavor":"Sweet,Earthy,Citrus",
        "id":1007,
        "medical":"Depression,Insomnia,Pain,Stress,Headache,Fatigue",
        "name":"Juicy Jack","negative":"Dry Mouth,Paranoid","positive":"Euphoric,Happy,Creative,Energetic,Uplifted",
        "type":"hybrid"},
        {"flavor":"Pungent,Pine,Earthy","id":1192,"medical":"Depression,Insomnia,Pain,Stress,Headache,Fatigue","name":"Master Jedi","negative":"Dizzy,Dry Mouth,Dry Eyes,Anxious","positive":"Relaxed,Hungry,Euphoric,Happy,Sleepy","type":"indica"},{"flavor":"Earthy,Chemical,Pine","id":708,"medical":"Depression,Pain,Stress,Nausea,Headache,Fatigue","name":"Frank's Gift","negative":"Dizzy,Paranoid,Dry Eyes,Anxious","positive":"Relaxed,Hungry,Euphoric,Happy,Giggly","type":"hybrid"},{"flavor":"Berry,Blue Cheese,Diesel","id":557,"medical":"Depression,Fatigue","name":"Dank Sinatra","negative":"","positive":"Relaxed,Euphoric,Happy,Sleepy,Focused","type":"hybrid"},{"flavor":"Berry,Blueberry,Sweet","id":769,"medical":"Depression,Insomnia,Pain,Stress,Headache,Muscle Spasms","name":"Godberry","negative":"Dizzy,Dry Mouth,Paranoid,Dry Eyes","positive":"Relaxed,Euphoric,Happy,Sleepy,Giggly","type":"indica"}]
    
        console.log(dummyData);

    const [user, setUser] = useState(dummyData);
    // const params = useParams();
    // const {push} = useHistory();

    // const fetchUser = (id) => {
    //     axiosWithAuth()
    //     .get((res) => setUser(res.data))
    //     .catch((err) => console.err(err.response));
    // };

    // useEffect(()=> {
    //     fetchUser(params.id);
    // }, [params.id]);

    // if(!user) {
    //     return <div>Loading User Info</div>;
    // }

    return (
        <div className="home-profile">
          <h1 className="h1-profile">Welcome to Med-Cabinet!</h1>
          <h3>Recommended Strains</h3>
          <div className='card'>
                {user.map(strain => {
              return (
                  <Card strain={strain}/>
              )
          })} 
          </div>
       
          {/* <p>*Add/remove*</p> */}
          {/* <UpdateForm {...dummyData}  setStrains={setStrains} /> */}
        </div>
      )
}

export default Profile;
