import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavigationBar = () => {
    return (
        <div className="bg-gray-800 p-4 flex justify-around fixed bottom-0 w-full">
            <NavLink to="/kinex/dashboard" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-blue-400' : 'text-gray-400'}`}>
                <HomeIcon />
                <span className="text-xs">Home</span>
            </NavLink>
            <NavLink to="/kinex/calendar" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-blue-400' : 'text-gray-400'}`}>
                <CalendarMonthIcon />
                <span className="text-xs">Calendar</span>
            </NavLink>
            <NavLink to="/kinex/plan" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-blue-400' : 'text-gray-400'}`}>
                <ListAltIcon />
                <span className="text-xs">Plan</span>
            </NavLink>
            <NavLink to="/kinex/profile" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-blue-400' : 'text-gray-400'}`}>
                <AccountCircleIcon />
                <span className="text-xs">Profile</span>
            </NavLink>
        </div>
    );
};

export default NavigationBar;