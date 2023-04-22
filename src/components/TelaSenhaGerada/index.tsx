import './style.css'
import logo from '../../assets/logo.jpg'
import { UserContext } from '../../context/user'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function TelaSenhaGerada() {
    const { senha, signOut } = useContext(UserContext)

    let navigate = useNavigate(); 

    function copyPassword(){
    
        window.navigator.clipboard.writeText(senha)
        alert("Senha copiada!")

    }

    return (
        <div className='container-principal'>
            <img className="logo" src={logo} alt="Gerador senha logo"/>
            <center><h1>Gerador de senhas</h1></center>
    
            <div id="container-password" className="container-password" onClick={() => {copyPassword()}}>
            <span className="title">Essa é sua senha gerada:</span>
            <span id="password"  className="password">{senha}</span>
            <span className="tooltip">Clique aqui para copiar. 👆</span>
            </div>
            <button  id="button" className="button-nova-senha" onClick={() => {navigate('/gerador')}}>Gerar nova senha?</button>
            <button className="btn-deslogar" onClick={() => {signOut()}}>Deslogar</button>
        </div>
            
    )
}

export default TelaSenhaGerada