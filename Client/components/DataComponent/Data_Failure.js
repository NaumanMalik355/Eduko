import React, { Component } from 'react';

class DataFailure extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
          <div>
              <h1> Something went wrong ,please try again</h1>
          </div>
        );
    }
}

export default DataFailure;
