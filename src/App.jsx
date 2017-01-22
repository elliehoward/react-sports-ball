import React from 'react';
import Message from './Message';
import SportsTeamInput from './SportsTeamInput';

class App extends React.Component{
  constructor(props) {
    super(props);
    // initialize state to what's passed in
    this.state = {
      place: ''
    };
  }

  handleChange = (event) => {
    const nextState = { place: event.target.value };

    this.setState(nextState);
  }

  render() {
    const place = this.state.place.trim().toLowerCase();
    return <div>
      <h1>
        {"What's your favorite city?"}
      </h1>
      <SportsTeamInput handleChange={this.handleChange} place={this.state.place} />
      <Message place={this.state.place} />
    </div>;
  }
};

export default App;
