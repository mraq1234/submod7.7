import React from 'react';

const AddComment = (props) => {  
    const handleAddComment = (e) => {
        e.preventDefault();
        const text = e.target.commentTxt.value;
        if (text.trim() === '') {
            e.target.commentTxt.value = 'write comment, please'
            e.target.commentTxt.select();
            return;
        }
        props.addComment(text);
        e.target.commentTxt.value = '';
        e.target.commentTxt.focus();
    }

    return (
        <div className="page-header">
            <form className="form-inline text-center" onSubmit={ e => handleAddComment(e) }>
                <input type="text" id="commentTxt" />
                <input type="submit" value='Add comment' />
            </form>
        </div>
    )
}   
export default AddComment;