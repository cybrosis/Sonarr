import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchRestrictions, deleteRestriction } from 'Store/Actions/settingsActions';
import { fetchTags } from 'Store/Actions/tagActions';
import createTagsSelector from 'Store/Selectors/createTagsSelector';
import Restrictions from './Restrictions';

function createMapStateToProps() {
  return createSelector(
    (state) => state.settings.restrictions,
    createTagsSelector(),
    (restrictions, tagList) => {
      return {
        ...restrictions,
        tagList
      };
    }
  );
}

const mapDispatchToProps = {
  fetchRestrictions,
  deleteRestriction,
  fetchTags
};

class RestrictionsConnector extends Component {

  //
  // Lifecycle

  componentWillMount() {
    this.props.fetchRestrictions();
    this.props.fetchTags();
  }

  //
  // Listeners

  onConfirmDeleteRestriction = (id) => {
    this.props.deleteRestriction({ id });
  }

  //
  // Render

  render() {
    return (
      <Restrictions
        {...this.props}
        onConfirmDeleteRestriction={this.onConfirmDeleteRestriction}
      />
    );
  }
}

RestrictionsConnector.propTypes = {
  fetchRestrictions: PropTypes.func.isRequired,
  deleteRestriction: PropTypes.func.isRequired,
  fetchTags: PropTypes.func.isRequired
};

export default connect(createMapStateToProps, mapDispatchToProps)(RestrictionsConnector);
