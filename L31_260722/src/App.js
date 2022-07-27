import './App.css';
import { getStickers } from './services/api';
import useAsync from './hooks/useAsync';

function App() {
  const { execute, status, value, error } = useAsync(getStickers);

  return (
    <div className='App'>
      <div>
        {status === 'idle' && (
          <div>Start your journey by clicking a button</div>
        )}
        {status === 'success' && <div>{JSON.stringify(value.data)}</div>}
        {status === 'error' && <div>{error}</div>}
        <button onClick={execute} disabled={status === 'pending'}>
          {status !== 'pending' ? 'Click me' : 'Loading...'}
        </button>
      </div>
    </div>
  );
}

export default App;
