import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import CourseList from './Components/CoursesList'
class App extends Component {
  render() {
    return (

      <div>
        <NavBar />
        <CourseList />
      </div> 
    )
  }
}
export default App