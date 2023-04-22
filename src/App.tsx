import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import TelaPrincipal from './components/TelaPrincipal'
import TelaSenhaGerada from './components/TelaSenhaGerada'
import ProtectedRoutes from './components/ProtectedRoutes'
import TelaLogin from './components/TelaLogin'
import { UserProvider } from './context/user'


function App() {

  return (
    <>
      <UserProvider>
    
        <BrowserRouter>
            <Routes>
                  <Route path='login' element={<TelaLogin/>}/>
                  <Route path='/' element={<Navigate to={'/login'}/>}/>
                  <Route element={<ProtectedRoutes/>}>
                    <Route path='senhaGerada' element={<TelaSenhaGerada/>}/>
                    <Route path='gerador' element={<TelaPrincipal/>}/>
                  </Route>
            </Routes>
        </BrowserRouter>

      </UserProvider>
    </>
  )
}

export default App
