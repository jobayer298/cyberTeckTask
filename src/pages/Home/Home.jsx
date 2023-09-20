import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from './Content';

const Home = () => {
    return (
      <div className="flex">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    );
};

export default Home;