import { connect } from 'react-redux'
import {logout} from '../../redux/actions/login/login';
import MenuForm from '../../screen/Menu/Menu'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuForm)