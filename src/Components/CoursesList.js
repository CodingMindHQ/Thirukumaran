import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Course from './Course'

const SPACE_ID = ''
const ACCESS_TOKEN = ''
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
class CourseList extends Component
 {
    state = {
        courses: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getCourses()
    }
    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({courses: response.items})
            console.log(this.state.courses)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }

    onSearchInput =(event)=>{
        if(event.target.value){
            this.setState({searchstring: event.target.value})

        }else{
            this.setState({searchString: ''})
    
        }
        this.getCourses()
    }
    render(){
        return(
            <div>
                {this.state.course ? (
                    <div>
                        <TextField style={{padding: 24}}
                        id="searchInput"
                        placeholder="Search for Courses"
                        margin="normal"
                        onChange={this.onsearchInputChange}/>
                        <Grid cointainer spacing ={24} style={{padding: 24}}>
                            {this.state.courses.map(currentcourse=> (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentcourse}/>
                                </Grid>

                            ))}
                        </Grid>
                  </div>
                ):"No courses found" }
            </div>
         )
       }
    }
    export default CourseList;