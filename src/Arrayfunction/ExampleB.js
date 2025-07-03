import React from "react";;

function ExampleB() {
    const students = [
        { name: 'Rahul', marks: 80 },
        { name: 'Sohan', marks: 90 },
        { name: 'Mahesh', marks: 70 }
    ];
    return (
        <div>
            {students.map((student, index) =>(
                <p key={index}>{student.name} scored{student.marks}markes.</p>
            )) }
        </div>
    );
}
export default ExampleB;