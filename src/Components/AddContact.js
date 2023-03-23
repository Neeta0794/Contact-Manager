import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the feilds are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main text container addContact">
        <form className="ui form" onSubmit={this.add}>
          <h2 className="ui dividing header padded">Add Contact</h2>
          <div className="two fields">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              ></input>
            </div>

            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              ></input>
            </div>
          </div>
          <button className="ui black button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
