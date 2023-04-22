import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/user"
import { signOut } from "firebase/auth"
import './style.css'

function TelaLogin() {

    const { signIn, user, loading } = useContext(UserContext)
    let navigate = useNavigate()

    useEffect(() => {
        if(user) {
            navigate('/gerador')
        }
    }, [user])

    if(loading) {
        return <img className="loading" src="src\assets\loading.png" alt="" />


    }
    return (
        <div>
            <h2>
                <a href="#" onClick={() => {
                    signIn("alancavalcante307@gmail.com", "123456")
                    }}>
                        login
                </a>
            </h2>
        </div>

    )
}

export default TelaLogin