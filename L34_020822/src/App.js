import './App.css';
import AppHeader from './components/AppHeader';
import StickerBoard from './components/StickerBoard';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AppHeader />
      <StickerBoard />
    </ThemeProvider>
  );
}

export default App;
