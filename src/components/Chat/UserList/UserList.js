import React from 'react';

import './UserList.css';

const UserList = ({userList}) => (
	<div>
		{userList.map((user, i) => <div key={i}>{user.name}</div>)}
	</div>
);

export default UserList; 