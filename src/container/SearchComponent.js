/**
 * Created by hwh on 16/7/25.
 */
import React, { Component, PropTypes } from 'react'//import { render } from 'react-dom';
import {connect} from 'react-redux'
import {fetchData,Receive_data} from '../actions/Actions'
import styles from '../../css/FindCss.css';
import FindFirstCell from './ViewComponent/FindFirstCell'

class App extends Component{
    render(){
        //const {data,dispatch} = this.props
        //console.log('data',this.props.data)

            return(
                <div style={{flex:1,backgroundColor:'red'}}>
                    Router 2
                </div>
            )


    }
}

function select(state){
    return{
        data:state.posts.data
    }
}

export default connect(select)(App)