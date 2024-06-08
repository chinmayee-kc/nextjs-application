
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainComponent';


const Home: React.FC = () => {
    return (
        <div className="container">
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default Home;
