import React from 'react'

const Footer = ({length, check}) => {
// const year = new Date();
       
  return (
    // <footer style={footerStyle}>
    //     Copyrights &copy; {year.getFullYear()}
    // </footer>
    // <footer style={{backgroundColor:'lightblue', color: 'brown'}}>
    <footer>
     {length} {length === 1 ? "TASK": "TASKS"} DISPLAYED
    {check} 
    </footer>
    )
}

export default Footer


// Copyrights &copy; {year.getFullYear()}