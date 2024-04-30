import './App.css'
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import Q1 from './pages/QuizPages/Q1';
import Q2 from './pages/QuizPages/Q2';
import Q3 from './pages/QuizPages/Q3'
import Q4 from './pages/QuizPages/Q4'
import Q5 from './pages/QuizPages/Q5'
import Results from './pages/Results/Results';
import NotFound from './pages/NotFound/NotFound'
import { ChoicesProvider } from './context/ChoicesContext';

function App() {

  return (
    <ChoicesProvider>
      <div className='main'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/hair-type' element={<Q1 />} />
          <Route path='/hair-wash' element={<Q2 />} />
          <Route path='/hair-benefit' element={<Q3 />} />
          <Route path='/hair-problems' element={<Q4 />} />
          <Route path='/hair-color' element={<Q5 />} />
          <Route path='/results' element={<Results />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </ChoicesProvider>
  )
}

export default App
