import React, { Component } from "react";

import { connect } from "react-redux";

import { getCategories } from "../../actions/categoryActions";

import PropTypes from "prop-types";

class Category extends Component {
  static propTypes = {
    getCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  };

  componentDidMount = () => {
    this.props.getCategories();
  };

  render() {
    const { categories, onSelect } = this.props;

    return (
      <React.Fragment>
        <h3 className="ui dividing header">Categories</h3>
        <div className="ui selection animated list category items">
          {categories.map(category => (
            <div className="category item" key={category.id}>
              <div className="content">
                <a href="#" onClick={() => onSelect(category.id)}>
                  <div className="header">{category.name}</div>
                </a>
              </div>
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
