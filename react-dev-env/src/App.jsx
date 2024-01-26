import './App.css'
import {useState} from 'react';


function App() {
  const [ color, setColor ] = useState("blue");

  let data = {
    title: "My React App",
    footerText: "footer text",
    author: {
      name: "John Doe",
      phone: "800-555-1212",
      email: "jdoe@gmail.com"
    },
    books: [
      {isbn:'123', title:'The Time Machine', price: 5.95},
      {isbn:'456', title:'War of the Worlds', price: 6.95},
      {isbn:'789', title:'THe Invisible Man', price: 4.95},
    ]
  }

  return (
    <div className={'boxed'}>
      <Header {...data}/>
      <Body setColor={setColor} color={color} {...data}/>
      {/* <FragTest /> */}
      <Footer {...data} />
    </div>
  )
}

const divStyle = {
  backgroundColor: 'lightgrey',
  margin: '0px',
  padding: '5px',
  textAlign: 'center',
};

// var footerText = "footer text";
// var author = {
//   name: "John Doe",
//   phone: "800-555-1212",
//   email: "jdoe@gmail.com"
// }
// const title = "My React App";

function Header(props) {
  return (
    <h3 style={divStyle}>{props.title}</h3>
  )
}

function Body(props) {
  let handleChange = function(event) {
    props.setColor(event.currentTarget.value);
  }

  let onResetClick = function() {
    props.setColor("green");
  }

  return (
    <div>
      <p>Author: {props.author.name}</p>
      <BookList books={props.books} />
      <p>some random text</p>
      <p>Enter your favorite color:</p>
      <input type='text' name='color' value={props.color} onChange={handleChange}/>
      <button onClick={onResetClick}>Reset</button>
    </div>
  )
}

function BookList(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  let onClick = function(event, index) {
    setSelectedIndex(index);
  }

  return (
    <ul>
      {props.books.map(
        (book,index)=>{return (<li key={index} 
        className={index==selectedIndex?"selected":""}
        onClick = {(e)=>onClick(e, index)}>
          {book.title}</li>)}
      )}
    </ul>
  );
}

function Footer(props) {
  return (
    <div>
      <h4 style={divStyle}>{props.footerText}</h4>
    </div>
  )
}

function FragTest(props) {
  return <ul><ColorList /></ul>
}

function ColorList(props){
  return <>
  <li>Red</li>
  <li>Yellow</li>
  <li>Blue</li>
  </>
}

export default App
