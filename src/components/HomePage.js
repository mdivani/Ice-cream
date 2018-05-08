import React from 'react';
import IceCream from './IceCream';
import ContentPage from './ContentPage';
import UserInfo from './UserInfo';
import { flavors} from '../dummyData/data';
import { userData } from '../dummyData/data';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flavors: flavors,
            totalSelected: userData.flavors.length,
            selectedFlavors: [],
            newFlavors: [],
            credits: userData.credits,
            percent: 100,
            style: {  
                    clipPath: `polygon(0 100%, 100% 100%, 100% 100%, 0 100%)`,
                    WebkitClipPath: `polygon(0 100%, 100% 100%, 100% 100%, 0 100%)`
            }
        }
    }

    componentDidMount() {
        if(userData.flavors.length > 0) {
            const totalFlavors = this.state.flavors.reduce((accu, value) => {
                return accu + value.options.length;
            }, 0);
            const percent = 100 - Math.floor(this.state.totalSelected/totalFlavors * 100);
            this.setState(() => ({
                selectedFlavors: userData.flavors.map((item) => {
                    return item;
                }),
                percent
            }));
            this.handleImageStyle(percent);
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.totalSelected !== this.state.totalSelected) {
            const totalFlavors = this.state.flavors.reduce((accu, value) => {
                return accu + value.options.length;
            }, 0);
            const percent = 100 - Math.floor(this.state.totalSelected/totalFlavors * 100);
            this.setState(() => ({ percent }));
            this.handleImageStyle(percent);
        }
    }

    handleSelectedFlavor = (flavor) => {
        if(this.state.credits > 0 && flavor.selected < 3) {
            this.setState((prevState) => {
                return {
                    selectedFlavors: prevState.selectedFlavors.map((selectedFlavor) => {
                        if(selectedFlavor.flavor === flavor.flavor) {
                            selectedFlavor.selected++;
                        }
                        return selectedFlavor;
                    }),
                    credits: prevState.credits - 1,
                    totalSelected: prevState.totalSelected + 1
                }
            });

        } else if(flavor.selected === 3) {
            this.setState((prevState) => {
                return {
                    selectedFlavors: prevState.selectedFlavors.map((selectedFlavor) => {
                        if(selectedFlavor.flavor === flavor.flavor) {
                            selectedFlavor.selected = 0;
                        }
                        return selectedFlavor;
                    }),
                    credits: prevState.credits + 3,
                    totalSelected: prevState.totalSelected - 3
                }
            });           
        }
    }

    handleNewFlavor = (flavor) => {
        if(this.state.credits > 0 && !flavor.isNew) {
            flavor.selected = flavor.selected + 1;
            this.setState((prevState) => ({
                newFlavors: [...prevState.newFlavors, flavor],
                credits: prevState.credits - 1,
                totalSelected: prevState.totalSelected + 1
            }));
        }
        else if(flavor.selected === 3 && flavor.isNew) {
            this.setState((prevState) => {
               return {
                newFlavors: prevState.newFlavors.filter((newFlavor) => {
                   return newFlavor.flavor !== flavor.flavor
                }),
                credits: prevState.credits + 3,
                totalSelected: prevState.totalSelected - 3
            }});
        } 
        else if(this.state.credits > 0 && flavor.isNew) {
            this.setState((prevState) => {
                return {
                    newFlavors: prevState.newFlavors.map((newFlavor) => {
                    if(newFlavor.flavor === flavor.flavor) {
                        newFlavor.selected++;
                    }
                    return newFlavor;
                 }),
                 credits: prevState.credits - 1,
                 totalSelected: prevState.totalSelected + 1
             }});
        }
    }

    handleImageStyle = (percent) => {
        const style = {
            clipPath: `polygon(0 ${percent}%, 100% ${percent}%, 100% 100%, 0 100%)`,
            WebkitClipPath: `polygon(0 ${percent}%, 100% ${percent}%, 100% 100%, 0 100%)`
        }
        this.setState(() => ({ style }))
    }

    render() {
        return  (
            <div className='container'>
            <header className='container__header'>
             <nav role='navigation'>
                <div className='wrapper--nav'>
                <IceCream 
                    style={this.state.style}
                    />
                <UserInfo 
                    totalSelected={this.state.totalSelected}
                    credits={this.state.credits} />
                </div>
             </nav>
            </header>
                <ContentPage 
                    newFlavors={this.state.newFlavors}
                    selectedFlavors={this.state.selectedFlavors}
                    handleSelectedFlavor={this.handleSelectedFlavor}
                    handleNewFlavor={this.handleNewFlavor}
                    totalSelected={this.state.totalSelected}
                    credits={this.state.credits}
                    flavors={this.state.flavors}/>
            </div>
        )
    }
}

export default HomePage;