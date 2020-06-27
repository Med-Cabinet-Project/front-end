import React  from 'react';
// import axiosWithAuth from '../../utils';
import { Card as ReactstrapCard, CardBody, CardText } from 'reactstrap';



const Card = (props )=> {
    const { flavor, name, negative, positive, type} = props.strain;
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
        <div>
            <ReactstrapCard className='uc'>
                <CardBody className='u-card'>
                    <CardText className='u-box'>Name: </CardText>
                    <CardText className='u-box'>Type: </CardText>
                    <CardText className='u-box'>Flavor: </CardText>
                    <CardText className='u-box'>Positive: </CardText>
                    <CardText className='u-box'>Negative: </CardText>
                </CardBody>
                <CardBody className='u-card2'>
                    <CardText className='u-box'>{name}</CardText>
                    <CardText className='u-box'>{type}</CardText>
                    <CardText className='u-box'>{flavor}</CardText>
                    <CardText className='u-box'>{positive}</CardText>
                    <CardText className='u-box'>{negative}</CardText>
                </CardBody>
            </ReactstrapCard>
        </div>
    )
}

export default Card;