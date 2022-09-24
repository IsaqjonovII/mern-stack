import { useEffect } from 'react';
import jwt from "jsonwebtoken"
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        const doSmth = async () => {
            const req = await fetch('http://localhost:5000/api/quote', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                }
            })

            const data = req.json();
            console.log(data);
        }
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                navigate('/')
            } else {
                doSmth();
            }
        }
    }, [navigate]);

    useEffect(() => {

    }, [])
    return (
        <div>
            <h1>This is Dashboard</h1>
        </div>
    )
}

export default Dashboard
