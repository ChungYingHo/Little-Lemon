import styled from 'styled-components'
import { ReactComponent as Brand } from '../asset/icons/Logo .svg'

const StyledFooter = styled.footer`
    height: 25vh;
    background-color: gray;
    margin-top: 4rem;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const StyledContainer = styled.section`
    /* outline: blue solid 2px; */
    width: 66%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const StyledGroup = styled.div`
    /* outline: red solid 2px; */
    height: 80%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledTitle = styled.h3`
    font-family: 'Karla', sans-serif;
    margin: 0;
    height: 10%;
    text-align: left;
`

const StyledList = styled.ul`
    /* outline: green solid 2px; */
    margin: 0;
    padding: 0;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    list-style-type: none;
`

const StyledListItem = styled.li`
    /* outline: red solid 2px; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledLink = styled.a`
    /* outline: blue solid 2px; */
    text-decoration: none;
    font-family: 'Karla', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: black;
`

export default function Footer(){
    return(
        <StyledFooter>
            <StyledContainer>
                <Brand/>
                <StyledGroup>
                    <StyledTitle>Infomation</StyledTitle>
                    <StyledList>
                        <StyledListItem><StyledLink>Home</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink>About</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink>Menu</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink>F&Q</StyledLink></StyledListItem>
                    </StyledList>
                </StyledGroup>

                <StyledGroup>
                    <StyledTitle>Service</StyledTitle>
                    <StyledList>
                        <StyledListItem><StyledLink>Delivery</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink>Reservation</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink>Service3</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink>Service4</StyledLink></StyledListItem>
                    </StyledList>
                </StyledGroup>

                <StyledGroup>
                    <StyledTitle>Contact</StyledTitle>
                    <StyledList>
                        <StyledListItem><StyledLink>Phone</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink>Email</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink>Instagram</StyledLink></StyledListItem>
                        <StyledListItem><StyledLink>Address</StyledLink></StyledListItem>
                    </StyledList>
                </StyledGroup>
            </StyledContainer>
        </StyledFooter>
    )
}