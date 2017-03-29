import React from 'react';
import EditCommentForm from '../EditCommentForm'
import './Comment.css'

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdited: false, 
            text: this.props.text
        };
        this.handleEditComment = this.handleEditComment.bind(this);
    }

    startEditComment(){
        this.setState({isEdited: true});
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleEditComment(e) {
        e.preventDefault();
        const newText = e.target.commentTextInput.value;
        if (newText.trim() === ''){
            e.target.commentTextInput.value = this.props.text;
        } else {
            this.props.editComment(this.props.id, e.target.commentTextInput.value)
        }
        this.setState({isEdited: false});
    }

    render() {
        return this.state.isEdited === true
            ? this.renderEditForm()
            : this.renderComment();
    }

    renderEditForm() {
        return (
            <EditCommentForm
                onEditCommentFormSubmit={this.handleEditComment}
                text={this.props.text}
            />
        )
    }

    renderComment() {
        return (
            <li className="list-unstyled">
                <div className='commentContainer'>
                    <div className='row'>
                        <div className='col-xs-2'></div>
                        <div className='col-xs-5'>
                            <span className="commentText">{this.props.text}</span>
                        </div> 
                        <div className='col-xs-5'>
                            votes: {this.props.votes}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2'></div>
                        <div className='col-xs-5 text-left'>
                            <button className="btn btn-default btn-xs" onClick={() => this.startEditComment()}>
                                Edit
                            </button>&nbsp;
                            <button className="btn btn-default btn-xs" onClick={() => this.props.removeComment(this.props.id)}>
                                Remove
                            </button>
                        </div>
                        <div className='col-xs-5 text-left'>
                            <button className="btn btn-default btn-xs" onClick={() => this.props.thumbUpComment(this.props.id)}>
                                <span className="glyphicon glyphicon-thumbs-up"></span>
                            </button>&nbsp; 
                            <button className="btn btn-default btn-xs" onClick={() => this.props.thumbDownComment(this.props.id)}>
                                <span className="glyphicon glyphicon-thumbs-down"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Comment;