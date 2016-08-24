import React , { Component} from  'react'
import { Link } from 'react-router'
import {Icon} from 'react-fa'


export default class Tab extends Component {

	render() {
		return (
			<div className='footer'>
				<ul className="nav-ul">
					<li>
						<Link to="/home" activeClassName="active"> 
							<Icon name="star" />
							<div>首页</div>
						</Link>
					</li>
					<li>
						<Link to="/find" activeClassName="active">
							<Icon name="rocket" />
							<div>发现</div>
						</Link>
					</li>
					<li>
						<Link to="/me" activeClassName="active">
							<Icon name="user" />
							<div>我</div>
						</Link>
					</li>
				</ul>
			</div>
		)
	}

}
