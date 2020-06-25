import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class HomePage extends React.Component {
    state = {strains: []}

    componentDidMount(){
        this.getStrainsList();
    }

    getStrainsList = e => {
        // const token = JSON.parse(localStorage.getItem('token'))

        axiosWithAuth()
        .get('./api/strains')
        .then(res => {
            console.log(res);
            this.setState({ strains: res.data })
        })
        .catch(error =>
            console.log(error)
            )
    };

    render(){
        return(
            <div className="home-profile">
                <h1 className='h1-profile'>Welcome to Med-Cabinet!</h1>
                <h2>User Profile</h2>
                <h3>Recommended Strains</h3>
                <p>*Strains from register form*</p>
                <p>*Add/remove*</p>
            </div>
        )
    }   
}


export default HomePage;