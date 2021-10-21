import{s as n,R as e,W as p,r as u,a as h}from"./vendor.3fac83f1.js";const x=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}};x();const f=n.header`
    display:flex;
    justify-content:space-between;
    align-items: center;
    position:relative;
    background-color:#fff;
    padding:0 20px;
    height:70px;
`,y=n.button`
    border:none;
    outline:none;
    background:none;
    padding:5px;
    cursor:pointer;
    img{
        width:18px;
        height: 18px;
    }
    @media (min-width:768px){
        display: none;
    }
`,m=n.button`
    
    font-weight: 700;
    text-align: center;
    border:none;
    outline: none;
    background: linear-gradient(90deg, hsl(136, 65%, 51%) 0%, hsl(192, 70%, 51%) 80%);
    border-radius: 30px;
    width: 170px;
    height: 40px;
    color:#fff;
    cursor:pointer;
    display:${t=>t.response?"block":"none"};
    @media (min-width:768px){
        display: block;
        margin:20px;
    }
`,v=n.div`
    opacity:${t=>t.close?1:0};
    display:${t=>t.close?"flex":"none"};
    flex-direction:column;
    align-items:center;
    position:absolute;
    bottom:-290px;
    width: calc(100% - 40px);
    background:#fff;
    padding:5px 0;
    border-radius: 5px;
    transition: all .15s linear;
    @media (min-width: 768px) {
        display:flex;
        opacity: 1;
        position: static;
        flex-direction: row;
        justify-content: center;
        p{
            margin:0 20px;
        }
    }
`;var b="/easybank-landing-page-master-Dani7uG/assets/icon-hamburger.df221efd.svg",w="/easybank-landing-page-master-Dani7uG/assets/icon-close.8bb82c8b.svg",d=({color:t})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"139",height:"20"},e.createElement("defs",null,e.createElement("linearGradient",{id:"a",x1:"72.195%",x2:"17.503%",y1:"0%",y2:"100%"},e.createElement("stop",{offset:"0%",stopColor:"#33D35E"}),e.createElement("stop",{offset:"100%",stopColor:"#2AB6D9"}))),e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{fill:t,fillRule:"nonzero",d:"M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"}),e.createElement("g",{fill:"url(#a)"},e.createElement("path",{d:"M10.802 0L0 19.704h5.986L16.789 0z"}),e.createElement("path",{opacity:".5",d:"M18.171 0L7.368 19.704h5.986L24.157 0z"}),e.createElement("path",{opacity:".15",d:"M25.539 0L14.737 19.704h5.986L31.525 0z"}))));const E=({close:t,setClose:o})=>{const i=["Home","About","Contact","Blog","Careers"];return e.createElement(f,null,e.createElement(d,{color:"#2D314D"}),e.createElement(v,{close:t},i.map(r=>e.createElement("p",{key:r},r))),e.createElement(y,{onClick:()=>o(!t)},e.createElement("img",{src:t?w:b,alt:""})),e.createElement(m,null,"Request Invite"))};var k="/easybank-landing-page-master-Dani7uG/assets/image-mockups.78150325.png",z="/easybank-landing-page-master-Dani7uG/assets/bg-intro-desktop.e83f7e79.svg",C="/easybank-landing-page-master-Dani7uG/assets/bg-intro-mobile.c1d62a7a.svg";const I=n.div`
    position: relative;
    background-image: url(${C});
    background-size:cover;
    height: 460px;
    z-index:-2;
    @media (min-width:768px){
        background-image: url(${z});
        width:800px;
        left:-50px;
    }
`,F=n.img`
    width:100%;
    object-fit:cover;
    position: absolute;
    top:-80px;
    z-index:-1;
    @media (min-width:768px){
        width:800px;
    }
`,B=n.main`
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
`,L=n.div`
    @media (min-width:768px){
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
`;n.div`
    @media (min-width:768px){
        width:100%;
        margin:0 100px;
        text-align: start;
    }
`;const g=n.h2`
    margin:20px 70px;
    font-size:1.9em;
`,M=n.h1`
    margin:20px 40px;
    font-size: 2.4em;
`,A=n.div`
    p{
        text-align:start;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
`,R=n.div`
    background-color:hsl(220, 16%, 96%);
    padding:50px 0;
    margin:50px 0;
    @media (min-width:768px){
        padding: 100px 0;
    }

`,H=n.div`
    margin-top:20px;
    @media (min-width:768px){
        display: flex;
        margin:0 100px;
    }
`,O=n.div`
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
`,T=n.div`
    margin-bottom: 40px;
    @media (min-width:950px){
        display: flex;
        margin:50px 100px;
    }
`,j=n.div`
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
`;var D=[{id:1,img:"../images/icon-online.svg",title:"Online Banking",text:"  Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."},{id:2,img:"../images/icon-budgeting.svg",title:"Simple Budgeting",text:"  See exactly where your money goes each month. Receive notifications when you\u2019re close to hitting your limits."},{id:3,img:"../images/icon-onboarding.svg",title:"Fast Onboarding",text:"We don\u2019t do branches. Open your account in minutes online and start taking control of your finances right away."},{id:4,img:"../images/icon-api.svg",title:"Open API",text:"  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}],S=[{id:1,img:"../images/image-currency.jpg",author:"By Claire Robinson",title:"Receive money in any currency with no fees",text:"  The world is getting smaller and we\u2019re becoming more mobile. So why should you be forced to only receive money in a single \u2026"},{id:2,img:"../images/image-restaurant.jpg",author:"By Wilson Hutton",title:"Treat yourself without worrying about money",text:"  Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you \u2026"},{id:3,img:"../images/image-plane.jpg",author:"By Wilson Hutton",title:"Take your Easybank card wherever you go",text:"  We want you to enjoy your travels. This is why we don\u2019t charge any fees on purchases while you\u2019re abroad. We\u2019ll even show you \u2026"},{id:4,img:"../images/image-confetti.jpg",author:"By Claire Robinson",title:"Our invite-only Beta accounts are now live!",text:"  After a lot of hard work by the whole team, we\u2019re excited to launch our closed beta. It\u2019s easy to request an invite through the site ..."}];const V=()=>e.createElement(B,null,e.createElement(L,null,e.createElement(I,null,e.createElement(F,{src:k,alt:""})),e.createElement(A,null,e.createElement(M,null,"Next generation digital banking"),e.createElement("p",null,"Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."),e.createElement(m,null,"Request Invite"))),e.createElement(R,null,e.createElement(g,null,"Why choose Easybank?"),e.createElement("p",null,"  We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."),e.createElement(H,null,D.map(({id:t,img:o,title:i,text:r})=>e.createElement(O,{key:t},e.createElement("img",{src:o,alt:""}),e.createElement("h3",null,i),e.createElement("p",null,r))))),e.createElement(g,null," Latest Articles"),e.createElement(T,null,S.map(({id:t,author:o,img:i,text:r,title:a})=>e.createElement(j,{key:t},e.createElement("img",{src:i,alt:""}),e.createElement("div",null,e.createElement("p",null,o),e.createElement("h3",null,a),e.createElement("p",null,r)))))),$=n.footer`
    background:hsl(233, 26%, 24%);
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:30px 0;

    p{
        color:hsl(233, 8%, 62%)
    }
    @media (min-width:768px){
        flex-direction: row;
        justify-content:space-around;
        align-items:center;
    }
`,W=n.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    a{
        color:#fff;
        margin:7px 0;
        text-decoration:none;
        cursor:pointer;
        transition: all 0.1s linear;
    }
    a:hover{
        color:hsl(136, 65%, 51%);
    }
    @media (min-width:768px){
        flex-direction: row;
    }
`,G=n.div`
    margin:20px 0;
    button{
        margin:0 3px;
        border:none;
        outline:none;
        background:none;
        cursor:pointer;
        transition:all 0.1 linear;
    }
    button:hover >svg path{
        fill:hsl(136, 65%, 51%);
    }
`,s=n.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    @media (min-width: 768px) {
        align-items:${t=>t.item?"start":"center"};
        margin:${t=>t.item?"0 60px":"15px"};
    }
`;var P=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20"},e.createElement("path",{fill:"#FFF",d:"M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"})),q=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"20"},e.createElement("path",{fill:"#FFF",d:"M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"})),N=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"18"},e.createElement("path",{fill:"#FFF",d:"M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"})),Y=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20"},e.createElement("path",{fill:"#FFF",d:"M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"})),K=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"20"},e.createElement("path",{fill:"#FFF",d:"M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"}));const U=e.memo(()=>{const t=["About Us","Contact","Blog","Careers","Support","Privacy Policy"],o=[P,K,N,Y,q];return e.createElement($,null,e.createElement(s,{space:!0},e.createElement(d,{color:"white"}),e.createElement(G,null,o.map((i,r)=>e.createElement("button",{key:r},e.createElement(i,null))))),e.createElement(W,null,e.createElement(s,{item:!0},t.slice(0,3).map(i=>e.createElement("a",{href:`#${i}`,key:i},i))),e.createElement(s,{item:!0},t.slice(3,t.length).map(i=>e.createElement("a",{href:`#${i}`,key:i},i)))),e.createElement(s,null,e.createElement(m,null,"Request Invite"),e.createElement("p",null,"@easybank. All Rights Reserved")))}),J=p`
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
`,Q=n.div`
    display: ${t=>t.close?"block":"none"};
    position: relative;
    z-index:1000;
    background-color:rgba(0,0,0,.5);
`,X=()=>{const[t,o]=u.exports.useState(!1);return e.createElement(e.Fragment,null,e.createElement(J,null),e.createElement(Q,{close:t}),e.createElement(E,{close:t,setClose:o}),e.createElement(V,null),e.createElement(U,null))};h.render(e.createElement(X,null),document.getElementById("root"));
