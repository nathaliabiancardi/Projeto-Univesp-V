import React from 'react';
import './styles.css';
import { FiArrowLeft} from 'react-icons/fi';
import { Link} from 'react-router-dom';


import título from '../../assets/titulo.svg';
import metalica from '../../assets/metalica.svg';
import uniforme from '../../assets/uniforme.svg';

export default function Corrosao(){
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
            <h1>Corrosão</h1>
                <main>
                    <section>
                        <div>
                        <h2>O que é?</h2>
                        <p>Deterioração de um material por ação química ou eletroquímica do meio ambiente, aliada ou não a esforços mecânicos, tornando-o impróprio para o uso.</p>
                        <h2>Principais causas?</h2>
                        <p>Atmosfera (poeira, poluição, umidade, gases: CO, SO2, H2S)</p>
                        <p>Água (bactérias dispersas: corrosão microbiológica, chuva ácida)</p>
                        <p>Solo (acidez e porosidade)</p>
                        <p>Produtos químicos</p>
                        </div>
                    </section>
                    <section className="materiais">
                        <div>
                            <h2>Corrosão Metálica</h2>
                            <img src={metalica} alt="Corrosão Metalíca"/>
                        </div>
                        <div className="paragrafo">
                        <p>Deterioração e perda de material devido à ação química ou eletroquímica do meio ambiente, que pode estar ou não aliada a esforços mecânicos. <br></br>
                        Os metais reagem com o meio produzindo compostos semelhantes aos encontrados na natureza. A corrosão funciona como o inverso dos processos metalúrgicos.</p>
                        </div>
                    </section> 
                    

                <section className="materiais">
                    <div className="paragrafo">
                    <p>É o tipo mais comum e se caracteriza por se apresentar sobre toda a superfície da peça.<br></br>
                    Exemplo: a formação de ferrugem no aço pode ser considerada como corrosão uniforme.</p>
                    </div>
                    <div>
                    <h2>Corrosão Uniforme</h2>
                    <img src={uniforme} alt="Corrosão Uniforme"/>
                    </div>
              </section>
            </main>
           
            <footer>
            <p>Retirado de: https://edisciplinas.usp.br/pluginfile.php/4919257/mod_resource/content/0/Aula%204%20Corros%C3%A3o.pdf</p>
            </footer>
        </div>
    )
}