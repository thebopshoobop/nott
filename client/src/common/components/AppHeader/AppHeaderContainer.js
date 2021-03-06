import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogout } from './AppHeader.actions';
import AppHeader from './AppHeader';

class AppHeaderContainer extends PureComponent {
  render = () => <AppHeader onClickLogout={this.props._doLogout} />;
}

const mapDispatchToProps = (dispatch, props) => ({
  _doLogout: async () => {
    try {
      await doLogout();
      localStorage.removeItem('token');
      props.history.push('/');
    } catch (e) {
      console.log(e);
    }
  }
});

export default withRouter(
  connect(null, mapDispatchToProps)(AppHeaderContainer)
);
