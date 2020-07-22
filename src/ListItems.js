import React from 'react';
import './ListItems.css';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item=>{

        return  <div className="custom alert alert-danger" role="alert" key={item.key}>
        {item.text}
        <button type="button" className="close" aria-label="Close" >
        <span aria-hidden="true" onClick={()=> props.deleteItem(item.key)}>&times;</span>
        </button>
      </div>
    })
    return(
    <div>{listItems}</div>
    )
}
export default ListItems;