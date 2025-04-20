import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Task } from '../types/Task';
import { useTaskContext } from '../context/TaskContext';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask, toggleTask } = useTaskContext();

  return (
    <div 
      className="group bg-white dark:bg-gray-700 p-4 rounded-lg mb-3 shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 animate-fadeIn"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => toggleTask(task.id)}
            className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
              task.completed 
                ? 'bg-purple-500 border-purple-500 dark:bg-purple-400 dark:border-purple-400' 
                : 'border-gray-300 dark:border-gray-500'
            }`}
            aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {task.completed && <Check className="h-4 w-4 text-white" />}
          </button>
          
          <span 
            className={`text-gray-800 dark:text-gray-100 transition-all duration-300 ${
              task.completed ? 'line-through text-gray-400 dark:text-gray-500' : ''
            }`}
          >
            {task.text}
          </span>
        </div>
        
        <button
          onClick={() => deleteTask(task.id)}
          className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Delete task"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;