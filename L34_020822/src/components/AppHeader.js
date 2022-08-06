import { useTheme } from './../context/ThemeContext';

const AppHeader = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className='app-header'>
      <h1>My Sticker App</h1>
      <h4 onClick={toggleTheme}>Toggle Theme</h4>
    </div>
  );
};

export default AppHeader;
