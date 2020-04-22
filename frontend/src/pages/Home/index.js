import React from 'react'
import { useHistory  } from "react-router-dom"
import './styles.css'

export default function Home() {
    const history = useHistory()

    function toCreate(){
      history.push('/create')
    }
    
    function toList(){
      history.push('/list')
    }

    function toUpdate(){
      history.push('/update')
    }

    function toDelete(){
      history.push('/delete')
    }

    return (
        <div className="home-container">
          <div className='header'>
          
            <h2>Academic System</h2>
            <h4>by: Mario Mendonça, using React and nodejs</h4>

          </div>
          <div className="content">
         
              <button className='button' onClick={toCreate} >Create</button>
              <button className='button' onClick={toList}>List</button>
              <button className='button' onClick={toUpdate}>Update</button>
              <button className='button' onClick={toDelete}>Delete</button>
           
          </div>
        </div>
    )
}