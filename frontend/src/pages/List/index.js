import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiSearch } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
export default function List(){
    const [students, setStudents] = useState([])
    
    //2 parametros, o primeiro qual funçao sera executada e o segundo é quando sera executada
    useEffect(() => {
        api.get('students').then(response => {
            setStudents(response.data)
        })
    }, [])
    
    
    return (
        <div className="list-container">
            <div className="header">
                <h2>Academic System</h2>
                <h4>by: Mario Mendonça, using React and nodejs</h4>
            </div>
            
            <div className="content">

                <section>

                        <Link className='back-link-list' to='/'>
                            <FiArrowLeft size={20} color='#B22222'/>
                                back to menu
                        </Link>
                    
                        <div className='search'>
                        <input 
                          placeholder="Search Cpf"
                          className='cpfInput'
                        />
                        <button className='search-btn'><FiSearch/></button>
                        </div>
                </section>
                <div className="list">
                    <h2 className='title-list'>Students registered</h2>
                    
                    <ul>
                        {students.map(student => (
                            <li key={student.id}>
                                <strong>NAME:</strong>
                                <p>{student.name}:</p>

                                <strong>E-MAIL:</strong>
                                <p>{student.email}:</p>

                                <strong>CPF:</strong>
                                <p>{student.cpf}:</p>

                                <strong>NATIONALITY:</strong>
                                <p>{student.nationality}:</p>

                                <strong>NUMBER PHONE:</strong>
                                <p>{student.numberPhone}:</p>                                
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        
    )
}