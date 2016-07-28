/**
 * Created by hwh on 16/7/25.
 */
import React, { Component, PropTypes } from 'react'//import { render } from 'react-dom';
import {connect} from 'react-redux'
import {fetchData,Receive_data} from '../../actions/Actions'
import styles from '../../../css/FindCss.css';

export default class FindFirstCell extends Component{
    render(){
        return(
            <div className='findFirst' style={{marginLeft:15}}>
                {this._renderList()}
            </div>
        )
    }

    _renderList(){
        return this.props.data.map((item,index)=>{
            return (
                    <a href='http://localhost:8080/#/search'>
                    <div style={{width:100}}>
                        <img style={{marginLeft:35,marginTop:10,width:30,height:30,borderRadius:15}} src={item.extra.source}/>
                        <div style={{fontSize:10,color:'#999999',marginTop:5,marginBottom:10,textAlign:'center'}}>{item.name}</div>
                    </div>
                    </a>
            )
        })
    }
}