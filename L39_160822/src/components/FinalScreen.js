import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToStart = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(20));
    navigate('/');
  };

  return (
    <Box mt={30}>
      <Typography variant='h3' fontWeight='bold' mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToStart} variant='outlined'>
        start again!
      </Button>
    </Box>
  );
};

export default FinalScreen;
