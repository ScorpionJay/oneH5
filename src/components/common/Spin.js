import React ,{Component} from 'react'


export default class Spin extends Component {


	render() {

		console.log('jjjjj',this.props.spin)
		return (
			<div style={ (this.props.spin ? Styles.show : Styles.hidden) }>
				Loading...
			</div>
		);
	}

} 

const Styles = {
	show:{
		position:'fixed',
		top: '50%',
		left:'44%',
		height: 80,
    	backgroundColor: 'red',
    	borderRadius: '50%',
    	textAlign: 'center',
    	lineHeight: '77px',
    	color:'#fff',
	},
	hidden:{
		display:'none',
		position:'fixed',
		top: '50%',
		left:'44%',
		height: 80,
    	backgroundColor: 'red',
    	borderRadius: '50%',
    	textAlign: 'center',
    	lineHeight: 77,
	},
}