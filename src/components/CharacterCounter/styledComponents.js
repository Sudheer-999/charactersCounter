import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  padding: 100px 50px;
`
export const LeftContainer = styled.div`
  background-color: #ffc533;
  width: 50%;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow-y: ${props => (props.input.length > 6 ? 'scroll' : '')};
`
export const RightContainer = styled.form`
  background-color: #0f172a;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 30px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const Head = styled.h1`
  font-size: 20px;
  background-color: #ffbf1f;
  font-family: Roboto;
  font-size: 40px;
  padding: 40px 30px;
  color: #334155;
`
export const AddButton = styled.button`
  height: 50px;
  width: 15%;
  border-width: 0px;
  background-color: #ffbf1f;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  color: #334155;
  font-family: Roboto;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
export const RightHead = styled.h1`
  font-size: 20px;
  color: #ffbf1f;
  font-size: 40px;
  font-family: Roboto;
  margin-bottom: 80px;
`
export const UserInput = styled.input`
  height: 50px;
  width: 85%;
  outline: none;
  border-width: 0px;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 20px;
  font-family: Roboto;
  padding: 0px 10px;
`
export const NoUserImage = styled.img`
  width: 100%;
`
export const InputSection = styled.div`
  display: flex;
  align-self: stretch;
`
export const ResultText = styled.p`
  font-size: 30px;
  font-family: Roboto;
  color: #334155;
  font-weight: 600;
  margin: 0;
  padding: 0;
`
export const Results = styled.li`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
`
export const ListItems = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`
