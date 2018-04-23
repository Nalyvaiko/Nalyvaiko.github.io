import React, { Component } from 'react';
import { string, func } from 'prop-types';
import countries from '../data';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFocus: -1
    }
  }

  componentDidMount() {
    const _this = this;

    document.addEventListener('click', function(e) {
      _this.closeAllLists(e.target);
    });

    document.querySelector('body').addEventListener('click', function(e) {
      if (e.target.className === 'matching-elm') {
        _this.closeAllLists();
        _this.props.handleChange(e.target.innerText);
      }
    });

  }

  onChange = (e) => {
    const val = e.target.value;
    const id = e.target.id;
    const inp = this.inp;

    this.closeAllLists();
    this.props.handleChange(val);

    if (!val) return false;
      const container = document.createElement('div');
      container.setAttribute('id', id + 'autocomplete-list');
      container.setAttribute('class', 'autocomplete-items');

      inp.parentNode.appendChild(container);

      for (let i = 0; i < countries.length; i++) {
        if (countries[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          const matchingElm = document.createElement('div');
          matchingElm.setAttribute('class', 'matching-elm');

          matchingElm.innerHTML = "<strong>" + countries[i].substr(0, val.length) + "</strong>";
          matchingElm.innerHTML += countries[i].substr(val.length);
          matchingElm.innerHTML += "<input type='hidden' value='" + countries[i] + "'>";

          container.appendChild(matchingElm);
        }
      }
  }
  onKeyDown = (e) => {
    let elm = document.getElementById(e.target.id + "autocomplete-list");
    if (elm) elm = elm.getElementsByTagName("div");
    if (e.keyCode == 40) {
      this.setState({ currentFocus: this.state.currentFocus + 1 });
      this.addActive(elm);
    } else if (e.keyCode == 38) {
      this.setState({ currentFocus: this.state.currentFocus - 1 });
      this.addActive(elm);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (this.state.currentFocus > -1) {
        if (elm) elm[this.state.currentFocus].click();
      }
    }
  }
  closeAllLists = (elmnt) => {
    const list = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < list.length; i++) {
      if (elmnt != list[i] && elmnt != this.inp) {
        list[i].parentNode.removeChild(list[i]);
      }
    }
  }
  removeActive = (active) => {
    for (let i = 0; i < active.length; i++) {
      active[i].classList.remove("autocomplete-active");
    }
  }
  addActive = (item) => {
    if (!item) return false;
    this.removeActive(item);
    if (this.state.currentFocus >= item.length) this.setState({ currentFocus: 0 });
    if (this.state.currentFocus < 0) this.setState({ currentFocus: item.length - 1 });
    item[this.state.currentFocus].classList.add("autocomplete-active");
  }

  render() {
    return (
      <input
        id="searchInput"
        type="text"
        className="search__input"
        placeholder="Enter your country"
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value={this.props.value}
        ref={el => this.inp = el}
      />
    );
  }
}

SearchInput.propTypes = {
  handleChange: func.isRequired,
  value: string.isRequired
}

export default SearchInput;
