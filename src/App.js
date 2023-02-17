import React from 'react';
import './App.css';
import Tooltip from './Tooltip';


class App extends React.Component{

//.........................................................................we have to create the state............................................. 
  constructor(){
    super();
    this.state={
      position:"top",
      hovering:false,
    };
  }

  //..........................................................handleClick function which handle the position............................................................
  handleClick=(pos)=>{
    this.setState({
      position:pos,
    })
  };


  //..........................................................handleMouseEnter function which handle the hovering condintion............................................................


  handleMouseEnter=()=>{
    this.setState({
      hovering:true,
    });
  };



    //..........................................................handleMouseEnter function which handle the hovering condintion............................................................


  handleMouseLeave=()=>{
    this.setState({
      hovering:false
    })
  }


  //..........................................................render part of the class based component............................................................

  render(){
    return (
  //..........................................................app return main jsx............................................................

      <div className="App">
{  //..........................................................position of the all position button............................................................
}
        <div className='btn-position'>
          <div className='grp-name'>
            select the position of the hovering!!
          </div>
          <button
          className= {this.state.position=== 'top' ? "btn active" :"btn" }
          onClick={(e)=>{
            this.handleClick('top');
          }}>
            top
          </button>
          <button
          className={this.state.position=== 'left' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('left');
          }}>
            left
          </button>
          <button
          className={this.state.position=== 'right' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('right');
          }}>
            right
          </button>
          <button
          className={this.state.position=== 'down' ? "btn active" :"btn"}
          onClick={(e)=>{
            this.handleClick('down');
          }}>
            down
          </button>
        </div>
{        //..........................................................hover button ............................................................

}        <div id="button-container">
          <button
          className='btn hover-btn'
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          >

            Hover Over Me!!
          </button>
          {this.state.hovering && <Tooltip position={this.state.position}/>}
        </div>
        {/*........................................................... copy right..............................................................*/}
        <div>
        
          <h5 className='copyright'>
            Copyright 2022-2023 Mathur_Ji. All Rights Reserved!!
          </h5>
        </div>

      </div>
    );
  }
}

export default App;
