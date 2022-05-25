import React, {Component} from 'react';
import UserList from './users.json';

class User extends Component{
    constructor(){
        super();
        /**
         * 
         * Put data in state variable
         *  */ 
        this.state = {users:UserList,searchKey:''}
    }

    search = () => {
        let {users, searchKey} = this.state;

        let filterUsers = users.filter((user)=>{
            var isFound = user.name.includes(searchKey) || user.username.includes(searchKey) || user.website.includes(searchKey);
            if(isFound){
                return user;
            } 
            // console.log("Is Found", isFound);
        })
        this.setState({users:filterUsers})
        // console.log(filterUsers);
        // console.log("You are searching for ",searchKey);
    }
    
    inputHandle = (event) => {
        let searchString = event.target.value;
        this.setState({searchKey : searchString});
        // console.log(event.target.value);
        // console.log(searchString);
    }
    
    render(){
        let Heading = "Customer List";
        /** Destructuring **/
        /** Extract variable with values **/
        let {users}=this.state;
        // console.log(users);
        let isEmpty = Object.keys(users).length;
        let result;
        if (isEmpty > 0){
            result = <Datafound userdata={users} />
        }else{
            result = <Datanotfound />
        }
        console.log(isEmpty);
        return(
            <div>
                <h1>{Heading}</h1>
                <hr/>
                <div className="search">
                    <input type="text" name="search" placeholder="Enter name to search" onChange={this.inputHandle.bind(this)}></input>
                    <button onClick={this.search.bind(this)}>Search</button>
                </div>
                {result}
            </div>
        )
    }
}

class Datafound extends Component{
    render(){
        console.log(this.props);
        let users = this.props.userdata;
        return(<table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>User Name</td>
                    <td>Phone</td>
                    <td>Website</td>
                </tr>
            </thead>
            <tbody>
                {users.map((user, key)=>{
                  return  <tr key={key}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                </tr>
                })}
                
            </tbody>
        </table>)
    }
}

class Datanotfound extends Component{
    render(){
        return(
            <div>Data Not Found</div>
        )
    }
}

export default User;