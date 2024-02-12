import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserIcon from "../images/user.png";

const HeaderComponent = () => {
    const [popUp, setPopUp] = useState(false);
    const userInfo = useSelector(state => state.profileData.userInfo);
    console.log(userInfo);


    const userPop = () => {
        setPopUp(true);
    }

    const closePopUp = () => {
        setPopUp(false);
    }

    return (
        <div>
            <header >
                <div className='home_parent_div'>
                    <div>
                        <h3>Home</h3>
                    </div>
                    <div className='profile_icon'>
                        <span className='user_name'>Welcome <strong>{`${userInfo?.name?.firstname.toUpperCase()} ${userInfo?.name?.lastname.toUpperCase()}`}</strong></span>
                        <img src={UserIcon} width="25px" onClick={userPop} />

                        {popUp && (
                            <div className='popup_data'>
                                <h3>User Info</h3>
                                <p>
                                    Name: {`${userInfo?.name?.firstname} ${userInfo?.name?.lastname}`}
                                </p>
                                <p>Email:{userInfo?.email}</p>
                                <p>Phone:{userInfo?.phone}</p>
                                <div>
                                    <button type="button" className='popup_btn' onClick={closePopUp}>Close</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

        </div>

    )
}


export default HeaderComponent;