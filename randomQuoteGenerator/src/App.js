import { faTwitter,  faFacebookF } from '@fortawesome/free-brands-svg-icons'
import data from './quotes.json';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextComponent from './components/TextComponent';
import ShareComponent from './components/ShareComponent';
import Button from './components/Button';
import 'typeface-montserrat';

const App = () => {
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ]

  const getRandomQuote = () => data.quotes[Math.floor(Math.random()*data.quotes.length)]
  const getRandomColor = () => colors[Math.floor(Math.random()*colors.length)]

  const [quoteData, setQuoteData] = useState(getRandomQuote())
  const [dynamicColor, setDynamicColor] = useState(getRandomColor())


  const newQuote = () => {
    setQuoteData(getRandomQuote())
    setDynamicColor(getRandomColor())
  }

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    backgroundColor: dynamicColor,
    fontFamily: "Montserrat",
    transition: "background-color 1s ease-out",
    minWidth: "400px",
  }
  
  const quoteBoxStyle = {
    width: "80%", 
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    borderRadius: "1vw",
    border: "1px solid white",
    backgroundColor: "white",
    padding: "50px"
  }
  

  const quoteStyle = {
    margin: "10px 10px",
    color: dynamicColor,
    textAlign: "center",
    transition: "color 1s ease-out",
    fontSize: "15vw"
  }

  const authorStyle = {
    margin: "10px auto",
    color: dynamicColor,
    textAlign: "right",
    transition: "color 1s ease-out"
  }

  const shareStyle = {
    padding: "1vw",
    borderRadius: "1vw",
    color: "white",
    backgroundColor: dynamicColor,
    transition: "background-color 1s ease-out",
    fontSize: "2vw",
    width: "2vw",
    height: "2vw",
    padding: "1vw",
    marginTop: "2vw",
    marginLeft: "2vw",
    marginRight: "1vw"
  }

  const buttonsContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1vw"
  }

  const newQuoteStyle = {
    backgroundColor: dynamicColor,
    outline: "none",
    color: "white",
    transition: "background-color 1s ease-out",
    borderRadius: "1vw",
    border: "none",
    fontFamily: "Montserrat",
    fontSize: "2vw",
    height: "4vw"
  }
  
  const footerStyle = {
    color: "white"
  }

  return (
<div id="wrapper" style={wrapperStyle}>
  <div id="quote-box" style={quoteBoxStyle}>
    <TextComponent content= <i className="fa fa-quote-left"> {quoteData.quote}</i> id="text" headingTag="h1" styling={quoteStyle}/>
    <TextComponent content= <i className="fa">- {quoteData.author}</i> id="author" headingTag="h4" styling={authorStyle}/>
    <div id="buttons-container" style={buttonsContainerStyle}>
      <ShareComponent linkId="facebook-share-quote" link="https://www.reddit.com" iconId={faFacebookF} styling={shareStyle}/>
      <ShareComponent linkId="tweet-quote" link="https://twitter.com/intent/tweet" iconId={faTwitter} styling={shareStyle}/>
      <Button name = 'New Quote' id="new-quote" onClick ={newQuote} styling={newQuoteStyle}/>
    </div>
  </div>
  <p id="footer" style={footerStyle}>Loc.quotes - Powered by React</p>
</div>
  );
}

export default App