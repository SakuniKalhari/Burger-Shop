import React,{Component} from 'react';
import BurgerBuilder from "./BurgerBuilder";

class ShowBurgerOnList extends Component{
    state={
        click:false
    }
    onClick=(e)=>{
        this.setState({
            click:!this.state.click
        })
    }
    render(){
    let BurgerB=""
    if(this.state.click){
        BurgerB=<BurgerBuilder />
    }   
    return(
        <div className="Show">
            <h1 onClick={this.onClick}>{this.props.name}</h1>
            {BurgerB}
        </div>
    )
    }
}

export default ShowBurgerOnList;