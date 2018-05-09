import React from 'react';
import Winwheel from '../winwheel/Winwheel';
import calculatePrize, { prizes } from '../dummyData/winwheel';

export default class WinwheelPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prize: null,
            stopAt: 0,
            arguments: 4,
            wheel: null,
            wheelImage: null
        }
    }

    componentDidMount() {
        const wheelImage = new Image();
        const setPrize = calculatePrize();
        const segments = prizes.map((prize) => {
            return {
                text: prize.name
            }
        });
        wheelImage.onload = this.handleImageLoad;
        const wheel = new Winwheel({
            'canvasId': this.refs.canvas.id,
            'drawMode': 'image',
            'imageOverlay' : true,
            'numSegments'  : this.state.arguments, 
            'outerRadius' : 110,
            'centerX':149,
            'centerY': 155,
            'textOrientation': 'curved',
            'textAligment' : 'outer',
            'textFontFamily'  : 'Courier', 
            'textFontSize'    : 15,
            'segments': [
                ...segments
            ],
            'animation' :                 
            {
                'type'     : 'spinToStop',  
                'duration' : 5, 
                'spins'    : 8,
                'callbackFinished' : this.handleAlertPrize          
            }
        });
        this.setState(() => ({
                prize: setPrize.prize,
                stopAt: setPrize.stopAt,
                wheel,
                wheelImage
            }));
        wheelImage.src = 'http://res.cloudinary.com/dviy2q8nb/image/upload/c_scale,w_220/v1525845455/clipart_wheel_ugmvfv.png';
    }

    handleImageLoad = () => {
       this.setState((prevState) => {
            prevState.wheel.wheelImage = this.state.wheelImage
           return {
             wheel: prevState.wheel
           }
       }, () => {
            this.state.wheel.draw();
       });   
    }

    handleWheelSpin = () => {
        this.setState((prevState) => {
            prevState.wheel.animation.stopAngle = this.state.stopAt;
            return {
                wheel: prevState.wheel
            }
        }, () => {
            this.state.wheel.startAnimation();
        })
    }

    handleAlertPrize = () => {
        alert(this.state.prize.name)
    }

    render() {
        return (
            <div className='container container--img'>
            <div className='row no-border top-margin-large'>
                <h2 className='txt--title center-text'>Win Prize!</h2>
                <div className='image-container--canvas'>
                    <canvas id='my-canvas' ref='canvas' width='300' height='300'></canvas>
                </div>
                <div className='row no-border'>
                    <button 
                        onClick={this.handleWheelSpin}
                        className='btn pos-right'>Spin</button>
                </div>
            </div>
            </div>
        )
    }
}
