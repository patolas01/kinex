import React, { useState, useRef } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useSpring, animated } from '@react-spring/web';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import '../styles/Dashboard.css'; // Import the CSS file for gradient effect

// Create a theme for the checkboxes
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
    },
});

// Define the days of the week
const daysOfWeek = [
    { id: 0, name: 'Sunday' },
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
];

const Dashboard = () => {
    const [selectedDayIndex, setSelectedDayIndex] = useState(new Date().getDay());
    const swiperRef = useRef(null);
    const [workouts, setWorkouts] = useState({
        0: [],
        1: [
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
        2: [
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
        3: [],
        4: [
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
        5: [
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
        6: [
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

    const handleDayChange = (swiper) => {
        const newIndex = swiper.realIndex;
        setSelectedDayIndex(newIndex);
    };

    const toggleCompletion = (day, id) => {
        setWorkouts((prevWorkouts) => ({
            ...prevWorkouts,
            [day]: prevWorkouts[day].map((exercise) =>
                exercise.id === id ? { ...exercise, completed: !exercise.completed } : exercise
            ),
        }));
    };

    const selectedDay = daysOfWeek[selectedDayIndex].id;
    const exercises = workouts[selectedDay];
    const completedCount = exercises.filter((exercise) => exercise.completed).length;
    const totalExercises = exercises.length;

    const transitions = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(20px)' },
        config: { duration: 800 },
        // reset: true,
        // onRest: () => {
        //     transitions.opacity.set(1);
        // },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="min-h-screen bg-gray-900 text-white flex flex-col">
                <div className="flex justify-center items-center pt-4 pb-4 relative swiper-container">
                    <button
                        className="absolute left-0 z-10 text-gray-400 p-3"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                        <KeyboardArrowLeftIcon />
                    </button>
                    <div className="swiper-fade-left"></div>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={handleDayChange}
                        initialSlide={selectedDayIndex}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Navigation]}
                        loop={true}
                    >
                        {daysOfWeek.map((day) => (
                            <SwiperSlide key={day.id}>
                                <h2 className="text-lg font-semibold text-center">{day.name}</h2>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-fade-right"></div>
                    <button
                        className="absolute right-0 z-10 text-gray-400 p-3"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                        <KeyboardArrowRightIcon />
                    </button>
                </div>

                <div className="flex justify-center items-center mb-6 mt-6">
                    <div style={{ width: 160, height: 160 }}>
                        <CircularProgressbarWithChildren value={(completedCount / totalExercises) * 100}>
                            <h1 className='text-4xl text-center'>{`${completedCount}/${totalExercises}`}</h1>
                            <h1 className="text-sm text-center text-gray-100">Exercises</h1>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>

                <animated.div style={transitions} className="flex-1 overflow-y-auto px-4">
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
                </animated.div>
            </div>
        </ThemeProvider>
    );
};

export default Dashboard;