import React, { useState, useRef, useEffect } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
}
    from 'mdb-react-ui-kit';
import "./AddMaintainance.css"
import axios from 'axios';

const AddMaintainance = ({ user }) => {
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');
    const [maintenanceLogNumber, setMaintenanceLogNumber] = useState(null);
    const dateInputRef = useRef(null);

    useEffect(() => {
        fetchMaintenanceLogNumbers();
    }, []);
    const fetchMaintenanceLogNumbers = async () => {
        try {
            // Fetch maintenanceLogNumbers from both endpoints
            const response1 = await axios.get('http://localhost:5050/api/maintain/all-maintainance');
            const response2 = await axios.get('http://localhost:5050/api/schdmaintain/all-schd-maintainance');
            //alert(response1)
            // Extract maintenanceLogNumbers from responses
            const maintenanceLogNumbers1 = response1.data.map(item => item.maintenanceLogNumber);
            const maintenanceLogNumbers2 = response2.data.map(item => item.maintenanceLogNumber);
            //alert(maintenanceLogNumbers1)
            // Combine both lists of maintenanceLogNumbers
            const allMaintenanceLogNumbers = [...maintenanceLogNumbers1, ...maintenanceLogNumbers2];

            // Find the maximum value
            const maxMaintenanceLogNumber = Math.max(...allMaintenanceLogNumbers);

            // Assign a new maintenanceLogNumber by incrementing the maximum value
            setMaintenanceLogNumber(maxMaintenanceLogNumber + 1);
        } catch (error) {
            console.error('Error fetching maintenanceLogNumbers:', error);
        }
    };

    const handleChange = (e) => {
        setDate(e.target.value);
    };

    const handleDetailsChange = (e) => {
        setDetails(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const updatedUser = {
                ...user,
                maintenanceLogNumbers: [...user.maintenanceLogNumbers, maintenanceLogNumber]
            };
            // Send the updated user data to the server
        await axios.post('http://localhost:5050/api/users/update-user', updatedUser);
            // Send the form data to the server
            await axios.post('http://localhost:5050/api/schdmaintain/add-scheduled-maintenance', {
                date,
                details,
                maintenanceLogNumber
            });
            alert('Maintenance details submitted successfully!');
        } catch (error) {
            console.error('Error submitting maintenance details:', error);
            alert('Error submitting maintenance details. Please try again later.');
            console.log("details are: ",date, details, maintenanceLogNumber)
            console.log("maintenanceLogNumber: ",maintenanceLogNumber)
        }
    };

    return (
        <MDBContainer fluid>
            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
            <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <center><h3 className="fw-bold mb-0">Add Scheduled Maintenance</h3></center>
                <MDBCardBody className='p-2 text-center'>
                    <MDBRow>
                        <MDBCol>
                            <input
                                type="date"
                                onChange={handleChange}
                                ref={dateInputRef}
                            />
                            <p>Selected Date: {date}</p>
                        </MDBCol>
                    </MDBRow>
                    <div className='ContainerText'>
                        <div className="resizable-textarea">
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Query Details"
                                onChange={handleDetailsChange}
                                value={details}
                            ></textarea>
                        </div>
                    </div>
                    <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>Submit Details</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};


export default AddMaintainance
