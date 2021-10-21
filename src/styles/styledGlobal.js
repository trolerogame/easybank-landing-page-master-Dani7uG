import styled,{createGlobalStyle} from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color:hsl(0, 0%, 99%);
        font-family: 'Public Sans', sans-serif;
        transition: all .15s linear;
        position: relative;
        z-index: -1;
    }
`

export const Opacity = styled.div`
    display: ${props => props.close ? 'block' : 'none'};
    position: relative;
    z-index:1000;
    background-color:rgba(0,0,0,.5);
`