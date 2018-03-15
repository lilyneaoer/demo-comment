import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css';

class CommentApp extends Component{
    constructor(){
        super()
        this.state={comments:[]}
    }

    handleSubmitComment (comment){
        this.state.comments.push(comment)
        // 卡在这里了
        // this.setState({
        //     comments: this.state.comments
        // })
        //console.log(comment)
    }

    render(){
        return(
            <div className="wrapper">
                <CommentInput
                  onSubmit={this.handleSubmitComment(this)}/>
                <CommentList />
            </div>
        )
    }
}

export default CommentApp;