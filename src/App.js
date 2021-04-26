import { useState, useEffect } from 'react';
import quoteList from "./quotes";
import gradientList from "./gradients";
import styled from 'styled-components'

const gradientOffsets = [
  "45deg",
  "135deg",
  "to left top",
  "to right bottom",
  "270deg"
]

const percentages = [
  "0%",
  "20%",
  "40%",
  "60%",
  "80%",
  "100%"
]

const gradientGenerator = (gradient) => {
  let newGradient = gradient;
  console.log(gradient);
  let finalGradient = "";

  const randomOffset = gradientOffsets[Math.floor(Math.random()*gradientOffsets.length)]

  const randomPercentage = percentages[Math.floor(Math.random()*percentages.length)]

  finalGradient = `linear-gradient(${randomOffset}, ${newGradient.colors[0]} ${randomPercentage}, ${newGradient.colors[1]})`

  return finalGradient;
}

const Background = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap');

  font-family: "PT Sans", sans-serif;
  background: ${props => gradientGenerator(props.gradient)};
  display: flex;
  flex-direction: column;

  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`

const Quote = styled.h1`
  display flex;
  align-items: center;
  text-align: justify;
  flex: 19;
  align-self: center;
  padding: 16px;
  max-width: 60vw;
  animation: fadeIn 4s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

`;

const Credits = styled.div`
  font-style: italic;
  max-width: 60vw;
  align-self: center;
  justify-content: center;
  justify-self: center;

`;


function App() {

  const [quote, setQuote] = useState("")
  const [gradient, setGradient] = useState(gradientList[Math.floor(Math.random()*gradientList.length)]);

  useEffect(() => {
    // Update the quote using the
    var randomQuote = quoteList[Math.floor(Math.random()*quoteList.length)];
    setQuote(randomQuote);

    var randomGradient = gradientList[Math.floor(Math.random()*gradientList.length)]
    setGradient(randomGradient);
  }, []);
  
  return (
    <Background gradient={gradient}>
      <Quote>{`"${quote}"`}</Quote>
      <Credits>
        <p>Made with ❤️ from one nerd to another. Quotes from <a href="http://www.antichamber-game.com/" rel="noreferrer" target="_blank">Antichamber</a>
        , gradients from <a href="https://uigradients.com/" rel="noreferrer" target="_blank">ui-gradients</a>.</p>
      </Credits>
    </Background>
  );
}

export default App;
