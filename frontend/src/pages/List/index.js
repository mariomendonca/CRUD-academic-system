import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiSearch } from 'react-icons/fi'

import './styles.css'
export default function List(){
    //2 parametros, o primeiro 
    useEffect(() => {}, [])
    
    
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
                        <li>
                            <strong>NAME:</strong>
                            <p>Mario</p>

                            <strong>E-MAIL:</strong>
                            <p>1@1</p>

                            <strong>CPF:</strong>
                            <p>45645645645</p>

                            <strong>NATIONALITY:</strong>
                            <p>Braza</p>

                            <strong>NUMBER PHONE:</strong>
                            <p>00000</p>
                        </li>
                        <li>
                            <strong>NAME:</strong>
                            <p>Mario</p>

                            <strong>E-MAIL:</strong>
                            <p>1@1</p>

                            <strong>CPF:</strong>
                            <p>45645645645</p>

                            <strong>NATIONALITY:</strong>
                            <p>Braza</p>

                            <strong>NUMBER PHONE:</strong>
                            <p>00000</p>
                        </li>
                        <li>
                            <strong>NAME:</strong>
                            <p>Mario</p>

                            <strong>E-MAIL:</strong>
                            <p>1@1</p>

                            <strong>CPF:</strong>
                            <p>45645645645</p>

                            <strong>NATIONALITY:</strong>
                            <p>Braza</p>

                            <strong>NUMBER PHONE:</strong>
                            <p>00000</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}