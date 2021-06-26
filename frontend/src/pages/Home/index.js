import React from 'react';
import './styles.css';
import { Link} from 'react-router-dom';


import título from '../../assets/titulo.svg';
import corrosao from '../../assets/lata.svg';
import fratura from '../../assets/fratura.svg';
import ponto from '../../assets/ponto.svg';



export default function Home(){
    return(
        <div className="home-container">
             <header>
                <img src={título} alt="Titulo"/>
            </header>
            <section>
                <input className="search" placeholder="Busca de materiais"/>
                <button className="button" type="submit">Buscar</button>
            </section>
            <main>
                <div>
                    <img src={corrosao} alt="Corrosão"/>  
                    <Link className="button" to="/corrosao">Corrosão</Link>
                </div>
                <div>
                    <img src={fratura} alt="Fratura"/>  
                    <Link className="button" to="/fratura">Fraturas</Link>
                </div>
                
                <div>
                    <img src={ponto} alt="Ponto"/>  
                    <Link className="button" to="/contribua">Contribua Conosco</Link>
                </div>
            </main>
            <footer>
               
            </footer>
        </div>
    )
}