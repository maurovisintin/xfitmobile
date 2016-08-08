import {
  Animated,
  NavigationExperimental,
  Easing,
} from 'react-native';
import React, { PropTypes } from 'react';
import * as actions from '../../actions';

const { Header: NavigationHeader } = NavigationExperimental;

export function mapStateToProps(state) {
  return {
    navigationState: state.navigator,
    skills: state.skills.get('all'),
    activeSkill: state.skills.get('active')
  };
}

export function mapDispatchToProps(state) {
  return {
    goToSkillDetail: skill => {
      dispatch(actions.goToSkillDetail(skill));
    },
    goToSkillList: () => dispatch(actions.gotoSkillList())
  };
}

export function applyAnimation(pos, navState) {
  Animated.timing(pos, {
    toValue: navState.index,
    duration: 500,
    easing: Easing.bezier(0.36, 0.66, 0.04, 1),
  }).start();
}

export function renderHeader(props) {
  return (
    <NavigationHeader
      style={{backgroundColor: 'acqua' }}
      {...props}
      renderTitleComponent={renderTitle} />
  );
}

export function renderTitle({ scene }) {
  return (
    <NavigationHeader.Title
      textStyle={{ color: clrs.blue, fontWeight: '700', letterSpacing: 1 }}>
      {scene.navigationState.title.toUpperCase()}
    </NavigationHeader.Title>
  );
}

renderTitle.propTypes = {
  scene: PropTypes.object,
};
