export const FETCH_LIST = 'FETCH_LIST'
export const FETCH_LIST_ITEM = 'FETCH_LIST_ITEM'

export function addTodo(text){
	return {
		type: FETCH_LIST,text
	}
}

export function fetchListItem(index){

	console.log('action',index)

	return {
		type:FETCH_LIST_ITEM,index
	}
}


export function fetchList(index){
	 return dispatch => {
	 	fetch('https://gist.githubusercontent.com/ScorpionJay/de11dc5bacefea9cee5394b73f456688/raw/e86fd421e4bce5c85dd87d29ddc7315ec1d33eed/list.json',{
			//mode: "cors"
			}).then(function(response) {
				
    return response.json()
  }).then(function(json) {
     dispatch(addTodo(json))
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })}
}