import React from 'react';

class RealFlag extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            canRender: false,
        }
    }

    componentDidMount(){
        const result  = localStorage.getItem('hasVisited');
        const renderFlag = (result === 'true')? true : false;
        if(renderFlag){
            this.setState({canRender:true});
        }  
    }
    render() { 
        return ( 
            <>{(this.state.canRender)? <div>
                <p>NOVA{"{i_h4v3_c0m3_t0_b4rg4in}"}</p>
            </div> : 
                <div>
                <h3>There Are 14000605 Ways</h3>
                <h3>But This Is Not The Way</h3>
                </div>
        }</>
            
         );
    }
}
 
export default RealFlag;