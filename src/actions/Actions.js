// action define
export const RECEIVE_DATA = 'RECEIVE_DATA'

export function Receive_data(data){
    return{
        type:RECEIVE_DATA,
        data:data
    }
}

// action generator
export function fetchData(url){
    return function(dispatch){
        window.fetch(url)
            .then((response) => {
                console.log('response',response)
                return response.json()
            })
            .then((responseJson) => {
                if(responseJson.code === 0){
                    let result = responseJson.result
                    let questionData = {
                        ...result,
                        questions:['head',...result.questions]
                }
                    dispatch(Receive_data(questionData))
                }
                console.log('fetchSuccess',responseJson)
            }).catch((e)=>{
                console.log('fetchError',e)
            })
    }
}