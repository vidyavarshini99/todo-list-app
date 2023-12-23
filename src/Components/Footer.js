import React from 'react'

function Footer() {
const year = new Date();
const footerStyle = {backgroundColor:'lightblue', color: 'brown'}

  return (
    // <footer style={footerStyle}>
    //     Copyrights &copy; {year.getFullYear()}
    // </footer>
    // <footer style={{backgroundColor:'lightblue', color: 'brown'}}>
    <footer>
        Copyrights &copy; {year.getFullYear()}
    </footer>
  )
}

export default Footer