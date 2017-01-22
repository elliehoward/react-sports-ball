import React from 'react';

const Message = React.createClass({
  render() {
    const place = this.props.place.trim().toLowerCase();
    let message;

    if (place === 'seattle') {
      message = <ul className="no-bullets">
        <li style={{ margin: '10px' }}>
          <a href="http://www.soundersfc.com/">Go Sounders!</a>
        </li>
        <li style={{ margin: '10px' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/27/Seattle_Sounders_FC.svg"
            width="150"
          />
        </li>
      </ul>;
    }
    else if (place === 'portland') {
      message = <ul className="no-bullets">
        <li style={{ margin: '10px' }}>
          <a href="http://www.trailblazers.com/">Go Trail Blazers!</a>
        </li>
        <li style={{ margin: '10px' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/06/Portland_Trail_Blazers_alternate_logo.svg"
            width="150"
          />
        </li>
      </ul>;
    }
    else if (place === '') {
      message = <p>Go ahead, type in a city.</p>;
    }
    else {
      message = <p>{this.props.place}? Never heard of it.</p>;
    }

    return <div>{message}</div>
  }
});

Message.propTypes = {
  place: React.PropTypes.string
};

export default Message;
