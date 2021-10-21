import React,{useState} from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import {GlobalStyles,Opacity} from './styles/styledGlobal'
const App = () => {
    const [close,setClose] = useState(false)
    return (
        <>
            <GlobalStyles />
            <Opacity close={close}/>
            <Header close={close} setClose={setClose}/>
            <Body/>
            <Footer/>
        </>
    )
}

export default App
