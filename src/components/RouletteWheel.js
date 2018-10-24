import React, {Component} from 'react'
const options = ["Amirata", "Scar", "Gabe", "Kevin", "Tiga", "Eric", "Prince", "te","tde","tswe","twwe","twwe","twe","twwe"]

class RouletteWheel extends Component {

    constructor(props) {
        super(props)
        
        //creating the ref for my canvas using React
        this.canvasRef = React.createRef()

        //initializing the needed data that will run through my class
        this.state = {
            startAngle: 0,
            //creates each section of a circle depending on the length of array
            arc: Math.PI / (options.length / 2),
            //determines where to start by choosing random number between 10degrees and 20degrees
            spinAngleStart: 0,
            //the total time it will spin in seconds
            spinTimeTotal: 0,
            spinTime: 0,
            spinTimeOut: null,
            canvasContext: null
        }
    }
    
    componentDidMount() {
        //getting access to my canvas method and setting it equal to canvas
        const canvas = this.canvasRef.current.getContext('2d')
        console.log("what is canvas", canvas)
        //calling my draw RouletteWheel function to draw out my wheel and calling the canvas variable
        this.drawRouletteWheel(canvas)
        //this will set the state of my canvas so that my other functions can call canvas attriubutes and functions 
        this.setState({
            canvasContext: canvas
        })
    }

    drawRouletteWheel = (canvas) => {
        //console.log("drawing the canvas")
            //these are measured in radians
            let outsideRadius = 200
            let textRadius = 160
            let insideRadius = 125
            canvas.clearRect(0,0,500,500)
            canvas.lineWidth = 2
            
            for(let i = 0; i < options.length; i++) {
                canvas.strokeStyle = "black"
                canvas.font = 'bold 20px Helvetica, Arial'
                let angle = this.state.startAngle + i * this.state.arc
                canvas.fillStyle = "#DDBA4F"
            
                canvas.beginPath()
                canvas.arc(250, 250, outsideRadius, angle, angle + this.state.arc, false)
                canvas.arc(250, 250, insideRadius, angle + this.state.arc, angle, true)
                canvas.stroke()
                canvas.fill()
            
                canvas.save()
                canvas.shadowOffsetX = -1
                canvas.shadowOffsetY = -1
                canvas.shadowBlur    = 0
                canvas.shadowColor   = "rgb(220,220,220)"
                canvas.fillStyle = "black"
                canvas.translate(250 + Math.cos(angle + this.state.arc / 2) * textRadius, 
                                250 + Math.sin(angle + this.state.arc / 2) * textRadius)
                canvas.rotate(angle + this.state.arc / 2 + Math.PI / 2)
                var text = options[i]
                canvas.fillText(text, -canvas.measureText(text).width / 2, 0)
                canvas.restore() 

        //Drawing Arrow
        canvas.fillStyle = "black"
        canvas.beginPath()
        canvas.moveTo(250 - 4, 250 - (outsideRadius + 5))
        canvas.lineTo(250 + 4, 250 - (outsideRadius + 5))
        canvas.lineTo(250 + 4, 250 - (outsideRadius - 5))
        canvas.lineTo(250 + 9, 250 - (outsideRadius - 5))
        canvas.lineTo(250 + 0, 250 - (outsideRadius - 13))
        canvas.lineTo(250 - 9, 250 - (outsideRadius - 5))
        canvas.lineTo(250 - 4, 250 - (outsideRadius - 5))
        canvas.lineTo(250 - 4, 250 - (outsideRadius + 5))
        canvas.fill()
        }
      }

    spin = () => {
        this.setState({
            spinTimeTotal: Math.random() * 3 + 4 * 1000,
            spinAngleStart: Math.random() * 10 + 10
        }, () => this.rotateWheel())
    }

    rotateWheel = () => {
        this.setState(prevState => ({
            spinTime: prevState.spinTime + 100
        }), () => {
            if(this.state.spinTime >= this.state.spinTimeTotal) {
                this.stopRotateWheel()
            }else{
                let spinAngle = this.state.spinAngleStart - this.easeOut(this.state.spinTime, 0, this.state.spinAngleStart, this.state.spinTimeTotal)
                console.log("trying to move it", spinAngle)
                this.setState(prevState => ({startAngle: prevState.startAngle + spinAngle * Math.PI/180}), () => this.drawRouletteWheel(this.state.canvasContext))
                this.setState({spinTimeout: setTimeout(this.rotateWheel(), 30)})
            }
        })
    }
    
    stopRotateWheel = () => {
        this.setState({
            spinTimeout: 0,
            spinTime: 0
        }, () => {
            let degrees = this.state.startAngle * 180 / Math.PI + 90
            let arcd = this.state.arc * 180 / Math.PI
            let index = Math.floor((360 - degrees % 360) / arcd)
            this.state.canvasContext.save()
            let text = options[index]
            this.state.canvasContext.fillText(text, 250 - this.state.canvasContext.measureText(text).width / 2, 250 + 10)
            this.state.canvasContext.restore()
            console.log("canvas degrees", degrees, arcd, index)
        })
    }
    
    
    easeOut = (t, b, c, d) => {
        let ts = (t/=d)*t;
        let tc = ts*t;
        return b+c*(tc + -3*ts + 3*t);
    }
    
    render() {
        //console.log("the spin has started", this.state.spinTimeTotal)
        return ( 
            <div>
                <input onClick={this.spin} type="button" value="spin" floated='left'/>
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
