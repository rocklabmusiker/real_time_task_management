import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { logout } from '../slices/userSlices';

export const ProfileScreen: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: RootState) => state.user.initialuser);
    const isLoggedIn = useSelector((state: RootState) => state.user.isAuthenticated);

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    if (!isLoggedIn) return <div>Please log in</div>;

    return (
        <div className="flex h-screen bg-gray-100">
    
            {/* Sidebar */}
            <div 
                className={`bg-black w-64 p-8 fixed left-0 top-0 h-screen transition-transform duration-500 ease-in-out ${sidebarOpen ? 'transform-none' : '-translate-x-full'} sm:transform-none`}
            >
                <h2 className="text-2xl font-bold text-white mb-6">Profile</h2>
                <ul>
                    <li className="mb-4">
                        <h3 className="text-xl text-white">{user?.username}</h3>
                    </li>
                    <li>
                        <button 
                            onClick={handleLogout} 
                            className="text-red-500 border border-red-500 rounded py-2 px-4 cursor-pointer"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
    
            {/* Content */}
            <div className="flex-1 p-10 text-2xl font-bold ml-0 sm:ml-64 transition-all duration-500 ease-in-out">
                <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="mb-8 px-4 py-2 bg-red-300 text-white rounded mr-5"
                >
                    Click
                </button>
                Welcome to your profile, {user?.username}!
            </div>
    
        </div>
    )
    
    
}
