import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class Profile extends Component {
  state = {
    profile: {
      email: "homer.simpson@wildcodeschool.fr",
      name: "Homer",
      lastname: "Simpson"
    }
  };
  render() {
    return (
      <div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary={this.state.profile.email} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={this.state.profile.name} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={this.state.profile.lastname} />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Profile;
