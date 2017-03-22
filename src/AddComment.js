import React from 'react';

class AddComment extends React.Component { 
    constructor(props){
        super(props);
    }
    handleAddComment(e) {
        e.preventDefault();
        const text = e.target.commentTxt.value;
        if (text.trim() === '') {
            e.target.commentTxt.value = 'write comment, please'
            e.target.commentTxt.select();
            return;
        }
        this.props.addComment(text);
        e.target.commentTxt.value = '';
        e.target.commentTxt.focus();
    }

    render() {
        return (
            <div className="page-header">
                <form className="form-inline text-center" onSubmit={ e => this.handleAddComment(e) }>
                    <input type="text" id="commentTxt" />
                    <input type="submit" value='Add comment' />
                </form>
            </div>
        )
    }
}   
export default AddComment;