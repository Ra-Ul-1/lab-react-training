import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import Greeting from './Greeting';
import ClickablePicture from './ClickablePicture';
import Dice from './Dice';


class App extends React.Component {
  // const user = {
  //   lastName: 'Doe',
  //   firstName:'John',
  //   gender:'male',
  //   height: 178,
  //   birth: new Date("1992-07-14"),
  //   picture: "https://randomuser.me/api/portraits/men/44.jpg",
  // }
  state = {
    counter: 0,
  }

  likeHandler = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }



  render() {
  console.log(this.state)
  return (
  <>
    <IdCard 
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"/>

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greeting
        lang="de"
      />

      <button onClick={this.likeHandler}>{this.state.counter} Likes</button>

      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />

      <Dice
      />

    </>
    );
  }
}

export default App;
