import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import CoursesList from './Components/CoursesList'
class App extends Component {
  render() {
    return (

      <div>
        <NavBar />
        <CoursesList />
      </div> 
    )
  }
}
export default App