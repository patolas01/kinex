import React, { useState } from 'react';

const Dashboard = () => {
    const [expandedDay, setExpandedDay] = useState(null);

    const plans = {
        Monday: [
            { title: 'Arm Workout', reps: '3 sets of 12', description: 'Bicep curls, Tricep dips' },
            { title: 'Shoulder Workout', reps: '3 sets of 15', description: 'Shoulder press, Lateral raises' },
        ],
        // ...other days...
    };

    const toggleExpand = (day) => {
        setExpandedDay(expandedDay === day ? null : day);
    };

    return (
        <div className="p-4">
            {Object.entries(plans).map(([day, exercises]) => (
                <div key={day} className="border rounded-lg p-4 mb-4 shadow-lg">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(day)}>
                        <h2 className="text-xl font-bold">{day}</h2>
                        <span>{expandedDay === day ? '-' : '+'}</span>
                    </div>
                    {expandedDay === day && (
                        <div className="mt-4">
                            {exercises.map((exercise, index) => (
                                <div key={index} className="border-b py-2">
                                    <div className="flex justify-between">
                                        <span>{exercise.title}</span>
                                        <span>{exercise.reps}</span>
                                    </div>
                                    <p className="text-sm mt-2">{exercise.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Dashboard;