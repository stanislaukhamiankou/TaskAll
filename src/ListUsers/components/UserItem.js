import { useState } from "react";
import { UserForm } from "./UserForm";
import { FixedSizeList as List } from "react-window";

export const UserItem = (props) => {
    const { user, deleteUser, saveUser } = props;

    const [copiedUser, setCopiedUser] = useState({ ...user })

    const [isEditFormShown, setIsEditFormShown] = useState(false)

    const onChange = (event) => {
        const { target } = event;
        const { id, value } = target;
        setCopiedUser({ ...copiedUser, [id]: value })
    }

    const toggleEditUserForm = () => {
        setIsEditFormShown(!isEditFormShown);
    };

    const onUserSave = () => {
        saveUser(user.id, copiedUser);
        toggleEditUserForm();
    };

    /*const listUser = ({ style }) => {
        <div style={style}>
            {user.name}, 
            {user.username}, 
            {user.email}, 
            {user.phone}
        </div>
    };
    <List
                className="List"
                height={15}
                itemCount={user.length}
                itemSize={35}
                width={300}
            >
                {listUser}
            </List>
	*/		

    return (
        <h3>
            <div onClick={() => deleteUser(user)}>
            {user.name}, 
            {user.username}, 
            {user.email}, 
            {user.phone}
            </div>
            <button onClick={toggleEditUserForm} className="button-edit">Edit</button>
            {(isEditFormShown && 
                <UserForm 
                    newUser={copiedUser} 
                    onChange={onChange} 
                    onAddNewUser={onUserSave}
                    labels={{
                    header: "Edit",
                    submitButton: "Edit"
                    }} 
                />)}
        </h3>
    );
};