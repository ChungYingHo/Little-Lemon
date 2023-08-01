import styled from 'styled-components'
import Btn from './Btn'
import { useState } from 'react'

const StyledMain = styled.main`
    /* outline: blue solid 2px; */
`

const StyledContainer = styled.section`
    /* outline: red solid 2px; */
    width: 66%;
    margin: 2rem auto 0;
`

const StyledTitle = styled.h1`
    font-family: 'Markazi Text', serif;
    font-size: 40px;
`

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 3rem;
`

const StyledGroup = styled.div`
  /* outline: red solid 2px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLabel = styled.label`
  font-family: 'Markazi Text', serif;
  font-size: 25px;
`

const StyledInput = styled.input`
  font-family: 'Markazi Text', serif;
  font-size: 20px;
  color: gray;
  border-radius: 16px;
  border: gray solid 1px;
  width: 70%;
  text-align: center;
  padding: 2px;

  &[type="date"] {
    font-size: 15px; 
  }
`

const StyledSelect = styled.select`
  font-family: 'Markazi Text', serif;
  font-size: 20px;
  color: gray;
  border-radius: 16px;
  border: gray solid 1px;
  width: 70%;
  text-align: center;
  padding: 2px;
`



export default function Form(){
    const [info, setInfo] = useState({
      date: '',
      time: '17:00',
      guests: '1',
      occasion: 'Birthday'
    })

    const handleChange = (e)=>{
      const {name, value} = e.target
      setInfo((prevInfo) => ({ ...prevInfo, [name]: value }))
    }

    const handleSubmit = ()=>{
        alert(`Date:${info.date}\nTime:${info.time}\nGuests:${info.guests}\nOccasion${info.occasion}`)
    }

    return(
        <StyledMain>
            <StyledContainer>
                <StyledTitle>Reserve a Table Now!</StyledTitle>
                <StyledForm>
                  <StyledGroup>
                    <StyledLabel htmlFor="res-date">Choose date</StyledLabel>
                    <StyledInput type="date" id="res-date" name='date' lang="en" onChange={handleChange}/>
                  </StyledGroup>
                  <StyledGroup>
                    <StyledLabel htmlFor="res-time">Choose time</StyledLabel>
                    <StyledSelect id="res-time" name='time' onChange={handleChange}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </StyledSelect>
                  </StyledGroup>
                  <StyledGroup>
                    <StyledLabel htmlFor="guests">Number of guests</StyledLabel>
                    <StyledInput type="number" placeholder="1" min="1" max="10" id="guests" name='guests' onChange={handleChange}/>
                  </StyledGroup>
                  <StyledGroup>
                    <StyledLabel htmlFor="occasion">Occasion</StyledLabel>
                    <StyledSelect id="occasion" name='occasion' onChange={handleChange}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </StyledSelect>
                  </StyledGroup>
                </StyledForm>
                <Btn name={'Make Your Reservation'} onClick={handleSubmit}/>
            </StyledContainer>
        </StyledMain>
    )
}