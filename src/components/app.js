import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Main from './main/Main'
import Admin from './/admin/Admin'
import dataAPI from '../dataAPI'

class App extends React.Component {
  constructor() {
    super()
    this.changeFilter = this.changeFilter.bind(this)
    this.deliteCard = this.deliteCard.bind(this)
    this.editingCard = this.editingCard.bind(this)
    this.addCard = this.addCard.bind(this)
    this.changeFilter = this.changeFilter.bind(this)

    this.state = {
      data: this.dataAPI.data,
      filter: 'sport',
    }
  }
  dataAPI = new dataAPI()

  changeFilter(filter) {
    this.setState({ filter: filter })
  }

  deliteCard(id) {
    this.dataAPI.deliteCard(id)
    this.setState(({ data }) => {
      return {
        data: this.dataAPI.data,
      }
    })
  }
  editingCard(dataForEditing, id) {
    this.dataAPI.editingCard(dataForEditing, id)
    this.setState(({ data }) => {
      return {
        data: this.dataAPI.data,
      }
    })
  }
  addCard(dataForAdd) {
    this.dataAPI.addCard(dataForAdd)
    this.setState(({ data }) => {
      return {
        data: this.dataAPI.data,
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                changeFilter={this.changeFilter}
                data={this.state.data}
                filter={this.state.filter}
                admin={this.state.admin}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <Admin
                editingCard={this.editingCard}
                deliteCard={this.deliteCard}
                addCard={this.addCard}
                data={this.state.data}
                filter={this.state.filter}
                changeFilter={this.changeFilter}
              />
            }
          />
        </Routes>
      </div>
    )
  }
}
export default App
