import React from 'react';
// import axiosWithAuth from '../../utils/axiosWithAuth';
import { Card as ReactstrapCard, CardBody, CardText } from 'reactstrap';



const ProfileCard= (props)=>{
    const { first_name, last_name, email, password, } = props.profile;
    // const [ userData, setUserData] = useState([]);

    // useEffect(() => {
    //     axiosWithAuth()
    //     .get('http://strainapi.evanbusse.com/bdWuDvk/searchdata/effects')
    //     .then(res => {
    //         console.log(res);
    //         setUserData(res.data.results);
    //     })
    // },[])
        
    return (
        <div >
            <ReactstrapCard className='pc'>
                <CardBody className='p-card'>
                    <CardText className='box'>First Name: </CardText>
                    <CardText className='box'>Last Name: </CardText>
                    <CardText className='box'>Email: </CardText>
                    <CardText className='box'>Password: </CardText>
                </CardBody>
                <CardBody className='p-card2'>
                    <CardText className='box'>{first_name}</CardText>
                    <CardText className='box'>{last_name}</CardText>  
                    <CardText className='box'>{email}</CardText>
                    <CardText className='box'>{password}</CardText>
                </CardBody>
            </ReactstrapCard>
        </div>
    )
}

export default ProfileCard;