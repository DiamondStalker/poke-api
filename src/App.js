import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx'

function App() {
  
  let basename = window.location.pathname.includes('/diamondstalker') ? '/poke-api' : ''

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
