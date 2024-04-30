import './LandingPage.css';
import {useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate()


    return (
            <div className="landing-page">
                <div className='content-container'>
                    <div className='text-container'>
                        <h2>Build a self care routine suitable for you</h2>
                        <h3>Take out test to get a personalised self care routine based on your needs</h3>
                    </div>
                    <button id='start' onClick={()=>navigate('/hair-type')}><p>Start the quiz</p></button>
                </div>
            </div>
    );
};

export default LandingPage;