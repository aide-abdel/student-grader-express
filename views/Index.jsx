import React, { Component } from 'react'

export class Index extends Component {
  render() {
    const students = this.props.students;

    return (
      <div>
         {students.map((s,index) => 
        {
            return <div key={index}> {s.firstName + " " + s.lastName} 
            <div>grade 1 :  {s.grade1} </div>
                   
                 <div>grade 2 :   {s.grade2} </div> 
                    
                <div>grade 3 :   {s.grade3}   </div>
                
            </div>
        }  
        )}
        <a href='/addStudent'><button>Add student</button></a>
      </div>
    )
  }
}

export default Index