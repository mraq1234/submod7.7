import {connect} from 'react-redux';
import AddComment from './AddComment';
import {addComment} from './actions'

const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(AddComment);