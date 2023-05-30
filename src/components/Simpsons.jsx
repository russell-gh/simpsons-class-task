import React, { Component } from "react";
import Character from "./Character";
import Controls from "./Controls";
import { connect } from "react-redux";
import { sort } from "../utils/sort";

class Simpsons extends Component {
  render() {
    const { simpsons, sortType, searchTerm } = this.props;

    let _simpsons = [...simpsons];

    //remove one not needed
    if (searchTerm) {
      _simpsons = _simpsons.filter((item) => {
        return item.character.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    //sort by user choice
    _simpsons = sort(_simpsons, sortType);

    return (
      <>
        <Controls />

        {_simpsons.length === 0 && <p>Sorry, no results!</p>}

        {_simpsons.map((item, index) => {
          return <Character item={item} key={item.id} />;
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    sortType: state.sortType,
    simpsons: state.simpsons,
    searchTerm: state.searchTerm,
  };
}

export default connect(mapStateToProps)(Simpsons);
