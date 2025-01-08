import React, { useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

const Dashboard = () => {
    const [selectedDay, setSelectedDay] = useState('Today');
    const [exercises, setExercises] = useState([
        {
            id: 1,
            name: 'Push-ups',
            reps: '3x10',
            description: 'Place your hands on the ground and push your body up and down.',
            muscles: ['Chest', 'Triceps'],
            completed: false,
        },
        {
            id: 2,
            name: 'Squats',
            reps: '3x15',
            description: 'Stand straight, lower your body, and return to the starting position.',
            muscles: ['Legs', 'Glutes'],
            completed: false,
        },
        {
            id: 3,
            name: 'Squats',
            reps: '3x15',
            description: 'Stand straight, lower your body, and return to the starting position.',
            muscles: ['Legs', 'Glutes'],
            completed: false,
        },
        {
            id: 4,
            name: 'Squats',
            reps: '3x15',
            description: 'Stand straight, lower your body, and return to the starting position.',
            muscles: ['Legs', 'Glutes'],
            completed: false,
        },
        {
            id: 5,
            name: 'Squats',
            reps: '3x15',
            description: 'Stand straight, lower your body, and return to the starting position.',
            muscles: ['Legs', 'Glutes'],
            completed: false,
        },
    ]);

    const handleDayChange = (direction) => {
        if (direction === 'prev') {
            setSelectedDay('Yesterday');
        } else if (direction === 'next') {
            setSelectedDay('Tomorrow');
        } else {
            setSelectedDay('Today');
        }
    };

    const toggleCompletion = (id) => {
        setExercises((prevExercises) =>
            prevExercises.map((exercise) =>
                exercise.id === id ? { ...exercise, completed: !exercise.completed } : exercise
            )
        );
    };

    const completedCount = exercises.filter((exercise) => exercise.completed).length;
    const totalExercises = exercises.length;

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            <div className="flex justify-between items-center p-4">
                <button onClick={() => handleDayChange('prev')} className="text-gray-400">
                    <KeyboardArrowLeftIcon />
                </button>
                <h2 className="text-lg font-bold">{selectedDay}</h2>
                <button onClick={() => handleDayChange('next')} className="text-gray-400">
                    <KeyboardArrowRightIcon />
                </button>
            </div>

            <div className="flex justify-center items-center mb-6 mt-6">
                <div style={{ width: 160, height: 160 }}>
                    <CircularProgressbarWithChildren value={(completedCount / totalExercises) * 100}>
                        <h1 className='text-3xl text-center'>{`${completedCount}/${totalExercises}`}</h1>
                        <h1 className="text-sm text-center text-white">Exercises</h1>
                    </CircularProgressbarWithChildren>
                    
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4">
                {exercises.map((exercise) => (
                    <div
                        key={exercise.id}
                        className="bg-gray-800 p-4 rounded-lg mb-4"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <ThemeProvider theme={theme}>
                                    <Checkbox
                                        checked={exercise.completed}
                                        onChange={() => toggleCompletion(exercise.id)}
                                        sx={{
                                            color: 'white',
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }}
                                    />
                                </ThemeProvider>
                                <h3 className="text-lg font-semibold">{exercise.name}</h3>
                            </div>
                            <span className="text-gray-400">{exercise.reps}</span>
                        </div>
                        <div className="mt-2 text-gray-300">
                            <p>{exercise.description}</p>
                            <p className="text-sm text-gray-500">Muscles: {exercise.muscles.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
