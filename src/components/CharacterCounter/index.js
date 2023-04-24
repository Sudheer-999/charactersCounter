import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  MainContainer,
  LeftContainer,
  RightContainer,
  Head,
  RightHead,
  ListItems,
  NoUserImage,
  InputSection,
  ResultText,
  Results,
  UserInput,
  AddButton,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {userInput: '', inputsList: []}

  onUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddButton = () => {
    const {userInput} = this.state

    const userObject = {
      inputName: userInput,
      inputLength: userInput.length,
      id: uuidv4(),
    }

    this.setState(prevState => ({
      inputsList: [...prevState.inputsList, userObject],
    }))

    this.setState({userInput: ''})
  }

  renderListItems = item => {
    const {inputName, inputLength, id} = item

    return (
      <Results key={id}>
        <ResultText>
          {inputName} : {inputLength}
        </ResultText>
      </Results>
    )
  }

  renderImage = () => (
    <div>
      <NoUserImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </div>
  )

  render() {
    const {inputsList, userInput} = this.state
    console.log(inputsList)

    return (
      <MainContainer>
        <LeftContainer input={inputsList}>
          <Head>Count the characters like a Boss...</Head>
          <ListItems>
            {inputsList.length > 0
              ? inputsList.map(eachItem => this.renderListItems(eachItem))
              : this.renderImage()}
          </ListItems>
        </LeftContainer>
        <RightContainer>
          <RightHead>Character Counter</RightHead>
          <InputSection>
            <UserInput
              type="text"
              value={userInput}
              onChange={this.onUserInput}
              placeholder="Enter the Characters here"
            />
            <AddButton onClick={this.onAddButton}>Add</AddButton>
          </InputSection>
        </RightContainer>
      </MainContainer>
    )
  }
}

export default CharacterCounter
