import './login.scss';
import { useState } from "react";
import axios from 'axios';
import Button1 from '../../components/button/Default_Button';

const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleMail = (e) => {
        if(e.target.value !== '') {
            setEmail(e.target.value);
        }
    }

    const handlePassword = (e) => {
        if(e.target.value !== '') {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '') {
            const data = {
                mail: email,
                password: password,
            };
            axios
                .post('http://localhost:8000/user/login', data)
                .then((res) => {
                    console.log(res);
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        }
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <h1>Connexion</h1>
                <form className="login-form">
                    <div className="form-group">
                        <input type="email" placeholder="email" onChange={handleMail} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="password" onChange={handlePassword} />
                    </div>
                    <div className="btn-container">
                        <Button1 type="submit" onClick={handleSubmit} text="Connexion" ></Button1>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
