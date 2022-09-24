import { useState } from 'react';
import "./Login.css"

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    const handleForm = async (e) => {
        e.preventDefault();
        const repsonse = await fetch("http://localhost:5000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                password,
            }),
        });

        const data = await repsonse.json()
        console.log(data);
    }
    return (
        <div className='register'>
            <form onSubmit={handleForm}>
                <h3>Login</h3>
                <label>
                    <p>Your Name </p>
                    <input type="text" placeholder="Type Your name here" onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    <p>Your Password </p>
                    <input type="text" placeholder='Type your password here' onChange={(e) =>  setPassword(e.target.value)}/>
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login

// {/* <label>
//     <p>Your Email </p>
//     <input type="email" placeholder="Type Your email here" onChange={(e) => setEmail(e.target.value)} />
// </label> */}