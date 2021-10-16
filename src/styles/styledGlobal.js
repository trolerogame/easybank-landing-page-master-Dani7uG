import {createGlobalStyle} from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color:${props => props.close ? 'rgba(0,0,0,.5)' : '#fff'};
        font-family: 'Public Sans', sans-serif;
        transition: all .15s linear;
    }
`