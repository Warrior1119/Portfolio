import React, { Component } from "react";
import requireAuth from "../requireAuth";
import { connect } from 'react-redux';
import * as actions from "../../actions";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description
    };
  }
  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleChangeDesc = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  handleSave = () => {
    this.props.updateTitle(this.state.title);
    this.props.updateDescription(this.state.description);
  }

  render() {
    return (
      <div className="container mx-auto my-10">
        <div>
          <div className="w-full px-3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Title:
            </label>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              value={this.state.title}
              onChange={this.handleChangeTitle}
              />
          </div>
          <button onClick={this.handleSave}>Save</button>
        </div>
        <div>
          <div className="w-full px-3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Description:
            </label>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              value={this.state.description}
              onChange={this.handleChangeDesc}
              />
          </div>
          <button onClick={this.handleSave}>Save</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.intro.title,
    description: state.intro.description
  }
}

export default connect(mapStateToProps, actions)(requireAuth(Admin));
