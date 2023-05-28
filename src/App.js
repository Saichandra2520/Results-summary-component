import React, { useState } from 'react';
import './index.css';
import data from './data.json';



function App() {
  const [items] = useState(data);
  return (
    <section >
      <div className='App'>
        <div className='left-view'>
          <h3>Your result</h3>
          <div className='circle'>
            <h4>76</h4>
            <p>of 100</p>
          </div>
          <h4>Great</h4>
          <p>You scored higher than 65% of the people who have taken these tests</p>
        </div>
        <div className='right-view'>
          <h3>Summary</h3>
          <div className='topics'>
            {items.map((item, index) => (
              <div className='badge' key={index} style={{ backgroundColor: `${item.color}25`, color: `${item.color}` }}>

                <h4>
                  <img src={item.icon} alt={item.category} />
                  {item.category}
                </h4>
                <p><span>{item.score}</span> /100</p>
              </div>
            ))}
          </div>
          <button>Continue</button>
        </div>
      </div>
    </section>
  )
}

export default App
