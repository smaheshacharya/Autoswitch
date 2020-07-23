import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItems:{
        text:'',
        key:''
      }
      
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }
  componentDidMount(){
    if(localStorage.getItem('items')){
    
    this.setState(
      {
        localdata: JSON.parse(localStorage.getItem('items'))
      
      }
    )
  }
  console.log("CDM")
  }
  handleInput(e){
    this.setState({
      currentItems:{
        text:e.target.value,
        key:Date.now()
      }
    })

  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItems;
    if(newItem.text != ""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItems:{
          text:'',
          key:''
        }
      })

    }
  }
deleteItem(key){
const filteredItems = this.state.items.filter(item => item.key !== key);
localStorage.setItem('items', JSON.stringify(filteredItems));
this.setState({
  items:filteredItems
})
  }
  componentWillUpdate(nextProps, nextState){
    
    localStorage.setItem('items',JSON.stringify(nextState.items));
    console.log("call before update");
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row">

        
      <div className="App">
      <header>
        <h1 className="heading">Enter your urls</h1>
        <form id="to-do-form" onSubmit={this.addItem}>
        <div className="form-group"><i className="fa fa-chrome"></i>
          <input className="form-control input-sm" type="text" placeholder="Enter url" value={this.state.currentItems.text} 
          onChange={this.handleInput}/>
          <button type="submit" className="btn btn-sm btn-default">Add</button>
          </div>
          <ListItems items = {this.state.items} deleteItem={this.deleteItem}></ListItems>
        </form>
        
      </header>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
