import React, { Component } from "react";


class Counter extends Component {
  state = {
   // value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
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
    console.log(this.props.children,'prop-child'); // properties of counter object
    // React.createElement('div');
    return (
      <div>
        <div>
          {this.props.children}
         <img src={this.state.imageUrl} alt="img exist"/>
        </div>
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
          <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm ml-2">-</button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">delete</button>
        </div>

        <div>
          {this.state.tags.length === 0 && <p>please create a new tag</p>}
          {this.rendeTags()}
        </div>
      </div>
    );
  }

  rendeTags() {
    //like conditional if & else methods stay here
    //console.log(this.props.counter.id,'prop-id');

    if (this.state.tags.length === 0) return <p>No tags here!</p>;
    return (
      <ul>
        <li>
          {this.state.tags.map(tag => (
            <li key={tag}> {tag} </li>
          ))}{" "}
        </li>
      </ul>
    );
  }

  // handleIncrement = product => {
  //   console.log(product,'event-id');
  //   // use arrow function to bind event handlers,normal function wont work
  //   // this.state.count++;
  //   this.setState({ value: this.state.value + 1 });
  // };


  getBadgeClasses() {
    let classes = "badge mr-4  ml-1 mt-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
