import 'whatwg-fetch'
import Config from '../config'
import Storage from '../storage'

export const LOGIN = 'LOGIN'

export const LOGIN_ERROR = 'LOGIN_ERROR'

export function loginFetch(username,password){
	console.log('actions',username,password)
	// fetch login
	return dispatch => { 
	 	fetch(Config.loginUrl,{
	 	  //mode: "cors",// 跨域
          headers: {
            'Username': username,
            'Password': password
          },
          method: 'POST'
        })
        .then((response) => {
              const authToken = response.headers.get("Auth-Token");
               console.log("authToken",authToken)
               if(authToken){
                	// 持久化
	               Storage.put('token',authToken)
	               // 页面跳转
	               dispatch(login(authToken))
               }else{
               	 console.log('帐号或密码错误')
               	 dispatch(loginError('帐号或密码错误'))
               }

        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
        })
	}

	// return {
	// 	type: LOGIN,username,password
	// }

}


export function loginError(message){
	console.log('action',message)
	return {
		type: LOGIN_ERROR,message
	}
}

export function login(token){
	return {
		type: LOGIN,token
	}
}

