import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/App/Error';
import Home from './pages/App/Home';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;