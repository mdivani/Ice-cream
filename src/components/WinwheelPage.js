import React from 'react';
import Winwheel from '../winwheel/Winwheel';
import { prizes, randomPrize, fetchImage } from '../dummyData/winwheel';
import LoadingPage from './LoadingPage';

export default class WinwheelPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prize: null,
            stopAt: 0,
            arguments: 4,
            wheel: null,
            wheelImage: null,
            canvasWidth: 0,
            isLoaded: false,
            isImageLoaded: false
        }
    }

    componentDidMount() {
        //set image width to window size 90%
        this.setCanvasWidth();
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

    setCanvasWidth = () => {
        let canvasWidth = (
            window.screen.width < window.screen.height ? window.screen.width : window.screen.height
        ) * .9;
        canvasWidth = canvasWidth > 350 ? 350 : canvasWidth;
        this.setState(() => ({
            canvasWidth
        }), () => {
            //simulates random prize calculation on server returns response after 1.5s
            randomPrize().then((response) => {
                this.setState(() => ({ isLoaded: true}));
                this.createWheel(response);
            });
        });
    }

    createWheel = (prize) => {

        const wheelImage = new Image();
        wheelImage.onload = this.handleImageLoad;

        //get prizes from server
        const setPrize = prize;
        const segments = prizes.map((prize) => {
            return {
                'text': prize.name
            }
        });

        //wheel constructor
        const wheel = new Winwheel({
            'canvasId': this.refs.canvas.id,
            'drawMode': 'image',
            'imageOverlay' : true,
            'numSegments'  : this.state.arguments, 
            'outerRadius' : 250,
            'drawText': true, 
            'textFontFamily': 'arial',
            'textAlignment': 'outer',
            'textOrientation': 'curved',
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
            }), () => {
                //check that prize is set correctly before spin
                console.log('prize to win set before spin', this.state.prize.name);
                //simulates image load from server, receives response after .5s
                fetchImage().then((response) => {
                    wheelImage.src = response;
                    this.setState(() => ({isImageLoaded: true}));
                });
            });
    }

    //start spinning will on button click
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

    //display prize in alert window
    handleAlertPrize = () => {
        alert('You won ' + this.state.prize.name)
    }

    render() {
        return (
            this.state.isLoaded ?
            <div className='container'>
                <div className='row--wheel no-border top-margin-large'>
                    <div className='col-wheel--1'>
                        <button 
                            disabled={!this.state.isImageLoaded}
                            onClick={this.handleWheelSpin}
                            className='btn-spin pos-left'>Spin
                        </button>
                    </div>
                    <div className='col-wheel--2'>
                        <div 
                        className={this.state.isImageLoaded && 'image-container--canvas'}>
                            <canvas
                                className='image-container--canvas__canvas'
                                height='502'
                                width='502'
                                id='my-canvas' 
                                ref='canvas'>
                            </canvas>
                           { this.state.isImageLoaded &&
                            <img 
                            className='pointer'
                            src='http://res.cloudinary.com/dviy2q8nb/image/upload/c_scale,w_50/v1525926082/basic_pointer_ekevai.png' 
                            />}
                        </div>
                    </div>
                </div>
            </div> :
            <LoadingPage />
        )
    }
}
