import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Item = ({ user }) => (
  <div className='userInfo'>
    <h3>{`Imię = ${user.name}`}</h3>
    <p>{`Wiek = ${user.age}`}</p>
    <p>{`Płeć = ${user.sex}`}</p>
  </div>
)

class ListItems extends React.Component {
  state = {
    select: "all"
  }

  handleUsersFilter(option) {
    this.setState({
      select: option
    })
  }

  userList = () => {
    let users = this.props.data.users
    switch (this.state.select) {
      case "male":
        users = users.filter(user => user.sex === "male")
        break
      case "female":
        users = users.filter(user => user.sex === "female")
        break
      default:
        break
    }

    return users.map(user => <Item key={user.id} user={user}></Item>)
  }

  render() {
    let users = this.props.data.users;
    users = users.filter((user) => user.sex === "female")

    const Items = users.map(user => <Item key={user.id} user={user}></Item>)

    return (
      <>
        <div className='App'>
          <div className='App-header'>
            <div>
              <button onClick={() => this.handleUsersFilter("all")}>Wszyscy</button>
              <button onClick={() => this.handleUsersFilter("male")}>Mężczyźni</button>
              <button onClick={() => this.handleUsersFilter("female")}>Kobiety</button>
            </div>
            {this.userList()}
          </div>
        </div>
      </>
    )
  }
}

export default ListItems;
