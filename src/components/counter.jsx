import React, { Component } from "react";


class Counter extends Component {
  state = {
    value: this.props.value,
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
    console.log(this.props.children);
    // React.createElement('div');
    return (
      <div>
        <div>
          {this.props.children}
          <img src={this.state.imageUrl} />
        </div>
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={(product) => this.handleIncrement(product)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
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

    console.log(this.props,'props');

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

  handleIncrement = product => {
    console.log(product,'event-id');
    // use arrow function to bind event handlers,normal function wont work
    // this.state.count++;
    this.setState({ value: this.state.value + 1 });
  };



  getBadgeClasses() {
    let classes = "badge mr-4  ml-1 mt-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
