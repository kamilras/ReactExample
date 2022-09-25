import React, { Component } from "react";
import { Header } from "./Header";
import { ListItems } from "./ListItems";

export default class App extends Component {
  state = {
    items: [
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: false },
      { id: 3, name: "cukier", active: false },
      { id: 4, name: "mąka", active: false },
      { id: 5, name: "woda", active: false },
      { id: 6, name: "ciasto", active: false },
      { id: 7, name: "kawa", active: false },
    ]
  }

  handleChangeStatus = (id) => {
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active
      }
      return item
    })

    this.setState({
      items: items
    })
  }

  render() {
    return (
      <>
        <Header items={this.state.items}></Header>
        <ListItems items={this.state.items} changeStatus={this.handleChangeStatus}></ListItems>
      </>
    )
  }
}