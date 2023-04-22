import './style.css'
import logo from '../../assets/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { UserContext } from '../../context/user';

function TelaPrincipal() {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
    const [valor, setValor] = useState(15);

    const { handleSenha, senha, signOut} = useContext(UserContext)
    

    let navigate = useNavigate(); 


    function gerarPassword (){
        let pass = '';
        for(let i = 0, n = charset.length; i < valor; ++i){
            pass += charset.charAt(Math.floor(Math.random() * n));
        }
        handleSenha(pass)

        navigate('/senhaGerada');
    }

    function handleChange(valor: any){
        console.log(valor)
        setValor(valor)
    }

    return (
        <div className='container-principal'>
            <img className="logo" src={logo} alt="Gerador senha logo"/>
            <center><h1>Gerador de senhas</h1></center>
    
            <div className="container-input">
                <span>Tamanho <span>{valor}</span> caracteres</span>
                <input onChange={(event) => handleChange(event.target.value)} id="slider" className="slider" type="range" min="5" max="25" defaultValue="15" step="1"/>
                <button  id="button" className="button-cta" onClick={() => {gerarPassword()}}>Gerar Senha</button>
            </div>

            <button className="btn-deslogar" onClick={() => {signOut()}}>
                Deslogar
            </button>
        </div>
            
    )
}

export default TelaPrincipal