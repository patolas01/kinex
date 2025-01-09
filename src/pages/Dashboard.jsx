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

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Dashboard = () => {
    const [selectedDayIndex, setSelectedDayIndex] = useState(new Date().getDay());
    const [workouts, setWorkouts] = useState({
        Sunday: [],
        Monday: [
            {
                id: 1,
                name: 'Push-ups',
                reps: '3x10',
                description: 'Place your hands on the ground and push your body up and down. Works your chest, triceps, and shoulders.',
                muscles: ['Chest', 'Triceps', 'Shoulders'],
                completed: false,
            },
            {
                id: 2,
                name: 'Bodyweight Squats',
                reps: '3x15',
                description: 'Stand with your feet shoulder-width apart, lower your body, and return to the starting position. Focuses on legs, glutes, and core.',
                muscles: ['Legs', 'Glutes', 'Core'],
                completed: false,
            },
            {
                id: 3,
                name: 'Plank',
                reps: '3x30s',
                description: 'Hold a plank position on your elbows with your core engaged. Strengthens your core and shoulders.',
                muscles: ['Core', 'Shoulders'],
                completed: false,
            },
            {
                id: 4,
                name: 'Glute Bridges',
                reps: '3x12',
                description: 'Lie on your back, lift your hips, and squeeze your glutes. Targets glutes, hamstrings, and lower back.',
                muscles: ['Glutes', 'Hamstrings', 'Lower Back'],
                completed: false,
            },
        ],
        Tuesday: [
            {
                id: 5,
                name: 'Push-ups',
                reps: '3x10',
                description: 'Place your hands on the ground and push your body up and down. Works your chest, triceps, and shoulders.',
                muscles: ['Chest', 'Triceps', 'Shoulders'],
                completed: false,
            },
            {
                id: 6,
                name: 'Bodyweight Squats',
                reps: '3x15',
                description: 'Stand with your feet shoulder-width apart, lower your body, and return to the starting position.',
                muscles: ['Legs', 'Glutes', 'Core'],
                completed: false,
            },
            {
                id: 7,
                name: 'Jumping Jacks',
                reps: '3x20',
                description: 'Jump while spreading your arms and legs, then return to the starting position.',
                muscles: ['Full Body', 'Cardio'],
                completed: false,
            },
        ],
        Wednesday: [],
        Thursday: [
            {
                id: 8,
                name: 'Burpees',
                reps: '3x10',
                description: 'Combine a squat, push-up, and jump into one explosive movement.',
                muscles: ['Full Body', 'Cardio'],
                completed: false,
            },
            {
                id: 9,
                name: 'Mountain Climbers',
                reps: '3x30s',
                description: 'Start in a push-up position and bring your knees toward your chest alternately.',
                muscles: ['Core', 'Shoulders', 'Cardio'],
                completed: false,
            },
            {
                id: 10,
                name: 'Dumbbell Rows (or alternative)',
                reps: '3x10 each side',
                description: 'Use a dumbbell or any object with weight and perform a rowing motion.',
                muscles: ['Back', 'Biceps'],
                completed: false,
            },
        ],
        Friday: [
            {
                id: 11,
                name: 'Push-ups',
                reps: '3x10',
                description: 'Place your hands on the ground and push your body up and down. Works your chest, triceps, and shoulders.',
                muscles: ['Chest', 'Triceps', 'Shoulders'],
                completed: false,
            },
            {
                id: 12,
                name: 'Bodyweight Squats',
                reps: '3x15',
                description: 'Stand with your feet shoulder-width apart, lower your body, and return to the starting position.',
                muscles: ['Legs', 'Glutes', 'Core'],
                completed: false,
            },
            {
                id: 13,
                name: 'Glute Bridges',
                reps: '3x12',
                description: 'Lie on your back, lift your hips, and squeeze your glutes.',
                muscles: ['Glutes', 'Hamstrings', 'Lower Back'],
                completed: false,
            },
            {
                id: 14,
                name: 'Plank',
                reps: '3x30s',
                description: 'Hold a plank position on your elbows with your core engaged.',
                muscles: ['Core', 'Shoulders'],
                completed: false,
            },
        ],
        Saturday: [
            {
                id: 15,
                name: 'Stretching Routine',
                reps: '5-10 minutes',
                description: 'Perform stretches for the hamstrings, quads, shoulders, chest, and back.',
                muscles: ['Full Body'],
                completed: false,
            },
            {
                id: 16,
                name: 'Light Cardio',
                reps: '10-15 minutes',
                description: 'Go for a light jog, cycle, or brisk walk.',
                muscles: ['Cardio'],
                completed: false,
            },
        ],
    });


    const handleDayChange = (direction) => {
        if (direction === 'prev') {
            setSelectedDayIndex((prevIndex) => (prevIndex === 0 ? 6 : prevIndex - 1));
        } else if (direction === 'next') {
            setSelectedDayIndex((prevIndex) => (prevIndex === 6 ? 0 : prevIndex + 1));
        }
    };

    const toggleCompletion = (day, id) => {
        setWorkouts((prevWorkouts) => ({
            ...prevWorkouts,
            [day]: prevWorkouts[day].map((exercise) =>
                exercise.id === id ? { ...exercise, completed: !exercise.completed } : exercise
            ),
        }));
    };

    const selectedDay = daysOfWeek[selectedDayIndex];
    const exercises = workouts[selectedDay];
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
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center">
                                <ThemeProvider theme={theme}>
                                    <Checkbox
                                        checked={exercise.completed}
                                        onChange={() => toggleCompletion(selectedDay, exercise.id)}
                                        sx={{
                                            color: 'white',
                                            padding: 0,
                                            marginRight: '0.5rem',
                                            '&.Mui-checked': {
                                                color: 'white',
                                            },
                                        }}
                                    />
                                </ThemeProvider>
                                <h3 className="text-lg font-semibold">{exercise.name}</h3>
                            </div>
                            <span className="text-gray-400 font-semibold">{exercise.reps}</span>
                        </div>
                        <div className="mt-2 text-gray-300">
                            <p className='text-md text-gray-300 mb-3'>{exercise.description}</p>
                            <p className="text-sm text-gray-500 mt-6">Muscles: {exercise.muscles.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
