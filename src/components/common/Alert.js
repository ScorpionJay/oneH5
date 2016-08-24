import React ,{Component} from 'react'


export default class Alert extends Component {


	render() {
		return (
			<div style={ (this.props.show ? Styles.container : Styles.container2) }>
				{this.props.message}
			</div>
		);
	}

} 

const Styles = {
	container:{
		position:'fixed',
		top: '50%',
		left:'40%',
		height: 50,
    	backgroundColor: 'red'
	},
	container2:{
		display:'none',
		position:'fixed',
		top: '50%',
		left:'40%',
		height: 50,
    	backgroundColor: 'red'
	},
}