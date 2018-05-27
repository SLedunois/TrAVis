import React, { Component } from "react";
import { PropTypes } from "prop-types";

import ArrowDownIcon from "../../icons/ArrowDown";
import CloseIcon from "../../icons/Close";

import styles from "./styles.css";

class Select extends Component {
  componentWillMount() {
    const selected =
      this.props.objects.length > 0 ? this.props.objects[0] : null;
    this.setState({
      objects: this.props.objects,
      keyProp: this.props.keyProp,
      selected,
      opened: false,
      disabled: this.props.disabled || this.props.objects.length > 0
    });
  }

  handleClick(object) {
    this.setState({
      objects: this.state.objects,
      keyProp: this.state.keyProp,
      selected: object,
      opened: !this.state.opened,
      disabled: this.state.disabled
    });
    this.props.onChange(object);
  }

  toggleOptions() {
    this.setState({
      objects: this.state.objects,
      keyProp: this.state.keyProp,
      selected: this.state.selected,
      opened: !this.state.opened,
      disabled: this.state.disabled
    });
  }

  render() {
    const openedOptions = this.state.opened ? styles.opened : "";
    const openedButton = this.state.opened ? styles.buttonOpened : "";
    return (
      <div className={`${this.props.className} ${styles.selectContainer}`}>
        <button
          className={`${styles.select} ${openedButton} uppercase pointer`}
          onClick={() => this.toggleOptions()}
        >
          <span>
            {this.state.selected !== null ? this.state.selected.name : ""}
            {this.state.opened ? <CloseIcon /> : <ArrowDownIcon />}
          </span>
        </button>
        <ul className={`${styles.options} ${openedOptions} uppercase pointer`}>
          {this.state.objects.map(object => {
            const { name, id } = object;
            return this.state.selected[this.state.keyProp] !==
              object[this.state.keyProp] ? (
              <li key={id} onClick={() => this.handleClick(object)}>
                {name}
              </li>
            ) : null;
          })}
        </ul>
      </div>
    );
  }
}

Select.propTypes = {
  objects: PropTypes.arrayOf(PropTypes.object),
  keyProp: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

Select.defaultProps = {
  objects: [],
  keyProp: "id",
  disabled: false,
  className: ""
};

export default Select;
