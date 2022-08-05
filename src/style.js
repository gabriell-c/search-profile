import styled from 'styled-components'

export  const All = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Container = styled.div`
    box-shadow: 2px 2px 5px #11111175;
    margin: 2em auto;
    width: 500px;
    padding: 1em;
    border-radius: 10px; 
    background: #4b4444;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 520px){
        width: 95%;
        padding: .5em;
    }


`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 0;
    border-radius: 5px;
    outline: none;
    background: #11111130;
    padding: .2em .5em;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 15px;
`

export const ModalContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Modal = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background: #00000099;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    padding: 1em;
    background: #222;
    width: 400px;
    height: 150px;
    z-index: 2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 2px 2px 5px #111;

    h2{
        font-size: 25px;
        text-align: center;
    }
`

export const ContainerResult = styled.div`
    display: flex;
    flex-direction: column;
`

export const SearchButton = styled.button`
    background: #ff001e;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    color: #eee;
    cursor: pointer;
    border: 0;
    font-size: 20px;
    font-weight: 500;
    box-shadow: 0 3px 0 #690915;
    transform: translateY(0px);
    transition: all ease-in-out .1s;

    &:active{
        transform: translateY(3px);
        box-shadow: 0 0px 0 #690915;
        transition: all ease-in-out .1s;
    }

    &:hover{
        background: #d9001a;
        transition: all ease-in-out .3s;
    }
`

export const InfoHeader = styled.div`
    margin: 2em 0 .5em 0;
    width: 100%;
    display: flex;
    @media only screen and (max-width: 350px){
        flex-direction: column;
    }

    a{
        @media only screen and (max-width: 350px){
           display: flex;
           justify-content: center;
        }
    }
    
    img{
        margin-right: 1em;
        height: 120px;
        width: 120px;
        border-radius: 3px;

        @media only screen and (max-width: 350px){
            width: 95%;
            height: auto;
            margin-bottom: 1em;
        }
    }
`
export const InfoHeaderTexts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    h1{
        font-size: 25px;
        font-weight: 700;
        line-height: 30px;
        margin: 0;
    }
    p{
        font-size: 16px;
    }
`
export const InfoProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1em;
`

export const InfoItem = styled.div`
    box-shadow: 2px 2px 3px #222;
    width: 100%;
    border-radius: 5px;
    background: #11111175;
    padding: .5em 1em;
    display: flex;
    align-items: center;
`

export const Icon = styled.img`
    width: 18px;
    margin-right: .5em;
`

export const InfoRepo = styled.div`
    margin: 1em 0;
`

export const InfoRepoHeader = styled.div`
    a p{
        color: #ff001e;
        text-shadow: 0 0 5px #ff001e50;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: .3em;
    }
`

export const InfoRepoDet = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 12px;
        margin-left: .5em;
    }
`

export const InfoRepoDesc = styled.div`
    color: #e3e3e375;
    font-size: 13px;
    margin-bottom: .8em;
`

export const RepoDetItemSec = styled.div`
    display: flex;
    align-items: center;
`

export const RepoDetItemPri = styled.div`
    display: flex;
    align-items: center;
`

export const RepoDetItem = styled.div`
    img{
        width: 15px;
        margin-right: .2em;
        filter: contrast(0) brightness(3.2);
    }
    margin-right: 1em;
    display: flex;
    align-items: center;
    font-size: 12px;

    @media only screen and (max-width: 350px){
        margin-right: 0em;
    }
`

export const RepoDetItemInfo = styled.div`
    img{
        width: 15px;
        margin-left: .2em;
        filter: contrast(0) brightness(3.2);
    }
    margin-left: .5em;
    display: flex;
    align-items: center;
    font-size: 12px;
`

export const RepoDetItemBall = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: ${props=>props.sty === null || undefined || '' ? 'none' : 'flex'};
    background: ${props=>props.sty === 'HTML' ? '#e83115' : '' ||
    props.sty === 'CSS' ? '#005eff' : '' ||
    props.sty === 'JavaScript' ? '#EFD81D' : '' ||
    props.sty === 'Python' ? '#316897' : '' ||
    props.sty === 'Java' ? '#E51F24' : '' ||
    props.sty === 'C++' ? '#f34b7d' : ''  ||
    props.sty === 'R' ? '#005eff' : '' ||
    props.sty === 'TypeScript' ? '#2764a8' : '' ||
    props.sty === 'PHP' ? '#4D588E' : '' ||
    props.sty === 'Ruby' ? '#701516' : '' ||
    props.sty === 'C#' ? '#198603' : '' ||
    props.sty === 'Jupyter Notebook' ? '#e83115' : '' ||
    props.sty === 'Objective-C' ? '#316897' : '' ||
    props.sty === 'Shell' ? '#89E051' : '' ||
    props.sty === 'ActionScript' ? '#882B0F' : '' ||
    props.sty === 'Blade' ? '#F7523F' : '' ||
    props.sty === 'Vue' ? '#59B690' : '' ||
    props.sty === 'TSQL' ? '#E38C00' : '' ||
    props.sty === 'Swift' ? '#F05138' : '' ||
    props.sty === 'Groovy' ? '#4298B8' : '' ||
    props.sty === 'Dockerfile' ? '#3F545B' : '' ||
    props.sty === 'C' ? '#555' : '' ||
    props.sty === 'Go' ? '#15ace8' : ''};

    box-shadow: ${props=>props.sty === 'HTML' ? '0 0 5px #e8311550' : '' ||
    props.sty === 'CSS' ? '0 0 5px #005eff50' : '' ||
    props.sty === 'JavaScript' ? '0 0 5px #EFD81D50' : '' ||
    props.sty === 'Python' ? '0 0 5px #31689750' : '' ||
    props.sty === 'Java' ? '0 0 5px #E51F2450' : '' ||
    props.sty === 'C++' ? '0 0 5px #f34b7d50' : '' ||
    props.sty === 'R' ? '0 0 5px #005eff50' : '' ||
    props.sty === 'TypeScript' ? '0 0 5px #2764a850' : '' ||
    props.sty === 'PHP'  ? '0 0 5px #4D588E50' : '' ||
    props.sty === 'Ruby' ? '0 0 5px #e8311550' : '' ||
    props.sty === 'C#'  ? '0 0 5px #19860350' : '' ||
    props.sty === 'Jupyter Notebook' ? '0 0 5px #e8311550' : '' ||
    props.sty === 'Objective-C' ? '0 0 5px #31689750' : '' ||
    props.sty === 'Shell'  ? '0 0 5px #89E05150' : '' ||
    props.sty === 'ActionScript' ? '0 0 5px #882B0F50' : '' ||
    props.sty === 'Blade'  ? '0 0 5px #eF7523F50' : '' ||
    props.sty === 'Vue' ? '0 0 5px #59B69050' : '' ||
    props.sty === 'TSQL'  ? '0 0 5px #E38C0050' : '' ||
    props.sty === 'Swift'  ? '0 0 5px #F0513850' : '' ||
    props.sty === 'Groovy' ? '0 0 5px #4298B850' : '' ||
    props.sty === 'Dockerfile' ? '0 0 5px #3F545B50' : '' ||
    props.sty === 'C' ? '0 0 5px #55555550' : '' ||
    props.sty === 'Go' ? '0 0 5px #15ace850' : ''};
`

export const RepoDetItemHr = styled.div`
    height: 2px;
    border-radius: 2px;
    width: 100%;
    margin-top: 2em;
    background: #555;
`

export const ViewRepos = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 1em;
    transition: all ease-in-out .2s;
    box-shadow: 0 0 0px #ff001e00;

    img{
        width: 25px;
    }

    &:hover{
        box-shadow: 0 0 8px #ff001e85;
        background: #ff001e;
        img{filter: saturate(0) brightness(10);}
        transition: all ease-in-out .2s;
    }
`

export const Footer = styled.footer`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    padding: 2em;
    width: 100%;
    background: #1c1616;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;

    a{
        margin-left: 7px;
    }
`