import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questions from './components/Questions';
import FinalScreen from './components/FinalScreen';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <Router>
      <Container maxWidth='sm'>
        <Box textAlign='center' mt={5}>
          <Routes>
            <Route path='/' element={<Questions />}></Route>
            <Route path='/score' element={<FinalScreen />}></Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
