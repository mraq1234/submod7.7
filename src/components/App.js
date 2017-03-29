import React, {
  Component
} from 'react';
import CommentList from '../containers/CommentsListContainer';
import AddComment from '../containers/AddCommentContainer';


class App extends Component {
  render() {
    return ( 
      <div>
        <AddComment />
        <CommentList />
      </div>
    );
  }
}

export default App;