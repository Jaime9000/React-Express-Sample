import React, { Component } from 'react';
import * as uuid from 'uuid'
import { Link } from 'react-router-dom';

export default class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
    this.getstaticStage();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getList')
    .then(response => response.json())
    .then(list => this.setState({ list }))
  }
  
  getstaticStage = () => {
    const payload = { name: 'item', value: 'item number 2'}
    fetch('/api/createListItem', { method: 'POST', body: payload })
    .then(response => response.json())
    .then(list => this.setState({ list }))
  }
  ////render 
  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <a href='localhost:5000'>testing</a>
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div key = {uuid.v4()}>
                  {item.name} {item.age}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

