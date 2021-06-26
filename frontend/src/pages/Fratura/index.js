import React from 'react';
import './styles.css';
import { FiArrowLeft} from 'react-icons/fi';
import { Link} from 'react-router-dom';


import título from '../../assets/titulo.svg';
import cisalhamento from '../../assets/cisalhamento.svg';
import granulada from '../../assets/granulada.svg';
import fratura from '../../assets/fratura.svg';

export default function Fratura(){
    return(
        <div className="all-container">
             <header>
                <img src={título} alt="Titulo"/>
            </header>
            <section>
                <input className="search" placeholder="Busca de materiais"/>
                <button className="button" type="submit">Buscar</button>
                <Link className="fb-link" to="/">
                <FiArrowLeft size={18} color="#4328E7"/>Retornar</Link>
            </section>
            <h1>Fraturas</h1>
                <main>
                    <section>
                        <div>
                        <h2>O que é?</h2>
                        <p>É a separação ou fragmentação de um corpo sólido em duas ou mais partes sob a ação de tensão.</p>
                        <h2>Tipos?</h2>
                        <p><span>Dúctil:</span>acompanha de intensa deformação plástica</p>
                        <p><span>Frágil:</span>não tem deformação plástica</p>
                        </div>
                    </section>
                    <section className="materiais">
                        <div>
                            <h2>Cisalhamento (fratura dúctil)</h2>
                            <img src={cisalhamento} alt="Cisalhamento (fratura dúctil)"/>
                        </div>
                        <div className="paragrafo">
                        <p>Monocristais orientados para ativação de um único sistema de escorregamento.<br></br> 
                        Ocorre quando a seção resistente for “uma linha”.</p>
                        </div>
                    </section> 
                    <section className="materiais">
                    <img src={fratura} alt="Cisalhamento (fratura dúctil)"/>
                    <div className="paragrafo">
                        <p>A evolução da deformação leva à formação da estricção, diminuindo a seção <br></br>resistente até se tornar um ponto, onde ocorre o colapso plástico.</p>
                        </div>
                    </section>
                    

                <section className="materiais">
                    <div className="paragrafo">
                    <p>Ocorre com baixa absorção de energia, com pouca ou nenhuma deformação plástica. <br></br>
                    É o deslocamento de contornos de grão ou interfaces entre fases,<br></br> e pode ser influenciado pela segregação de elementos de liga para o contorno, e por o contorno ser intrinsecamente menos coeso.</p>
                    </div>
                    <div>
                    <h2>Fratura intergranular (Frágil)</h2>
                    <img src={granulada} alt="Frágil"/>
                    </div>
              </section>
            </main>
           
            <footer>
            Retirado de: https://edisciplinas.usp.br/pluginfile.php/4136127/mod_resource/content/1/Fratura.pdf
            </footer>
        </div>
    )
}