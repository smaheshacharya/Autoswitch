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
    const localData = localStorage.getItem('items')
    this.setState({
      items:localData
    })
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
      // localStorage.setItem('items',JSON.stringify(newItems));
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
this.setState({
  items:filteredItems
})
  }
  render(){
    return(
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
    );
  }
}

export default App;
