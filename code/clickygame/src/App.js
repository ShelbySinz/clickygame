import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/card";
import Wrapper from "./components/Wrapper";
import office from "./people.json"

 


class App extends React.Component {
 
  state = {
		office,
		message: "Click one of the logos to begin!",
		score: 0,
		topScore: 0
  };
  



render(){
  return (
    <div className="container">
   
      <Navbar 
      correct={this.state.newScore}
      topscore={this.state.newTopScore}
      />
      <Jumbotron />
      <Wrapper>
      <Card 
      name={office[0].name}
      image={office[0].image}
      key={office[0].id}
      />
      <Card
      name ={office[1].name}
      image={office[1].image}
      key={office[1].id}
      />
      <Card
      name ={office[2].name}
      image={office[2].image}
      key={office[2].id}
      />
        <Card
      name ={office[3].name}
      image={office[3].image}
      key={office[3].id}
      />
        <Card
      name ={office[4].name}
      image={office[4].image}
      key={office[4].id}
      />
        <Card
      name ={office[5].name}
      image={office[5].image}
      key={office[5].id}
      />
        <Card
      name ={office[6].name}
      image={office[6].image}
      key={office[6].id}
      />
       <Card
      name ={office[7].name}
      image={office[7].image}
      key={office[7].id}
      />
        <Card
      name ={office[8].name}
      image={office[8].image}
      key={office[8].id}
      /> 
      </Wrapper>
      
  </div>
  );
}
}
export default App;
