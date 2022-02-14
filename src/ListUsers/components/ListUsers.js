import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUsersFilter, addNewUser, editUser, setFilterByName, setFilterByEmail, setFilterByPhone } from '../redux-toolkit/toolkitSlice';
import { UserItem } from './UserItem';
import { UserForm } from './UserForm';
import {createUser} from '../helpers/helpers';
import { loadUsersAsync } from '../redux-toolkit/usersThunk';
import './ListUser.scss';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ListUsers = () => {

	const dispatch = useDispatch();
	const { users, usersFilter, filterByEmail, filterByUsername, filterByPhone} = useSelector((state) => state.toolkit);

	const [newUser, setNewUser] = useState(createUser());

	const onChange = (event) => {
		const { target } = event;
		const { id, value } = target;
		setNewUser({ ...newUser, [id]: value })
	}

	const addUser = () => {
		dispatch(addNewUser({
			id: Math.max(...users.map(user => user.id)) + 1,
			...newUser
		}));
		setNewUser(createUser());
	};

	const saveUser = (id, user) => {
		dispatch(editUser(id, user));
	};

	useEffect(() => {
		dispatch(loadUsersAsync());
	}, []);

	const deleteUser = (user) => {
		dispatch(removeUser(user))
	}

	const searchUser = (value) => {
		dispatch(setUsersFilter(value));
	}

	const filteredUsers = users?.filter(user => 
		user.name.includes(usersFilter) && 
		(
			(
				user.username.includes(filterByUsername) && filterByUsername ||
				user.email.includes(filterByEmail) && filterByEmail || 
				user.phone.includes(filterByPhone) && filterByPhone
			) || 
			!filterByEmail && !filterByPhone && !filterByUsername
		)
	);//для массива, для строк использовать другой метод. IndexOf закончить routing, redux toolkit, filter, router настроить нормально. React дока почитывать filter(i => i.name.includes('oleg') && i.status === 'test') 

	// const filtered = useMemo(() => {
 	// console.log('test');
	//  	if(filter === filterMap.usernName){
	//  		console.log('name');
	//  		return users?.filter(user => user.username === 'Bret')
	//  	} else if (filter === filterMap.Email) {
	//  		console.log('email');
	//  		return users?.filter(user => user.email === 'Karley_Dach@jasper.info') 
	//  	} else if (filter === filterMap.Phone) {
	//  		console.log('phone');
	//  		return users?.filter(user => user.phone === '010-692-6593 x09125')
	//  	} else if (filter === filterMap.All) {
	//  		return users?.filter(user => user.name.includes(usersFilter));
	//  	}
    // }, [filter, users]);

	return (
		<div className='list-users'>
			<h1>User List</h1>
			<UserForm newUser={newUser} onChange={onChange} onAddNewUser={addUser}/>
			<br/>
			<Input onChange={({ target }) => searchUser(target.value)} placeholder="search" prefix={<UserOutlined />} size="large" />
			<br/>
			<br/>
			<Button className='menu-button' onClick={() => dispatch(setFilterByName())}>Username</Button>
			<Button className='menu-button' onClick={() => dispatch(setFilterByEmail())}>Email</Button>
			<Button className='menu-button' onClick={() => dispatch(setFilterByPhone())}>Phone</Button>
			<br/>
			<br/>
			{filteredUsers && filteredUsers.map((user) => 
				<UserItem 
					key={user.id} 
					user={user} 
					deleteUser={deleteUser}
					saveUser={saveUser} 
				/>)}
		</div>
	);
};

export default ListUsers;