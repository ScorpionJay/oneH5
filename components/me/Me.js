import React , { Component } from 'react'

import Bar from '../common/Bar'
import {Icon} from 'react-fa'

export default class Me extends Component{


	render(){
		
		return (
			<div>
				<div>头像</div>

				<div>
					<div>相册
						<Icon name="angle-right" />
					</div>
					<div>
						<Icon name="cube" />
						收藏
						<Icon name="angle-right" />
					</div>
					<div>
						设置
						<Icon name="angle-right" />
					</div>
				</div>
			</div>
		);
	}
}

const Styles = {
 
}