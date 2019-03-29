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
    const { categories } = this.props;

    return (
      <React.Fragment>
        <h3 className="ui dividing header">Categories</h3>

        {categories.map(category => (
          <div
            className="ui selection animated list category items"
            key={category.id}
          >
            <div className="category item">
              <div className="content">
                <div className="header">{category.name}</div>
              </div>
            </div>
          </div>
        ))}
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
