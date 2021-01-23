import { connect } from 'react-redux'
import {isLoggedIn} from '../../redux/actions/login/login';
import {
    isLoginValid as isLoginValidSelector,
  } from '../../redux/selectors/login/login';
import RootNavigation from '../../routes/RootNavigation'

const mapStateToProps = (state) => {
    return {
      loggedIn: isLoginValidSelector(state),
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    isCurrentlyLoggedIn: () => dispatch(isLoggedIn()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation)