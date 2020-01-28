import React, { Component } from 'react';
import Dummy from '../../components/Dummy';
import WithLoading from '../../layouts/withLoader';

const DummyWithLoader = WithLoading(Dummy);

class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {isLoading: true}
  }
  render() {
    const {isLoading} = this.state;
    return (
      <div>
          <DummyWithLoader isLoading={isLoading}/>
      </div>
    );
  }
}

export default Landing;