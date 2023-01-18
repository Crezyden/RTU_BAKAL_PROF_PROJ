import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'
import TabBarNav from './TabBarNav';
import './Tab.module.scss'
class TabBar extends Component<{children, vertical, className}> {
	
	static propTypes ={
		children: PropTypes.node,
		className: PropTypes.string,
		vertical: PropTypes.bool,
	}
	static defaultProps = {
		children: null,
		className: '',
		vertical: false
	}
	
	state = {
		activeTab: null
	}

	componentDidMount() {
		const {children = []} = this.props;
		
		const activeTab = this.getChildrenLabels(children)[0];
		
		this.setActiveTab(activeTab)		
	}
	
	 getChildrenLabels = (children) => {
		return children.map(({props})=>props.label);
	}
	
	setActiveTab = (activeTab) =>{
		const { activeTab: currentTab} = this.state;
		if (currentTab !== activeTab){
			this.setState({activeTab,})
		}
	}
	renderTabs =()=>{
		const {children = []} = this.props;
		const {activeTab} = this.state
		return this.getChildrenLabels(children).map((navLabel)=>(
			<TabBarNav
			navLabel={navLabel}
			key={navLabel}
			className={classNames({active: activeTab === navLabel})}
			onChangeActiveTab={this.setActiveTab}
			/>
		))
	}
	render() {
		const {activeTab} =  this.state;
		const { children, className, vertical, ...attrs} = this.props;
		const classes = classNames('tabbar',{vertical})
		return (
			<div className={classes} {...attrs}>
				<div className="tabbarnav">
					<>
					{this.renderTabs()}
					</>
				</div>
				<div className='tabcontainer'>
					<>
						{React.Children.map(children, child => React.cloneElement(child,{activeTab}))}
					</>
				</div>
			</div>
			
		);
	}
}

export default TabBar;