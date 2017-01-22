import React from 'react';

const SportsTeamInput = React.createClass({
  render() {
    return <input
      onChange={this.props.handleChange}
      type="text"
      value={this.props.place}
    />
  }
});

SportsTeamInput.propTypes = {
  handleChange: React.PropTypes.func,
  place: React.PropTypes.string
};

export default SportsTeamInput;
