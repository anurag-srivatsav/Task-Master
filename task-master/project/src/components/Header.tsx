import React from 'react';
import { CheckSquare, Moon, Sun } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  
  return (
    <header className="py-6 px-4 flex justify-between items-center mb-6 transition-colors duration-300 bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-2">
        <CheckSquare className="h-7 w-7 text-blue-500" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Task Tracker</h1>
      </div>
      
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700" />
        )}
      </button>
    </header>
  );
};

export default Header;