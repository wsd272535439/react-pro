import React, { Component, PropTypes } from 'react'//import { render } from 'react-dom';
import {connect} from 'react-redux'
import {fetchData,Receive_data} from '../actions/Actions'
import styles from '../../css/FindCss.css';
import FindFirstCell from './ViewComponent/FindFirstCell'
class App extends Component{
    //render(<div>Hello</div>, rootElement)
    constructor(props){
        super(props)
        this.state={
            data:[1,2,3,4,5,6]
        }
    }
    //ajax JsonP请求
    _fetchDataJsonP(url){
        $.ajax({
            url:"http://qcds.m.baichebao.cn/active/count?game=test&callback=abcd",
            dataType:'jsonp',
            data:'',
            jsonp:'callback',
            success:function(result) {
                for(var i in result) {
                    alert(i+":"+result[i]);//循环输出a:1,b:2,etc.
                }
            },
            timeout:3000
        });
    }

    //_fetchData(){
    //    this.props.dispatch(Receive_data(jsonData.result))
    //}

    componentDidMount(){
        this.props.dispatch(fetchData("http://api2.baichebao.cn/api4.1/client/front/?channel=ios_autoguru_V1.0&lat=0&lng=0&location_city_id=110000&location_province_id=110000&nonce_str=qwer1231as&selected_city_id=110000&source=ios&token=76bce9ebf4957c0230b3570fb69c8bfc&uid=0&versioncode=10"))
    }

    createCell(item){
        return(
            <li>
                {item}
            </li>
        )
    }

    _getIconUrl(uid){
        for(var item of this.props.data.users){
            if(item.id === uid){
                return item.avatar_file
            }
        }
    }

    _getUserMessage(type,uid){
        switch (type){
            case "name":
                for(var item of this.props.data.users){
                    if(item.id === uid){
                        return item.user_name
                    }
                }
                break
            case "brand":
                for(var item of this.props.data.users){
                    if(item.id === uid){
                        return item.brand_name?item.brand_name:"暂无车型"
                    }
                }
                break
            default:break
        }
    }

    listDataComponent(){
        return this.props.data.questions.map((item,index) => {
            //console.log('item',item,index)
            if(index === 0){
                return(
                    <div>
                        <div className='hello' style={{padding:10,width:400}}>
                            <div style={{color:"#333333",fontWeight:'bold',fontSize:16,fontStyle:'italic'}}>热门问题</div>
                            <div style={{marginLeft:230,color:"#999999",fontSize:13}}>查看更多热门问题</div>
                        </div>
                        <div style={{width:400,marginLeft:10,height:1,backgroundColor:'#e8e8e8'}}/>
                    </div>
                )
            }
            return(
                <li style={{listStyleType:'none'}} >
                    <div className='hello' style={{padding:15,width:400}}>
                        <img style={{width:30,height:30,borderRadius:15}} src={this._getIconUrl(item.uid)}/>
                        <div style={{marginLeft:8,marginTop:3}}>
                            <div style={{color:'#666666',fontSize:12}}>{this._getUserMessage("name",item.uid)}</div>
                            <div style={{marginTop:5,fontSize:8,color:'#999999'}}>{this._getUserMessage("brand",item.uid)}</div>
                            <div style={{marginTop:5,fontSize:13,color:'#33333'}}>{item.question_content}</div>
                            <div className='hello'>
                                <div style={{marginTop:15,fontSize:8,color:'#999999'}}>6天前</div>
                                <img style={{width:20,height:20,marginTop:15,marginLeft:400 - 60 - 80}} src={require('../img/wenti@2x.png')}/>
                                <div style={{marginLeft:2,marginTop:19,fontSize:8,color:'#666666'}}>{item.answer_users}</div>
                                <img style={{marginLeft:10,width:20,height:20,marginTop:15}} src={require('../img/jishi@2x.png')}/>
                                <div style={{marginLeft:2,marginTop:19,fontSize:8,color:'#666666'}}>{item.all_answer_count}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:400,marginLeft:15,height:1,backgroundColor:'#e8e8e8'}}/>
                </li>
            )
        })
        //for(var item of this.state.data){
        //    //console.log('forItem',item)
        //    this.createCell(item)
        //}
    }

    _firtCell(){

    }

    render(){
        //const {data,dispatch} = this.props
        //console.log('data',this.props.data)
        if(this.props.data){
            return(
                <div style={{flex:1}}>
                    <FindFirstCell data={this.props.data.services.ads}/>
                    <ul style={{marginTop:10}}>
                        {this.listDataComponent()}
                    </ul>
                </div>
            )
        }else{
            return false
        }

    }
}

function select(state){
    return{
        data:state.posts.data
    }
}

export default connect(select)(App)
