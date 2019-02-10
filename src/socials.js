import React, { Component } from 'react';

class Socials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socials: props.socials,
    };
  }

  render() {
    const ListItems = this.state.socials.map((item) => 
      <div>{item.type}: {item.username}</div>
    );
    return (
      <div>
        {ListItems}
      </div>
    );
  }
}

export default Socials;
