import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
export default function Create() {
    return(
        <div className="create-container">
            <div className='header'>
        
            <h2>Academic System</h2>
            <h4>by: Mario Mendonça, using React and nodejs</h4>

            </div>

            <div className="content">
            <section>
                <h1>Register</h1>
                <p>Register new students</p>
                <Link className='back-link' to='/'>
                    <FiArrowLeft size={16} color='#B22222'/>
                        back to menu
                </Link>
            </section>
            <form>
                <input placeholder="name"/>
                <input type='email' placeholder="E-mail"/>
                <input placeholder="Cpf"/>
                <input placeholder="Nationality"/>
                <input placeholder="Number Phone"/>
                <button className='RegisterBtn'>Register</button>
            </form>
            </div>
        </div>
    )
}