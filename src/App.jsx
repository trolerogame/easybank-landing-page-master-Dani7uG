import React,{useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {GlobalStyles} from './styles/styledGlobal'
const App = () => {
    const [close,setClose] = useState(false)
    return (
        <>
            <GlobalStyles  close={close} />
            <Header close={close} setClose={setClose}/>
            <Footer/>
        </>
    )
}

export default App
