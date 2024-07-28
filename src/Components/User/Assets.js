import React, {useState, useEffect} from 'react'
import {
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import Card from '../Cards/Card';

const Assets = (props) => {
    const [propertyData, setPropertyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await Promise.all(
                props.user.propertyNumber.map(async (propertyNumber) => {
                    const response = await fetch(`http://localhost:5050/api/property/property-data/${propertyNumber}`);
                    return response.json();
                })
            );
            setPropertyData(data);
        };

        fetchData();
    }, [props.user.propertyNumber])
    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4 ms-auto' style={{ paddingTop: "20px" }}>
            {propertyData.map((data, index) => (
                <MDBCol key={index}>
                    <Card data={data} />
                    {console.log(data)}
                </MDBCol>
            ))}
        </MDBRow>
    )
}

export default Assets
