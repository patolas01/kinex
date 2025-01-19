import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Calendar.css';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';

// Calendar imports
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// Add necessary plugins to dayjs
dayjs.extend(advancedFormat);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);

// Create a theme for the checkboxes
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
    },
});

const Calendar = () => {
    const [date, setDate] = useState(dayjs());

    return (
        <ThemeProvider theme={theme}>
            <div>
                <div className="calendar-header text-lg bg-gray-900 p-4">
                    <h1 className='font-semibold text-center'>Calendar</h1>
                </div>
                <div className='calendar-container pt-6'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            value={date}
                            onChange={(newDate) => {
                                setDate(newDate);
                            }}
                        >
                        </DateCalendar>
                    </LocalizationProvider>
                </div>

                <hr className="my-4 border-t border-gray-700" />

                <div className='calendar-stats space-y-12'>
                    <div id="time-since-last-workout" className="stats-item p-4">
                        <h2 className="text-xl font-semibold">Time since last workout</h2>
                        <p className="text-3xl text-gray-300">1:25:35</p>
                    </div>
                    <div id="average-workout-duration" className="stats-item p-4">
                        <h2 className="text-xl font-semibold">Average workout duration</h2>
                        <p className="text-3xl text-gray-300">45:21</p>
                    </div>
                    <div id="days-completed" className="stats-item p-4">
                        <h2 className="text-xl font-semibold">Days completed</h2>
                        <p className="text-3xl text-gray-300">15</p>
                    </div>
                    <div id="weeks-completed" className="stats-item p-4 pb-16">
                        <h2 className="text-xl font-semibold">Weeks completed</h2>
                        <p className="text-3xl text-gray-300">2</p>
                    </div>
                </div>
            </div>
        </ThemeProvider >
    );
};

export default Calendar;