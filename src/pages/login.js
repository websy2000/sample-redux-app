import React, { useState } from 'react';
import { getUserLogin } from '../services/service';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const userLoginData = async () => {
        const response = await getUserLogin(username, password);
        if (response.token) {
            navigate(`/home`)
        }
        console.log(response);
    }

    const userChange = (event) => {
        setUserName(event.target.value);
    }

    const passwordChange = (event) => {
        setPassword(event.target.value);
    }


    return (
        <div className='user_login_page'>
            <form className='login_page'>
                <h2>Login Form</h2>
                <input type="text" name="username" id="username" placeholder='Enter your username' onChange={userChange} />
                <input type="password" name="password" id="password" placeholder='Enter your password' onChange={passwordChange} />
                <div>
                    <button className='login_btn' type="button" onClick={userLoginData}>Login</button>
                </div>
            </form>
        </div>

    )
}



export default LoginPage;