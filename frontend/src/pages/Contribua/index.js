import React from 'react';
import './styles.css';
import { Link} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';

import título from '../../assets/titulo.svg';


export default function Contribua(){
    return( 
    <div className="register-container">
        <div className="content">
            <header>
                <img src={título} alt="Titulo"/>
            </header>
            <section>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro e contribua</p>
                <Link className="fb-link" to="/"><FiArrowLeft size={18} color="#4328E7"/>Retornar</Link>
            </section>
            <form>
                <input placeholder="Nome completo"/>
                <input type="email" placeholder="E-mail"/>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
        );
    
}