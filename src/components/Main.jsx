import styled from 'styled-components'
import Btn from './Btn'
import Card from './Card'
import dummyItems from '../asset/dummyItems'

const StyledMain = styled.main`
    /* outline: blue solid 2px; */
`

const StyledContainer = styled.section`
    /* outline: green solid 2px; */
    width: 66%;
    margin: calc(1rem + 75px) auto 0;
    display: flex;
    flex-direction: column;
`

const StyledTitle = styled.div`
    /* outline: red solid 2px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledTitleText = styled.h1`
    /* outline: yellow solid 2px; */
    font-family: 'Markazi Text', serif;
    font-size: 40px;
`

const StyledCardContainer = styled.div`
    outline: red solid 2px;
    display: flex;
    justify-content: space-between;
`

export default function Main(){
    return(
        <StyledMain>
            <StyledContainer>
                <StyledTitle>
                    <StyledTitleText>This weeks special!</StyledTitleText>
                    <Btn name={'Online Menu'}/>
                </StyledTitle>
                <StyledCardContainer>
                    {dummyItems.map(item=>{
                        return <Card name={item.name} img={item.img} des={item.des} price={item.price} />
                    })}
                </StyledCardContainer>
            </StyledContainer>
        </StyledMain>
    )
}