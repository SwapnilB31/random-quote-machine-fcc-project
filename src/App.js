import React, {useState, useEffect} from 'react';
import './App.css';
import './fonts.css';
import quotes from './quotes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import {FaTwitter} from 'react-icons/fa'

function App() {
  const [index,setIndex] = useState(Math.floor(Math.random() * 60 + 1));
  const [quote,setQuote] = useState('');
  const [author,setAuthor] = useState('');
  const [tweetLink,setTweetLink] = useState('');

  useEffect(()=> {
    setQuote(quotes[index].quote);
    setAuthor(quotes[index].by);
    const twtLink = `https://twitter.com/intent/tweet?text=${encodeURI(quotes[index].quote)} - ${encodeURI(quotes[index].by)}`;
    setTweetLink(twtLink);
  },[index])

  function newQuote() {
    const indexNum = Math.random() * 60 + 1;
    setIndex(Math.floor(indexNum))
    console.log(index);
  }

  return (
    <div className="app-body">
      <Card style={{width : '70vw'}}>
        <div id="quote-box" className="pad-a-little">
          <Card.Title>
            <blockquote className="quote" id="text">{quote}</blockquote>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <div className="author" id="author">{author}</div>
          </Card.Subtitle>
          
          {/*<button id="new-quote" onClick={newQuote}>New Quote</button>*/}
          <hr/>
          <div className="button-panel">
            <Button  variant="info" id="new-quote" onClick={newQuote}>New Quote</Button>
            <a className="btn btn-info" target='_blank' rel='noreferrer' href={tweetLink} id="tweet-quote"><FaTwitter/></a>
          </div>
        </div>
      </Card>
    </div>
    
  );
}

export default App;
