import React from 'react';
import { Card as ReactstrapCard, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const Card = (props) => {
    const { flavor, id, medical, name, negative, positive, type} = props.strain;

    return (
        <div>
            <ReactstrapCard>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{type}</CardSubtitle>
                    <CardText>{flavor}</CardText>
                    <CardText>{positive}</CardText>
                    <CardText>{negative}</CardText>
                </CardBody>
            </ReactstrapCard>
        </div>
    )
}

export default Card;