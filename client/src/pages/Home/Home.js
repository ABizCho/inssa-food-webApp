import React from 'react';
import './Home.css';
import bibimbap from './bibimbap.jpg';

const Home = () => {
  return (
    <div className='home-container'>
      <section className='Home_section1'>
        <div style={{ display: 'flex' }}>
          <div className='leftSide' style={{ margin: '5.5rem' }}>
            <h1>
              Find out information <br />
              about the food <br />
              with a picture.
            </h1>
            <span>
              Learn about food info
              <br />
              And how to order.
            </span>
            <button className='css-1hw9j7s' tabindex='0' type='button'>
              Get start<span className='MuiTouchRipple-root css-w0pj6f'></span>
            </button>
          </div>
          <div className='rightSide' style={{ margin: '5.5rem' }}>
            <img src={bibimbap} alt='비빔밥' style={{ height: '450px', width: '550px' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
