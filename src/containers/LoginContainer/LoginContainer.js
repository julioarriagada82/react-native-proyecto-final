import { connect } from 'react-redux'
import {login as loginAction} from '../../redux/actions/user/user';
import {
  isLoginValidSelector,
  loginLoadingSelector,
} from '../../redux/selectors/loginSelector';
import {Login as formLogin} from '../../screen/Login/Login'

const mapStateToProps = (state) => ({
  loginIsValid: isLoginValidSelector(state),
  loading: loginLoadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  loginIn: ({user, password}) => dispatch(loginAction({user, password})),
});

export default connect(mapStateToProps, mapDispatchToProps)(formLogin)