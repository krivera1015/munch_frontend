import React, { Component } from 'react'
const options = ["Amirata", "Scar", "Gabe", "Kevin", "Tiga", "Eric", "Prince"]

class RouletteWheel extends Component {

    constructor () {
        super()
        this.state = {
        arc: Math.PI / (options.length / 2),
        startAngle: 0,
        spinTimeout: null,
        spinArcStart: 10,
        spinTime: 0,
        spinTimeTotal: 0,
        outsideRadius: 200,
        textRadius: 160,
        insideRadius: 125
        }
        this.ctx = this.refs.canvas.getContext('2d')
    }
    
    // state = {
    //     arc: Math.PI / (options.length / 2),
    //     startAngle: 0,
    //     spinTimeout: null,
    //     spinArcStart: 10,
    //     spinTime: 0,
    //     spinTimeTotal: 0,
    //     outsideRadius: 200,
    //     textRadius: 160,
    //     insideRadius: 125
    // }
    
    componentDidMount(){
//         const canvas = this.refs.canvas
//         this.setState({this.ctx: canvas.getContext('2d')})
//         // this.setState({this.ctx: this.refs.canvas.getContext('2d')})
//         console.log("YO this.ctx", this.state.this.ctx)
// //        this.setState({this.ctx: this.ctx})
        this.drawRouletteWheel()
        // this.setState({this.ctx: this.refs.canvas.getContext('2d')})
    }
    
    spin = () => {
        console.log("spin function")
        this.setState({
            //will start the spin at random spot
            spinAngleStart: Math.random() * 10 + 10,
            //this is where the spin time starts at
            spinTime: 0,
            //this is how long the wheel will spin
            spinTimeTotal: Math.random() * 3 + 4 * 1000},
            () => this.rotateWheel())
        }

    rotateWheel = () => {
        console.log("before spin",this.refs.canvas.current)
        while (this.state.spinTime < this.state.spinTimeTotal) {
            this.setState({spinTime : this.state.spinTime += 30})
            if(this.state.spinTime >= this.state.spinTimeTotal) {
                console.log("Im spinning", this.state.spinTimeTotal, this.state.spinTime)
            this.stopRotateWheel();
            //return;
            }
        }
    //     var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    //     startAngle += (spinAngle * Math.PI / 180);
    //     drawRouletteWheel();
    //     spinTimeout = setTimeout('rotateWheel()', 30);
    console.log("after", this.state.spinTime)
    }
    
    stopRotateWheel = () => {
        console.log("stopppped bro")
        clearTimeout(this.state.spinTimeout);
        var degrees = this.statestartAngle * 180 / Math.PI + 90;
        var arcd = this.state.arc * 180 / Math.PI;
        var index = Math.floor((360 - degrees % 360) / arcd);
        this.ctx.save();
        this.ctx.font = 'bold 30px Helvetica, Arial';
        var text = options[index]
        this.ctx.fillText(text, 250 - this.ctx.measureText(text).width / 2, 250 + 10);
        this.ctx.restore();
    }
    
    drawRouletteWheel = () => {
        console.log("this.ctx state", this.this.ctx)
        //console.log(this.refs.canvas.getContext('2d'))
        //const this.ctx = this.refs.canvas.getContext('2d')
        this.ctx.clearRect(0,0,500,500);
        this.ctx.strokeStyle = "gray";
        this.ctx.lineWidth = 3;
        
        this.ctx.font = '16px Helvetica, Arial';
        
        for(let i = 0; i < options.length; i++) {
        const angle = this.state.startAngle + i * this.state.arc;
        this.ctx.fillStyle = "#DDBA4F";
        
        this.ctx.beginPath();
        //x, y, start angle, end angle, false anti-clockwise
        this.ctx.arc(250, 250, this.state.outsideRadius, angle, angle + this.state.arc, false);
        this.ctx.arc(250, 250, this.state.insideRadius, angle + this.state.arc, angle, true);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.save();
        this.ctx.shadowOffsetX = -1;
        this.ctx.shadowOffsetY = -1;
        this.ctx.shadowBlur    = 0;
        this.ctx.shadowColor   = "rgb(220,220,220)";
        this.ctx.fillStyle = "black";
        this.ctx.translate(250 + Math.cos(angle + this.state.arc / 2) * this.state.textRadius, 
                        250 + Math.sin(angle + this.state.arc / 2) * this.state.textRadius);
        this.ctx.rotate(angle + this.state.arc / 2 + Math.PI / 2);
        const text = options[i];
        this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
        this.ctx.restore();
        }
}

    byte2Hex = (n) => {
        const nybHexString = "0123456789ABCDEF";
        return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
    }

    RGB2Color = (r,g,b) => {
	    return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
    }
    
    getColor = (item, maxitem) => {
        const phase = 0;
        const center = 128;
        const width = 127;
        const frequency = Math.PI*2/maxitem;
        
        let red   = Math.sin(frequency*item+2+phase) * width + center;
        let green = Math.sin(frequency*item+0+phase) * width + center;
        let blue  = Math.sin(frequency*item+4+phase) * width + center;
        
        return this.RGB2Color(red,green,blue);
    }
    

    render () {
        console.log(this.ctx)
        return (
            <div onClick = {this.spin}>
                <canvas ref="canvas" width={800} height={600}/>
            </div>
        )
    }
}

export default RouletteWheel

// 
// const this.ctx = this.refs.canvas.getContext('2d')
// this.ctx.arc(200, 200, 100, 0, Math.PI * 2, true); //x, y, start angle, end angle, false anti-clockwise
// this.ctx.stroke()

// const options = ["$100", "$10", "$25", "$250", "$30", "$1000", "$1", "$200", "$45", "$500", "$5", "$20", "Lose", "$1000000", "Lose", "$350", "$5", "$99"];


// var spinArcStart = 10;
// var spinTime = 0;
// var spinTimeTotal = 0;

// var this.ctx;

// document.getElementById("spin").addEventListener("click", spin);

// function byte2Hex(n) {
//   var nybHexString = "0123456789ABCDEF";
//   return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
// }

// function RGB2Color(r,g,b) {
// 	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
// }

// function getColor(item, maxitem) {
//   var phase = 0;
//   var center = 128;
//   var width = 127;
//   var frequency = Math.PI*2/maxitem;
  
//   red   = Math.sin(frequency*item+2+phase) * width + center;
//   green = Math.sin(frequency*item+0+phase) * width + center;
//   blue  = Math.sin(frequency*item+4+phase) * width + center;
  
//   return RGB2Color(red,green,blue);
// }

// function drawRouletteWheel() {
//   var canvas = document.getElementById("canvas");
//   if (canvas.getContext) {
//     var outsideRadius = 200;
//     var textRadius = 160;
//     var insideRadius = 125;

//     this.ctx = canvas.getContext("2d");
//     this.ctx.clearRect(0,0,500,500);

//     this.ctx.strokeStyle = "black";
//     this.ctx.lineWidth = 2;

//     this.ctx.font = 'bold 12px Helvetica, Arial';

//     for(var i = 0; i < options.length; i++) {
//       var angle = startAngle + i * arc;
//       //this.ctx.fillStyle = colors[i];
//       this.ctx.fillStyle = getColor(i, options.length);

//       this.ctx.beginPath();
//       this.ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
//       this.ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
//       this.ctx.stroke();
//       this.ctx.fill();

//       this.ctx.save();
//       this.ctx.shadowOffsetX = -1;
//       this.ctx.shadowOffsetY = -1;
//       this.ctx.shadowBlur    = 0;
//       this.ctx.shadowColor   = "rgb(220,220,220)";
//       this.ctx.fillStyle = "black";
//       this.ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
//                     250 + Math.sin(angle + arc / 2) * textRadius);
//       this.ctx.rotate(angle + arc / 2 + Math.PI / 2);
//       var text = options[i];
//       this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
//       this.ctx.restore();
//     } 

//     //Arrow
//     this.ctx.fillStyle = "black";
//     this.ctx.beginPath();
//     this.ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
//     this.ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
//     this.ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
//     this.ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
//     this.ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
//     this.ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
//     this.ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
//     this.ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
//     this.ctx.fill();
//   }
// }

// function spin() {
//   spinAngleStart = Math.random() * 10 + 10;
//   spinTime = 0;
//   spinTimeTotal = Math.random() * 3 + 4 * 1000;
//   rotateWheel();
// }

// function rotateWheel() {
//   spinTime += 30;
//   if(spinTime >= spinTimeTotal) {
//     stopRotateWheel();
//     return;
//   }
//   var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
//   startAngle += (spinAngle * Math.PI / 180);
//   drawRouletteWheel();
//   spinTimeout = setTimeout('rotateWheel()', 30);
// }

// function stopRotateWheel() {
//   clearTimeout(spinTimeout);
//   var degrees = startAngle * 180 / Math.PI + 90;
//   var arcd = arc * 180 / Math.PI;
//   var index = Math.floor((360 - degrees % 360) / arcd);
//   this.ctx.save();
//   this.ctx.font = 'bold 30px Helvetica, Arial';
//   var text = options[index]
//   this.ctx.fillText(text, 250 - this.ctx.measureText(text).width / 2, 250 + 10);
//   this.ctx.restore();
// }

// function easeOut(t, b, c, d) {
//   var ts = (t/=d)*t;
//   var tc = ts*t;
//   return b+c*(tc + -3*ts + 3*t);
// }

// drawRouletteWheel();