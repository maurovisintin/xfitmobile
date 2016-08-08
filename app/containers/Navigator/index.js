import {Map} from 'immutable';
import {NavigationExperimental, View, StatusBar} from 'react-native';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import SkillList from '../SkillList';
import SkillDetails from '../SkillDetails';
import {ROUTE_IDS} from '../../constants';

import * as helpers from './navigator-helpers';

const {
  AnimatedView: NavigationAnimatedView,
  Card: NavigationCard,
  Header: NavigationHeader,
} = NavigationExperimental;

class Navigator extends Component {

  componentWillMount() {
    this.props.goToSkillList();
  }

  _getActiveScene = (navigationState) => {
    switch(navigationState.key) {
      case ROUTE_IDS.SKILL_DETAIL:
        return <SkillDetails url={navigationState.url} />;
      default:
        return <SkillList />;
    }
  }

  _renderCard = (props) => (
    <NavigationCard
      {...props}
      key={props.scene.navigationState.key}
      renderScene={this._renderScene} />
  )

  _renderScene = ({ scene: { navigationState } }) => {
    const activeScene = this._getActiveScene(navigationState);

    return (
      <View style={{ flex: 1, marginTop: NavigationHeader.HEIGHT }}>
        <StatusBar barStyle="default" />
        { activeScene }
      </View>
    );
  }

  render() {
    const { navigationState, onNavigate } = this.props;

    return (
      <NavigationAnimatedView
        navigationState={navigationState}
        style={{ flex: 1 }}
        onNavigate={onNavigate}
        renderOverlay={helpers.renderHeader}
        applyAnimation={helpers.applyAnimation}
        renderScene={this._renderCard}
      />
    );
  }
}

Navigator.propTypes = {
  navigationState: PropTypes.object,
  onNavigate: PropTypes.func,
  goToSkillList: PropTypes.func,
  activeSkill: PropTypes.instanceOf(Map),
};

export default connect(
  helpers.mapStateToProps,
  helpers.mapDispatchToProps,
)(Navigator);
