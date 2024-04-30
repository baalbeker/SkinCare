import { useNavigate } from 'react-router-dom';
import ProductRecommendations from '../../components/ProductRecomendations/ProductRecomendations';
import { dailyRoutine } from '../../constants/constants';
import './Results.css'


const Results = () => {
    const navigate = useNavigate();
    
    return (
        <div className="results-page">
            <div className='content-container'>
                    <div className='text-container'>
                        <h2>Build your everyday self care routine.</h2>
                        <h3>{dailyRoutine}</h3>
                    </div>
                    <button id='retake' onClick={()=>navigate('/landing')}><p>Retake the quiz</p></button>
                    <ProductRecommendations />
                </div>
        </div>
    )
}

export default Results