import React,{Component} from 'react';
import Comment from './Comment';

class CommentList extends Component{
    static defaultProps ={comments:[]}
    render(){
        // 测试数据
        // const comments=[
        //     {username:'Jerry',content:'hello'},
        //     {username:'Tom',content:'kitty'},
        //     {username:'Lily',content:'byebye'}
        // ]
        return(
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} />
                )}
            </div>
        )
    }
}

export default CommentList;