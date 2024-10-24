import React, { Component } from "react";
import axios from "axios"; // npm install axios
import ReactLoading from "react-loading";
//import { Media } from "react-bootstrap";
import { Media, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class GitHub extends Component {
  constructor() {
    super();
    //this.getGitHubData("MichaelMarkus115");
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  //React hook number 1
  //called when the component is first rendered
  componentDidMount() {
    this.getGitHubData("MichaelMarkus");
  }

  getGitHubData(_searchTerm) {
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        //change state (no longer loading)
        this.setState({
          isLoading: false,
          data: res.data.items,
        });
        //print results to console
        console.log(res.data.items);
      });
  }
  render() {
    const listUsers = this.state.data.map((user) => (
      <Media key={user.id}>
        <a href={user.html_url}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={user.avatar_url}
            alt="Generic placeholder"
          />
        </a>
        <Media.Body>
          <h5>Login: {user.login}</h5>
          <p>Id: {user.id}</p>
        </Media.Body>
      </Media>
    ));
    return (
      <div>
        <h3>GitHub Users Results</h3>
        {this.state.isLoading && (
          <ReactLoading type="spinningBubbles" color="#444" />
        )}
        {listUsers}
      </div>
    );
  }
}
export default GitHub;
