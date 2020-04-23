import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import './styles.css'

export default function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [nationality, setNationality] = useState('')
    const [numberPhone, setNumberPhone] = useState('')
    
    //responsavel por fazer o cadastro do usuario
    async function handleRegister(event){ 
        event.preventDefault() //prevenir o comportamento padrao (spa)
        
        const data = {
            name,
            email,
            cpf,
            nationality,
            numberPhone
        }

         try {
            //enviando para o database
            await api.post('students', data)
            alert('user sucessfully registered')
            console.log('foi')
        } catch (err) {
            alert('something went wrong, try again')
        }
    }

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
            <form onSubmit={handleRegister}>
                <input 
                  placeholder="name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
                <input 
                  type='email' 
                  placeholder="E-mail"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
                <input 
                  placeholder="Cpf"
                  value={cpf}
                  onChange={event => setCpf(event.target.value)}
                />
                <input 
                  placeholder="Nationality"
                  value={ nationality }
                  onChange={ event => setNationality(event.target.value)}
                />
                <input 
                  placeholder="Number Phone"
                  value={ numberPhone }
                  onChange={ event => setNumberPhone(event.target.value)}
                />
                <button className='RegisterBtn' type='submit'>Register</button>
            </form>
            </div>
        </div>
    )
}