import { Input, Button } from 'antd';

export const UserForm = (props) => {
    const { 
        newUser,
        onChange, 
        onAddNewUser,
        labels = {
            header: "Create",
            submitButton: "Add"
        } 
    } = props;
    const { name, username, email } = newUser;
    return (
        <div style={{ border: "1px solid black", padding: "10px", width: "30vw" }}>
            <div style={{ textAlign: "center", fontWeight: "bold", marginBottom: "10px" }}>{labels.header} user</div>
            <div>
                <label htmlFor="name">Full name: </label>
                <Input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="name">User name: </label>
                <Input type="text" id="username" value={username} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="name">email: </label>
                <Input type="text" id="email" value={email} onChange={onChange}/>
            </div>
            <Button onClick={onAddNewUser} className="button-list">{labels.submitButton}</Button>
        </div>
    );
};