import 'whatwg-fetch'
import Config from '../config'
/**
*	action 类型
*/
export const USER = 'USER'

// export const COMPLETE_TODO = 'COMPLETE_TODO'

// export function addTodo(text){
// 	return {
// 		type: ADD_TODO,text
// 	}
// }





export function meFetchData(token){
	return dispatch => {
		fetch(Config.user)
        .then((response) => response.json() )
        .then((data) => {
        	console.log(data)
        	dispatch(user(data))
        })	
        .catch(function(ex) {
          console.log('parsing failed', ex)
        }) 
	}
}

export function user(data){
	return {
		type: USER,data
	}
}