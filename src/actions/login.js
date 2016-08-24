import 'whatwg-fetch'
import Config from '../config'

export const LOGIN = 'LOGIN'

export function login(username,password){
	console.log('actions',username,password)

let data = {
            'Username': username,
            'Password': password
          }
	// fetch login
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
        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
        })


	return {
		type: LOGIN,username,password
	}
}



