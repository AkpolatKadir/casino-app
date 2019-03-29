import React, { Component } from "react";

import { connect } from "react-redux";

import { getCategories } from "../../actions/categoryActions";

import PropTypes from "prop-types";
import classnames from "classnames";

class Category extends Component {
  static propTypes = {
    getCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  };

  state = {
    selected: 0
  };

  componentDidMount = () => {
    this.props.getCategories();
  };

  onSelect = categoryId => {
    const { selected } = this.state;

    if (selected !== categoryId) {
      this.setState({ selected: categoryId });
      this.props.onSelect(categoryId);
    }
  };

  render() {
    const { selected } = this.state;
    const { categories } = this.props;

    return (
      <React.Fragment>
        <h3 className="ui dividing header">Categories</h3>
        <div className="ui selection animated list category items">
          {categories.map(category => (
            <div
              className={classnames("category item", {
                active: selected === category.id
              })}
              key={category.id}
            >
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  this.onSelect(category.id);
                }}
              >
                <div className="content">
                  <div className="header">{category.name}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.data,
  error: state.categories.error
});

export default connect(
  mapStateToProps,
  { getCategories }
)(Category);
