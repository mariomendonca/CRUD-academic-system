import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft,FiSearch} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'

export default function Delete(){
    const [cpf, setCpf] = useState('')
    
    async function handleDelete(cpf){
        try {
            await api.delete(`students/${cpf}`)
            alert('Student deleted')
        } catch (err) {
            alert('Cpf not found')
        }
    }
    
    return (
       <div className="delete-container">
				 <div className="header">
					 <h2>Academic System</h2>
					 <h4>by: Mario Mendonça, using React and nodejs</h4>
				 </div>
                 <div className="content">
				 <section>
                <h1>Delete</h1>
                <p>Delete a students</p>
                <Link className='back-link' to='/'>
                    <FiArrowLeft size={16} color='#B22222'/>
                        back to menu
                </Link>
            </section>
            <form onSubmit={() => handleDelete(cpf)}>
                <div className="delete" >
                    <input
                      className='cpfInput'
                      placeholder='Search Cpf'
                      value={cpf}
                      onChange={event => setCpf(event.target.value)}
                    />
                    <button 
                      className='search-btn'
                      type='submit'
                      ><FiSearch/>
                    </button>

                </div>
            </form>
            </div>
            
       </div>
    )
}