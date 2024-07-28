import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter
} from 'mdb-react-ui-kit';
import "./ReleaseCard.css";

const Card = ({ data }) => {
    const { name, type, propertyNumber, imageUrl, location, amenities, date } = data;

    return (
        <MDBCard className='h-100 ' style={{ background: 'hsla(0, 0%, 95%, 0.55)', backdropFilter: 'blur(30px)' }}>
            <div className="image-container">
                <MDBCardImage
                    src={imageUrl}
                    alt={name}
                    position='top'
                />
            </div>
            <MDBCardBody>
                <MDBCardTitle>{name}</MDBCardTitle>
                <MDBCardText>
                    Type: {type}<br />
                    Number: {propertyNumber}<br />
                    Location: {location}<br />
                    Amenities: <ul>
                        {amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
                <small className='text-muted'>Date of allotment: {date}</small>
            </MDBCardFooter>
        </MDBCard>
    )
}

export default Card;
