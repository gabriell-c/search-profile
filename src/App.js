import './App.css';
import React, { useState } from 'react';
import * as S from './style'
import Loading from './components/Loading'
import Button from '@mui/material/Button';

function App() {

    const [getValue, setGetValue] = useState('');
    const [repos, setRepos] = useState([]);
    const [showRepos, setShowRepos] = useState(false);
    const [linkSite, setLinkSite] = useState();
    const [linkUser, setLinkUser] = useState();
    const [isHovering, setIsHovering] = useState(false);
    const [showInfos, setShowInfos] = useState(false);
    const [res, setRes] = useState(true);
    const [loading, setLoading] =useState(false);
    const [openModal, setOpenModal] = useState(false);
    const titleText = document.getElementById('headerUser')

    const handleResultRepos=()=>{
        fetch(`https://api.github.com/users/${getValue}/repos`)
        .then((respons)=>respons.json())
        .then((data)=>{
            setRepos(data)
        })
        setShowRepos(true)
    }

    const handleResult=()=>{
        setLoading(true)
        fetch(`https://api.github.com/users/${getValue}`)
        .then((response)=>response.json())
        .then((data)=>{
            titleText.innerText = (`@${data.login}`)
            document.getElementById("headerName").innerText = data.name
            document.getElementById("companyText").innerText = data.company
            document.getElementById("siteText").innerText = data.blog
            document.getElementById("locationText").innerText = data.location
            document.getElementById("emailText").innerText = data.email
            document.getElementById("bioText").innerText = data.bio
            document.getElementById("twitterText").innerText = data.twitter_username
            document.getElementById("countText").innerText = ((new Date(data.created_at).getDate()+1)+'/'+(new Date(data.created_at).getMonth()+1)+'/'+(new Date(data.created_at).getFullYear()))
            setLinkSite(data.blog)
            setLinkUser(data.html_url)
            if(data.login === undefined){
                setOpenModal(true)
                setShowInfos(false)
            }else{
                setOpenModal(false)
                setShowInfos(true)
            }

            if(data.Company === undefined){
                document.getElementById("Company").style.display = 'none'
                document.getElementById("Company").style.margin = '0'
            }else{
                document.getElementById("Company").style.display = 'flex'
                document.getElementById("Company").style.margin = '.5em 0'
            }

            if(data.name === null){
                document.getElementById("headerName").style.display = 'none'
            }else{
                document.getElementById("headerName").style.display = 'flex'
            }

            if(data.blog === ''){
                document.getElementById("Site").style.display = 'none'
                document.getElementById("Site").style.margin = ' 0'
            }else{
                document.getElementById("Site").style.display = 'flex'
                document.getElementById("Site").style.margin = '.5em 0'
            }

            if(data.location === null){
                document.getElementById("Location").style.display = 'none'
                document.getElementById("Location").style.margin = '0'
            }else{
                document.getElementById("Location").style.display = 'flex'
                document.getElementById("Location").style.margin = '.5em 0'
            }

            if(data.email === null ){
                document.getElementById("Email").style.display = 'none'
                document.getElementById("Email").style.margin = '0'
            }else{
                document.getElementById("Email").style.display = 'flex'
                document.getElementById("Email").style.margin = '.5em 0'
            }

            if(data.bio === null){
                document.getElementById("Bio").style.display = 'none'
                document.getElementById("Bio").style.margin = ' 0'
            }else{
                document.getElementById("Bio").style.display = 'flex'
                document.getElementById("Bio").style.margin = '.5em 0'
            }

            if(data.twitter_username !== null){
                document.getElementById('twitterText').style.display = 'flex'
                document.getElementById("Twitter").style.display = 'flex'
                document.getElementById("Twitter").style.margin = '.5em'
            }else{
                document.getElementById('twitterText').style.display = 'none'
                document.getElementById("Twitter").style.display = 'none'
                document.getElementById("Twitter").style.margin = '0'
            }

            if(data.created_at === undefined){
                document.getElementById("CountDate").style.display = 'none'
                document.getElementById("CountDate").style.margin = '0'
            }else{
                document.getElementById("CountDate").style.display = 'flex'
                document.getElementById("CountDate").style.margin = '.5em 0'
            }

            setRes(data.avatar_url)
        })
        .catch(()=>setOpenModal(true))
        setTimeout(()=>{
            setLoading(false)
        },700)
    }

    const handleCloseModal=()=>{
        setOpenModal(false)
    }

    const handleShowRepos=()=>{
        setShowRepos(false)
    }

    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleTwoFunc=()=>{
        handleResult()
        handleTimeOut()
        
    }

    const handleTimeOut=()=>{
        setTimeout(()=>handleShowRepos(), 1000)
    }

  return (
    <S.All>
        <S.ModalContainer style={{display: openModal ? 'flex' : 'none'}}>
            <S.Modal  onClick={handleCloseModal}/>
            <S.Box>
                <h2>Usuário não encontrado!</h2>
                <Button onClick={handleCloseModal}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                variant="contained"
                style={{transiton: 'all ease-in-out 3s', background: isHovering ? '#c20017' : '#ff001e'}}>Ok</Button>
            </S.Box>
        </S.ModalContainer>
        <S.Container>
            <S.Input type='text' onChange={(e)=>setGetValue(e.target.value)} placeholder='Digite um usuário...' />
            
            <S.SearchButton onClick={handleTwoFunc}>Pesquisar</S.SearchButton>
            {loading &&
                <Loading />
            }
            <S.ContainerResult style={{display: showInfos ? 'flex' : 'none'}}>
                <S.InfoHeader>
                    <a href={linkUser} rel="noreferrer" target="_blank" ><img alt='user-img' id='imgage' src={res}/></a>
                    <S.InfoHeaderTexts>
                        <h1 id='headerName'>...</h1>
                        <p id='headerUser'>...</p>
                    </S.InfoHeaderTexts>
                </S.InfoHeader>
                <S.InfoProfile>
                    <S.InfoItem id='Bio'>
                    <p id='bioText'></p>
                    </S.InfoItem>
                    <S.InfoItem id='Company'>
                        <S.Icon src='../assets/suitcase.png' />
                        <p id='companyText'></p>
                    </S.InfoItem>
                    <S.InfoItem id='Site' >
                        <S.Icon src='../assets/internet.png' />
                        <a href={linkSite} rel="noreferrer" target="_blank"><p id='siteText'></p></a>
                    </S.InfoItem>
                    <S.InfoItem id='Location' >
                        <S.Icon src='../assets/pin.png' />
                        <p id='locationText'></p>
                    </S.InfoItem>
                    <S.InfoItem id='Email' >
                        <S.Icon src='../assets/o-email (1).png' />
                        <p id='emailText'></p>
                    </S.InfoItem>
                    <S.InfoItem id='Twitter' >
                        <S.Icon src='../assets/twitter.png' />
                        <p id='twitterText'></p>
                    </S.InfoItem>
                    <S.InfoItem id='CountDate'>
                        <S.Icon src='../assets/calendar.png' />
                        <p id='countText'></p>
                    </S.InfoItem>
                </S.InfoProfile>

                <S.ViewRepos onClick={handleResultRepos}><img alt='arrow-down' src='../assets/arrow-down-sign.png'/></S.ViewRepos>

                <div style={{display: showRepos ? 'flex' : 'none', flexDirection: 'column'}}>
                    {repos.map((item, key)=>(
                        <S.InfoRepo key={key}>
                            <S.InfoRepoHeader>
                                <a style={{textDecoration: 'none'}} rel="noreferrer" target="_blank" href={item.html_url}><p>{item.name}</p></a>
                            </S.InfoRepoHeader>
                            <S.InfoRepoDesc>
                                <p >{item.description}</p>
                            </S.InfoRepoDesc>
                            <S.InfoRepoDet>
                                <S.RepoDetItemPri>
                                    <S.RepoDetItem>
                                        <S.RepoDetItemBall 
                                        sty={item.language}>
                                        </S.RepoDetItemBall>
                                        <p>{item.language}</p>
                                    </S.RepoDetItem>

                                    <p>Atualizado em {(new Date(item.updated_at).getDate()+1)+'/'+(new Date(item.updated_at).getMonth()+1)+'/'+(new Date(item.updated_at).getFullYear())}</p>

                                </S.RepoDetItemPri>

                                <S.RepoDetItemSec>
                                    <S.RepoDetItem>
                                        <img src='../assets/git-fork_1.svg' alt='fork'/>
                                        <p>{item.forks}</p>
                                    </S.RepoDetItem>

                                    <S.RepoDetItemInfo>
                                        <img src='../assets/star.png' alt='star'/>
                                        <p>{item.watchers}</p>
                                    </S.RepoDetItemInfo>
                                </S.RepoDetItemSec>
                            </S.InfoRepoDet>
                            <S.RepoDetItemHr></S.RepoDetItemHr>
                        </S.InfoRepo>
                    ))}
                </div>
            </S.ContainerResult>
        </S.Container>

        <S.Footer>Feito por <a href='https://github.com/gabriell-c'> Gabriel Cardoso</a><br/></S.Footer>
    </S.All>
  )
}

export default App;
