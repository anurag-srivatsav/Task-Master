import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm: React.FC = () => {
  const [text, setText] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 transition-all duration-300">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          aria-label="Task name"
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center"
          aria-label="Add task"
          disabled={!text.trim()}
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default TaskForm;