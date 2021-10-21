import styled from 'styled-components'
import ImageDesktop from '../../images/bg-intro-desktop.svg'
import ImageMobile from '../../images/bg-intro-mobile.svg'
export const ContainImgs = styled.div`
    position: relative;
    background-image: url(${ImageMobile});
    background-size:cover;
    height: 460px;
    z-index:-2;
    @media (min-width:768px){
        background-image: url(${ImageDesktop});
        width:800px;
        left:-50px;
    }
`

export const ImagesMobiles = styled.img`
    width:100%;
    object-fit:cover;
    position: absolute;
    top:-80px;
    z-index:-1;
    @media (min-width:768px){
        width:800px;
    }
`

export const ContainBody = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    h1,h2{
        color:hsl(233, 26%, 24%);
        font-weight: 300;
        text-align:center;
    }
    p{
        text-align:center;
        margin:0 20px;
        color:hsl(233, 8%, 62%)
    }
    @media (min-width:768px){
        h2,p{
            text-align:start;
            margin:0 100px;
        }
        h1{
            font-size: 50px;
            text-align:start;
            margin:20px 100px;

        }
    }
`
export const ContaintTitleImg = styled.div`
    @media (min-width:768px){
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
`

export const ContainSemititle = styled.div`
    @media (min-width:768px){
        width:100%;
        margin:0 100px;
        text-align: start;
    }
`
export const SemiTitle = styled.h2`
    margin:20px 70px;
    font-size:1.9em;
`

export const Title = styled.h1`
    margin:20px 40px;
    font-size: 2.4em;
`
export const ContaintTitle = styled.div`
    p{
        text-align:start;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
`

export const  ChooseEasybank = styled.div`
    background-color:hsl(220, 16%, 96%);
    padding:50px 0;
    margin:50px 0;
    @media (min-width:768px){
        padding: 100px 0;
    }

`

export const ChooseContain = styled.div`
    margin-top:20px;
    @media (min-width:768px){
        display: flex;
        margin:0 100px;
    }
`

export const Choose = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 20px;
    h3{
        font-weight: 400;
        cursor:pointer;
        transition: all .1s linear;
    }
    h3:hover{
        color:hsl(136, 65%, 51%);
    }
    @media (min-width:768px){
        align-items:start;
        p{
            margin:0;
            text-align:start;
        }
    }
`

export const Articles = styled.div`
    margin-bottom: 40px;
    @media (min-width:950px){
        display: flex;
        margin:50px 100px;
    }
`

export const Article = styled.div`
    margin:20px 0 100px 0;
    img{
        width:100%;
        object-fit:cover; 
        border-top-left-radius:7px;
        border-top-right-radius:7px;
    }
    div{
        margin:25px 35px;
        p{
            text-align: start;
            margin:0;
        }
        h3{
            color:hsl(233, 26%, 24%);
            font-weight: 400;
            margin:10px 0;
        }
    }
    @media (min-width:900px){
        div{
            margin:25px 1rem;
        }
        margin:0 20px;
        img{
            width:100%;
            height:220px;
        }
    }
`