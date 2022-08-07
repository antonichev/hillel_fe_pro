import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import StickerEditor from './components/StickerEditor';
import StickerBoard from './components/StickerBoard';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AppHeader />

      <Routes>
        <Route path='/' element={<StickerBoard />} />
        <Route path='/stickers/:id' element={<StickerEditor />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
