import {connect} from 'react-redux';
import CommentList from '../components/CommentList';

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);