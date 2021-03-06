import React,{Component} from 'react';

class CommentInput extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            content:''
        }
    }
    handleUserNameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
        // console.log(this.state.content);
    }
    handleSubmit(){
        if(this.props.onsubmit){
            const {username,content}=this.state;
            this.props.onsubmit({username,content});
        }
        // console.log(this.state.username,this.state.content);
        this.setState({content:''});
    }
    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                               onChange={this.handleUserNameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput;