import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { TitleStyled } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  render() {
    return (
      <>
        <TitleStyled>Phonebook</TitleStyled>
        <ContactForm onChange={this.onFormSubmitData} />

        <GlobalStyle />
      </>
    );
  }
}
