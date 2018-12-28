import React, { Component } from 'react';

export default class Clock extends Component{
       constructor(props){     
        super(props);
        this.state = {
            date : new Date()
        };
    }
    
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }
    
    render(){
        const hoursDegrees =  this.state.date.getHours() * 30 + this.state.date.getMinutes() / 2;   
        const minutesDegrees = this.state.date.getMinutes() * 6 + this.state.date.getSeconds() / 10; 
        const secondsDegrees = this.state.date.getSeconds() * 6;


        const divStyleHours = {transform: "rotateZ(" + hoursDegrees + "deg)"};
        const divStyleMinute = {transform: "rotateZ(" + minutesDegrees + "deg)"};
        const divStyleSecond = {transform: "rotateZ(" + secondsDegrees + "deg)"};
        return(
            <div id = "clock">
            <div id = "hour_hand" style={divStyleHours}></div>
            <div id = "minute_hand" style={divStyleMinute}></div>
            <div id = "second_hand" style={divStyleSecond}></div>        
            </div>
            )
    }

}