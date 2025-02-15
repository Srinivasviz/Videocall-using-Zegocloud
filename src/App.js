import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RoomPage from './pages/room/RoomPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/room/:roomId' element={<RoomPage />} />
    </Routes>
  );
}

export default App;
