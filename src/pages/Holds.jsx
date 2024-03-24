import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header_styles.css';
import TopBar from '../components/top_bar';

function Holds(){

    // Example user object (replace with actual user data)
    const user = {
        name: 'John Doe',
        barcode: '0123456789',
        username: 'johndoe123',
        address: '123 Main St, Anytown, USA',
        dateRegistered: '2024-03-20', 
        birthdate: '1990-01-01' 
    };

    const [showMessagesDropdown, setShowMessagesDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);

    const toggleMessagesDropdown = () => {
        setShowMessagesDropdown(!showMessagesDropdown);
    };

    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
    };

    return (
        <>
        <div><TopBar/></div>
            <div className="profile-sidebar-container" style={{marginBottom:'3%'}}>
                <div className="sidebar-container-box">
                    <div style={{marginLeft:'2%', color:'#3c4043'}}>
                        <h1 style={{fontSize:'20px', marginTop:'2%'}}>My Account</h1>
                        <p style={{fontSize:'20px', marginTop:'5%'}}>{user.name}</p>
                        <Link to='/' style={{textDecoration:'none', color:'#3c4043'}}>
                            <div style={{fontSize:'16px', marginTop:'5%', marginLeft:'10%'}}>My Record</div>
                        </Link>
                        <Link to='/' style={{textDecoration:'none', color:'#3c4043'}}>
                            <div style={{fontSize:'16px', marginTop:'5%', marginLeft:'10%'}}>Items Out</div>
                        </Link>
                        <Link to='/profile/holds' style={{textDecoration:'none', color:'#3c4043'}}>
                            <div style={{fontSize:'16px', marginTop:'5%', marginLeft:'10%'}}>Holds</div>
                        </Link>
                        <Link to='/' style={{textDecoration:'none', color:'#3c4043'}}>
                            <div style={{fontSize:'16px', marginTop:'5%', marginLeft:'10%'}}>Fines</div>
                        </Link>
                        <Link to='/' style={{textDecoration:'none', color:'#3c4043'}}>
                            <div style={{fontSize:'16px', marginTop:'5%'}}>Logout</div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="profile-container-box">
                    <div style={{marginLeft:'20px', fontSize:'20px', color:'#3c4043'}}>
                        <h1 style={{marginTop:'5%'}}>Holds</h1>
                    </div>
                    </div>
                    <div style={{marginTop:'3%', marginLeft:'5%'}}>
                        <button onClick={toggleMessagesDropdown}>Messages</button>
                        {showMessagesDropdown && (
                            <div className="dropdown-info-container" style={{marginRight:'10%'}}>
                                <p style={{marginTop:'1%', marginBottom:'1%', marginLeft:'1%'}}>message :p</p>
                            </div>
                        )}
                    </div>
                    <div style={{marginTop:'3%', marginLeft:'5%'}}>
                        <button onClick={toggleUserDropdown}>Change User/Password</button>
                        {showUserDropdown && (
                            <div className="dropdown-info-container">
                                {/* Dropdown content for Change User/Password */}
                            </div>
                        )}
                    </div>
                </div>
                

            </div>

        </>
    );
}

export default Holds;