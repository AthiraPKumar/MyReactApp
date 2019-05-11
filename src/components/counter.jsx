import React, { Component } from "react";


class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1','tag2','tag3'],
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    // React.createElement('div');
    return (
      <div>
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </div>

        <div>
          {this.state.tags.length === 0 && <p>please create a new tag</p>}
         {this.rendeTags()}
         <img src={this.state.imageUrl}/>
        </div>
      </div>
    );
  }

  rendeTags(){
    //like conditional if & else methods stay here

    if(this.state.tags.length === 0) return <p>No tags here!</p>;

    return  <ul><li>{this.state.tags.map(tag => <li key={tag}>  {tag} </li>)} </li></ul>
  }

  handleIncrement = () => {
    // use arrow function to bind event handlers,normal function wont work

    this.setState({ count: this.state.count + 1 });
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

 

}

export default Counter;
