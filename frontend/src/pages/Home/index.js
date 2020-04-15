import React from 'react'

import './styles.css'

export default function Home() {
    return (
        <div className="home-container">
          <div className='header'>
          
            <h2>Academic System</h2>
            <h4>by: Mario Mendonca, using React and nodejs</h4>

          </div>
          <div className="content">
         
              <button className='button'>Create</button>
              <button className='button'>List</button>
              <button className='button'>Update</button>
              <button className='button'>Delete</button>
           
          </div>
        </div>
    )
}