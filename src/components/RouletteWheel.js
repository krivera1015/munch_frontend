import React, {Component} from 'react'
const options = ["Amirata", "Scar", "Gabe", "Kevin", "Tiga", "Eric", "Prince"]

class RouletteWheel extends Component {

    //have to initiate my refs
    constructor(props) {
        super(props)
        this.canvasRef = React.createRef()

        this.state = {
            arc: Math.PI / (options.length / 2),
            startAngle: 0,
            spinTimeout: null,
            spinArcStart: 10,
            spinAngleStart: 0,
            spinTime: 0,
            spinTimeTotal: 0,
            outsideRadius: 200,
            textRadius: 160,
            insideRadius: 125,
            canvasContext: null
        }
    }

    componentDidMount() {
        const canvas = this.canvasRef.current.getContext('2d')
        this.drawRouletteWheel(canvas)
        this.setState({
            canvasContext: canvas
        })
    }

    spin = () => {
        console.log("spin function")
        this.setState({
                //will start the spin at random spot
                spinAngleStart: Math.random() * 10 + 10,
                //this is where the spin time starts at
                spinTime: 0,
                //this is how long the wheel will spin
                spinTimeTotal: Math.random() * 3 + 4 * 1000
            },
            () => this.rotateWheel())
    }

    rotateWheel = () => {
        while (this.state.spinTime < this.state.spinTimeTotal) {
            this.setState({
                spinTime: this.state.spinTime + 30
            })
            if (this.state.spinTime <= this.state.spinTimeTotal) {
                console.log("Im spinning", this.state.spinTimeTotal, this.state.spinTime)
                this.stopRotateWheel();
                //return;
            }
        }
            let spinAngle = this.state.spinAngleStart - this.easeOut(this.state.spinTime, 0, this.state.spinAngleStart, this.state.spinTimeTotal);
            this.setState({startAngle: this.state.startAngle + (spinAngle * Math.PI / 180)})
            this.drawRouletteWheel();
            this.setState({spinTimeout: this.setTimeout('rotateWheel()', 30)});
        console.log("after", this.state.spinTime)
    }

    stopRotateWheel = () => {
        console.log("stopppped bro")
        clearTimeout(this.state.spinTimeout);
        let degrees = this.state.startAngle * 180 / Math.PI + 90;
        let arcd = this.state.arc * 180 / Math.PI;
        let index = Math.floor((360 - degrees % 360) / arcd);
        this.state.canvasContext.save();
        let text = options[index]
        this.state.canvasContext.fillText(text, 250 - this.state.canvasContext.measureText(text).width / 2, 250 + 10);
        this.state.canvasContext.restore();
    }

    drawRouletteWheel = (canvas) => {
        //will clear the whole canvas
        canvas.clearRect(0, 0, 500, 500)

        for (let i = 0; i < options.length; i++) {
            const angle = this.state.startAngle + i * this.state.arc;

            canvas.font = '16px Helvetica, Arial';
            canvas.fillStyle = "#DDBA4F";
            canvas.beginPath();
            //x, y, start angle, end angle, false anti-clockwise
            canvas.arc(250, 250, this.state.outsideRadius, angle, angle + this.state.arc, false);
            canvas.arc(250, 250, this.state.insideRadius, angle + this.state.arc, angle, true);
            canvas.stroke();
            canvas.fill();

            canvas.save();
            canvas.shadowOffsetX = -1;
            canvas.shadowOffsetY = -1;
            canvas.shadowBlur = 0;
            canvas.shadowColor = "rgb(220,220,220)";
            canvas.fillStyle = "black";
            canvas.translate(
                250 + Math.cos(angle + this.state.arc / 2) * this.state.textRadius,
                250 + Math.sin(angle + this.state.arc / 2) * this.state.textRadius);
            canvas.rotate(angle + this.state.arc / 2 + Math.PI / 2);
            const text = options[i];
            canvas.fillText(text, -canvas.measureText(text).width / 2, 0);
            canvas.restore();
        }
            //Arrow
        canvas.fillStyle = "black";
        canvas.beginPath();
        canvas.moveTo(250 - 4, 250 - (this.state.outsideRadius + 5));
        canvas.lineTo(250 + 4, 250 - (this.state.outsideRadius + 5));
        canvas.lineTo(250 + 4, 250 - (this.state.outsideRadius - 5));
        canvas.lineTo(250 + 9, 250 - (this.state.outsideRadius - 5));
        canvas.lineTo(250 + 0, 250 - (this.state.outsideRadius - 13));
        canvas.lineTo(250 - 9, 250 - (this.state.outsideRadius - 5));
        canvas.lineTo(250 - 4, 250 - (this.state.outsideRadius - 5));
        canvas.lineTo(250 - 4, 250 - (this.state.outsideRadius + 5));
        canvas.fill();
}

easeOut = (t, b, c, d) => {
  let ts = (t/=d)*t;
  let tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

    render() {
        //console.log("RoulletteWheel's canvas context:",this.state.canvasContext)
        return ( 
            <div onClick={this.spin}>
                <canvas
                    ref = {this.canvasRef}
                    width={800}
                    height={600}
                /> 
            </div>
        )
    }
}

export default RouletteWheel

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
//  canvas.save();
//  canvas.font = 'bold 30px Helvetica, Arial';
//   var text = options[index]
//  canvas.fillText(text, 250 -canvas.measureText(text).width / 2, 250 + 10);
//  canvas.restore();
// }

// function easeOut(t, b, c, d) {
//   var ts = (t/=d)*t;
//   var tc = ts*t;
//   return b+c*(tc + -3*ts + 3*t);
// }

// drawRouletteWheel();