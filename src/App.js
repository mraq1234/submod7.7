import React, {
  Component
} from 'react';
import CommentList from './CommentsListContainer';
import AddComment from './AddCommentContainer';

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