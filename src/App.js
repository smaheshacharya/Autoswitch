import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
// import Background from './Background';

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
    // console.log("CDM");
    if(localStorage.getItem('items')== null)
    {
      const localData = null
    }
    else{
      const localData = localStorage.getItem('items');
      this.setState({
        items:JSON.parse(localData)
      })
    }
  
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
      localStorage.setItem('items',JSON.stringify(newItems));
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
localStorage.setItem('items',JSON.stringify(filteredItems));
this.setState({
  items:filteredItems
})

  }
  componentWillUpdate(nextProps, nextState){
    
    localStorage.setItem('items',JSON.stringify(nextState.items));
    // console.log("call before update");
  }
  validate = () => {
    let Emailerror= ""
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row">

        
      <div className="App">
      <header>
        <h1 className="heading">Enter your urls</h1>
    {/* <small style="color:red">{this.state.nameError}</small> */}
        <form id="to-do-form" onSubmit={this.addItem}>
        <div className="form-group"><i className="fa fa-chrome"></i>
          <input className="form-control input-sm" type="text" placeholder="Enter url" value={this.state.currentItems.text} 
          onChange={this.handleInput}/>
          <button type="submit" className="btn btn-sm btn-default">Add</button>
          </div>
          <ListItems items = {this.state.items} deleteItem={this.deleteItem}></ListItems>
          {/* <Background items = {this.state.items}></Background> */}
        </form>
        
      </header>
      </div>
      </div>
      <footer className="footer">
        <small className="small"><a href="https://www.alphateds.com" target="_blank" >&copy; Alphateds Technology</a></small>
      </footer>
      </div>
    );
  }
}

export default App;
