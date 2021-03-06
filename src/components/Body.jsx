import React from 'react'
import imagesMobiles from '../../public/image-mockups.png'

import { 
    ChooseContain,
    ImagesMobiles,
    ContainBody,
    SemiTitle,
    Title, 
    ContaintTitle,
    ChooseEasybank,
    Choose,
    Articles,
    Article,
    ContaintTitleImg,
    ContainImgs
    } from '../styles/styleBody'
import { InviteButton } from '../styles/stylesHeader'
import chooseEasybank from '../chooseEasybank.json'
import article from '../Articles.json'
const Body = () => {
    return (
        <ContainBody>
            <ContaintTitleImg>
                <ContainImgs>
                    <ImagesMobiles src={imagesMobiles} alt="" /> 
                </ContainImgs>
                <ContaintTitle>
                    <Title>Next generation digital banking</Title>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <InviteButton>Request Invite</InviteButton>
                </ContaintTitle>
            </ContaintTitleImg>
            <ChooseEasybank>
                <SemiTitle>Why choose Easybank?</SemiTitle>
                <p>  We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                <ChooseContain>
                    {chooseEasybank.map(({id,img,title,text}) => 
                        <Choose key={id}>
                            <img src={img} alt="" />
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </Choose>
                    )}
                </ChooseContain>
            </ChooseEasybank>
                <SemiTitle> Latest Articles</SemiTitle>
            <Articles>
                {article.map(({id,author,img,text,title}) => 
                    <Article key={id}>
                        <img src={img} alt="" />
                        <div>
                            <p>{author}</p>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                    </Article>
                )}
            </Articles>
        </ContainBody>
    )
}

export default Body
