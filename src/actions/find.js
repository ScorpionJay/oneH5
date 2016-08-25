import 'whatwg-fetch'
import Config from '../config'

export const FOLLOWERS = 'FOLLOWERS'

export function fetchFollowers(){
	return dispatch => { 
	 	fetch(Config.followers)
        .then((response) => response.json())
        .then((data) => {
        	dispatch(followers(data))
        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
        })
	}

}

export function followers(followers){
	return {
		type: FOLLOWERS,followers
	}
}


