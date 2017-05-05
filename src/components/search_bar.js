import React, { Component } from 'react';  // need this because JSX will translate
                            // to commands like that below
                            // JSX translate to React.createElement

// This is a class based compoment 
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={ event => this.setState({ term: event.target.value})} />
      </div>
    );
  }
}

export default SearchBar;
