import React,{Component} from 'react';
import ShowBurgerOnList from './ShowBurgerOnList';
import './ShowBurgerOnList.css';


class BurgerHome extends Component{
    state={
        burgers:[],
        name:'',
        count:0
    }
    onChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    onClick=(e)=>{
        console.log(this.state.name)
        const burger={
            id:this.state.count,
            name:this.state.name
        }
        this.setState({
            burgers:[...this.state.burgers,burger],
            name:'',
            count:this.state.count+1
        })
    }
    render(){
        const burgerList=this.state.burgers.map((burger)=><ShowBurgerOnList key= {burger.id} name={burger.name} />)
        return(
            <div >
                <h1>Burger Menu</h1>
                <input onChange={this.onChange} name="name" type="text" value={this.state.name}/>
                <button onClick={this.onClick}>Add Burger</button>
                {burgerList}
            </div>
        )
    }
}

export default BurgerHome;