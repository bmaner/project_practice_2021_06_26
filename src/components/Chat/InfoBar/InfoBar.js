import React from 'react';

import closeIcon from '../../../images/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => {
	return (
		<div className="infoBar">
			<div className="leftInner">
				<h3># 💬{room}</h3>
			</div>
			<div className="rightInner">
				<a href="/"><img src={closeIcon} alt="close" /></a>
			</div>
		</div>
	);
}

export default InfoBar;