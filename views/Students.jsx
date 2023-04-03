import React, { Component } from 'react'

export class Students extends Component {
  render() {
    const students = this.props.students;
    const student =  {
        firstName: "",
        lastName: "",
        grade1: 0,
        grade2: 0,
        grade3: 0,
      }
    function addStudent(){
    }
  
    return (
      <div> 
        <form action='/' name='addStu' method='POST'>
            <input placeholder='First name' name='fname'/><br/>
            <input placeholder='Last name' name='lname'/> <br/>
            <input placeholder='Grade One' name='grade1'/><br/>
            <input placeholder='Grade Two' name='grade2'/><br/>
            <input placeholder='Grade Three' name='grade3'/><br/>
            <input type='submit' value="ADD STUDENT"/>
        </form>
        </div>
    )
  }
}

export default Students