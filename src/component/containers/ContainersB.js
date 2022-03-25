import { connect } from 'react-redux';
import ComponentA from '../ComponentA';
import { handleInput } from '../actions/actions'


const mapStateToProps = (state) => ({
    data: state.inputData.inputval

});

const mapDispatchToProps = (dispatch) => ({
    handleInputVal: data => dispatch(handleInput(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA)