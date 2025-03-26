import React, { Component } from 'react';
import './file.css';

class FileNode extends Component {
  state = {
    open: false
  }
  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { name, files } = this.props;
    const { open } = this.state;

    if(!files) {
      return <li>{name}</li>
    }

    return (
      <>
        <div onClick={this.toggle} className={`folder ${open ? 'open' : ''}`}>{name}</div>
        {!open ? null : (
          <ul>
            {files.map((item, index) => (
              <FileNode key={index} {...item} />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default FileNode;
