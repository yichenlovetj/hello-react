import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ToDoApp extends React.Component{
    constructor(props) {
      super(props);
        this.state={
        items:[],
        input: ""
      };
    } 
   
    addItem(){
    let itemArray= this.state.items.slice();
    let inputText= this.state.input;
     itemArray.push(
      {
        done: false,
        text: inputText,
        key: Date.now()
      }
    );  
     //console.log( itemArray);
     this.setState({
       items: itemArray
     });
      
    }

    handleChange(e) {
    this.setState({ input: e.target.value });
    }
    
    
//    toggleTask(todo) {
//           let task = _.find(this.state.items,todo);
//         task.done = !task.done;
//          this.setState({items: this.state.items});
//     }
    
    render() 
    {
     return (
     <div>
  <label>New TODO:</label> <input type="text" onChange={this.handleChange.bind(this)}/> <button onClick={()=>this.addItem()}>+</button>
         <ToDoItems
          todoListItems={this.state.items}
        //  toggle={this.toggleTask.bind(this)}
           />
     </div>
     )
      
    }
    
  }
  
  class ToDoItems extends React.Component{
    
    render() {
       var todoEntries = this.props.todoListItems;
    //   this.props.toggle(this.props.item);
    console.log(todoEntries);

      function createTasks(item) {
     return <TodoCheck 
              items={todoEntries}
              done={item.done}
              key= {item.key}
              value={item.text}
              />
        
      } 
      
      var listItems = todoEntries.map(createTasks);
      
     return (
     <ul>
       {listItems}
     </ul>
     )
      
    }
    
  }
  
  class TodoCheck extends React.Component {

       done(event) {
          event.preventDefault();
        //    this.props.toggle(this.props.item);
        //console.log(this.props.items);
        var array =this.props.items; // make a separate copy of the array
        var index = array.indexOf(event.target.value)
        array.splice(index, 1);
        this.setState({ items: array});
       }
  
      render() {
       // console.log(this.state);
          if (this.props.done) {
              return (
                  <li>
                      <del>{this.props.value}</del> <a href="" onClick={this.done.bind(this)}>x</a>
                  </li>
              );
          } else {
              return (
                  <li>
                      {this.props.value} <a href="" onClick={this.done.bind(this)}>x</a>
                  </li>
              );
          }
      }
  }
  
  
  ReactDOM.render(
    <ToDoApp/>,
    document.getElementById('root')
  )
  