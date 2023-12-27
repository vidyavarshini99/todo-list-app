
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import ContentState from './Components/ContentState';
import ContentHW from './Components/ContentHW';
import MainContent from './Components/MainContent';
 import { useState } from 'react';

function App() {

  const [items, setItems] = useState(
    [
     { 
         id:1,
         check: false,
         task: "Take out trash"
     },
    
     {
         id:2,
         check: false,
         task: "Do laundry"
     },
    
     { 
         id:3,
         check: false,
         task: "Cook dinner"
     },
    
     { 
         id:4,
         check: false,
         task: "Buy Milk"
     }

 ]);
 
 const handleClickFn= (id) =>{
     // console.log(`id: ${id}`)
     
     const listItems = items.map((item)=> item.id === id ? {...item, check:!item.check}: item)
     setItems(listItems)
     localStorage.setItem("todo_list",JSON.stringify(listItems))
 }
 
 const deleteFn = (id) =>{
     
     
     const listItems = items.filter((item) => item.id !== id)
     setItems(listItems)
     localStorage.setItem("todo_list",JSON.stringify(listItems))
 }


  return (


    <div className="App">
      <Header/>
        
      <MainContent
      items= {items}
      handleClickFn = {handleClickFn}
      deleteFn = {deleteFn}/>

      <Footer
      length = {items.length}
      />

    </div>
  );
}

export default App;
