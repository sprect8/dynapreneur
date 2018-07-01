import React, {Component} from 'react';
import { SingleContactCard, Avatar } from './contact.style';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  overrides: {
    MuiAvatar: {
      img: {
        "objectPosition":"top"
      }
    }
  },
});

export default ({ contact, setSelectedContact }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <SingleContactCard onClick={() => setSelectedContact(contact)}>
        <Avatar alt={contact.name} src={contact.avatar}/>
        <h2>{contact.name || 'No Name'}</h2>      
      </SingleContactCard>
    </MuiThemeProvider>
  );
};
