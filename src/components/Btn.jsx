import styled from 'styled-components'

const StyledBtn = styled.button`
    background-color: rgb(244, 206, 20);
    border-radius: 16px;
    border: transparent;
    padding: 10px 15px;
    cursor: pointer;
    font-weight: 700;
    height: 40px;
`

export default function Btn({name}){
    return(
        <StyledBtn>{name}</StyledBtn>
    )
}