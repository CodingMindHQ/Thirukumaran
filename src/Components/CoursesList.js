import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Course from '../Components/Course'

const SPACE_ID = 'xth14sglusza'
const ACCESS_TOKEN = '8Z7-JaUrg_Bj__3Aq3MUHWSTfWzYKAwMeHeK3LIJuZM'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
class CoursesList extends Component
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
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    }
    render(){
        return(
            <div>
                {this.state.courses ? (
                    <div>
                        <TextField  style={{padding :6}} variant="outlined"  label="Search for Courses" id="outlined-size-small"   size="large"  id="searchInput"
                    margin="normal" 
                        onChange={this.onsearchInputChange}/>
                        <Grid style={{padding :15}} container direction="row" flex-grow={1} spacing={7}   >
                            {this.state.courses.map(currentcourse=> (
                                <Grid   item xs={11} sm={7} lg={4} xl={3}>
                                    <Course course={currentcourse}/>
                                </Grid>

                            ))}
                        </Grid>
                  </div>
                ):"No courses found" }<center><p >© <a href="http://www.codingmind.in" target="_blank">codingmind.in</a> | <a href="http://www.codingmind.in" target="_blank">Imprint</a> | <a href="http://www.codingmind.in" target="_blank">Data Privacy Statement</a> 
        | <a href="" target="_blank">Affiliate Disclaimer</a></p></center>
            </div>
         )
       }
    }
    export default CoursesList;