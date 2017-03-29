import React from 'react';

class EditCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        };
    }

    componentDidMount() {
        const inputElement = document.getElementById('commentTextInput');
        inputElement.select();
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <div className="row">
                <div className='col-xs-2'></div>
                <div className='col-xs-5 text-left'>
                    <form className="form-inline" onSubmit={e => this.props.onEditCommentFormSubmit(e)}>
                        <input id='commentTextInput' type='text' value={this.state.text} onChange={e => this.handleChange(e)} />
                        <input type='submit' value='Save' />
                    </form>
                </div>
                <div className='col-xs-5'></div>
            </div>
        )
    }
}
export default EditCommentForm;
    