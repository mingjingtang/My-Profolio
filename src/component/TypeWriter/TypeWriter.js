import React from 'react'
import '../TypeWriter/TypeWriter.css'
import {TimelineMax, Linear} from "gsap";


export default class TypeWriter extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { _count: 0, currentString : "obj" , charCount:0, messageBodyStr : 'This is a typewriter effect built in ReactJS\'s componentDidUpdate and GreenSock onUpdate.', speed:7, character:"|", endFlashSpeed:0, blinkCount:0};
     this._currentString = "";
      this._charCount = 0;
      this._blinkCount = 0;
  
      this.onLoaded = this.onLoaded.bind(this);
      this.blink = this.blink.bind(this);
     
    }
   
   
   
    onLoaded() {
      let typingTl = new TimelineMax().timeScale(1);
      typingTl.to(this, this.state.messageBodyStr.length/this.state.speed, {
       _charCount:this.state.messageBodyStr.length, 
            ease:Linear.easeNone,
            onUpdate: ()=> this.setState({ charCount: ~~this._charCount }),
            onComplete: ()=> {this.textField.textContent = this.state.messageBodyStr}
       },'+=0.5')
         .to(this,1, {
            onUpdate:this.blink,
            _blinkCount:2,
            repeat:-1, 
            repeatDelay:this.state.endFlashSpeed,
            ease:Linear.easeNone
       })
    }
   
   componentDidMount(){
    
    this.onLoaded();
   }
   
   componentDidUpdate(prevProps) {
  
    this._currentString = this.state.messageBodyStr.substring(0, this.state.charCount)+this.state.character;
   }
   
   blink(){
    
    this.setState({ blinkCount: ~~this._blinkCount });
    this._currentString = (this.state.blinkCount%2) ? this.state.messageBodyStr : this.state.messageBodyStr +this.state.character
   }
  
    render() {
      return (
        <svg viewBox="0 0 800 300" preserveAspectRatio="xMidYMin meet" xmlns="http://www.w3.org/2000/svg" onLoad={this.startAnim}>       
          <text x='10%' y='50%' className='myText' ref={c => (this.textField = c)}>{this._currentString}
          </text> 
        </svg>
      );
     
     
    }
  }