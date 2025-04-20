import React from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-2xl mx-auto">
            <Header />
            <main className="px-4 pb-10">
              <TaskForm />
              <TaskList />
            </main>
          </div>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;