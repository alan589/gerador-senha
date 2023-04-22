import { createContext, useEffect, useState } from "react";
import { getAuth, 
    signInWithEmailAndPassword, 
    signOut as signOutFirebase, 
    onAuthStateChanged } from "firebase/auth"

const UserContext = createContext({})


const UserProvider = ({children}) => {

    useEffect(() => {
        return onAuthStateChanged(auth, listenAuth)
    }, [])

    const listenAuth = (userState: any) => {
        console.log('listenAuth', userState)
        setUser(auth.currentUser)
        setLoading(false)
    }

    const [couldLogin, setCouldLogin] = useState(false) 
    const [senha, setSenha] = useState('')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth();

    const handleSenha = (novaSenha: any) => {
        console.log('senha alterada!')
        console.log(novaSenha, 'handle senha')
        setSenha(novaSenha)
    }

    const signIn = (email: string, senha: string) => {
        console.log('xxx', email, senha)
        setLoading(true)
        signInWithEmailAndPassword(auth, email, senha).then((userCredential) => {
            console.log(userCredential)
            setCouldLogin(true);
            
        }).catch((error) => {
            console.log("error: ", error)
            setLoading(false)
        })
    }

    const signOut = () => {
        console.log('sai!')
        setLoading(true)
        signOutFirebase(auth).then(() => {
            console.log("deslogado com sucesso!")
        }).catch((error) => {
            console.log("error: ", error)
            setLoading(false)
        })
    }

    return (
        <UserContext.Provider value={{couldLogin, senha, handleSenha, signIn, signOut, user, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserProvider
}