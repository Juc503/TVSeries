import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HomeSeasons from './pages/HomeSeasons';

import NotFoundPage from './components/NotFoundPage';
import Serie from './pages/Serie'
import HomeCast from './pages/HomeCast'
import HomeShows from './pages/HomeShows'
import HomePeople from './pages/HomePeople'
import Schedule from './pages/Schedule'


function Paths() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Serie/:id' element={<Serie />} />
                    <Route path='/HomeSeasons/:id' element={<HomeSeasons />} />
                    <Route path='/HomeCast/:id' element={<HomeCast />} />
                    <Route path='/HomeShows' element ={<HomeShows/>}/>
                    <Route path='/HomePeople' element ={<HomePeople/>}/>
                    <Route path='/Schedule' element ={<Schedule/>}/>
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Paths