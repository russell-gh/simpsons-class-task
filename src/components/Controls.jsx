import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_SORT_TYPE, SET_SEARCH_TERM } from "../redux/types";

class Controls extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <>
        <select
          onChange={(e) => {
            dispatch({
              type: SET_SORT_TYPE,
              payload: e.target.value,
            });
          }}
        >
          <option value=""></option>
          <option value="characterAZ">A-Z - character</option>
          <option value="characterZA">Z-A - character</option>
          <option value="quoteAZ">A-Z - quote</option>
          <option value="quoteZA">Z-A - quote</option>
        </select>
        <input
          type="text"
          onInput={(e) => {
            dispatch({
              type: SET_SEARCH_TERM,
              payload: e.target.value,
            });
          }}
        />
      </>
    );
  }
}

export default connect()(Controls);
