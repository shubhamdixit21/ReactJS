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
            var isFound = user.name.includes(searchKey);
            if(isFound){
                return user.name;
            }
            console.log("Is Found", isFound);
        })
        this.setState({users:filterUsers})
        console.log(filterUsers);
        console.log("You are searching for ",searchKey);
    }
    
    inputHandle = (event) => {
        let searchString = event.target.value;
        this.setState({searchKey : searchString});
        // console.log(event.target.value);
        console.log(searchString);
    }
    
    render(){
        let Heading = "Customer List";
        /** Destructuring **/
        /** Extract variable with values **/
        let {users}=this.state;
        console.log(users);
        return(
            <div>
                <h1>{Heading}</h1>
                <hr/>
                <div className="search">
                    <input type="text" name="search" placeholder="Enter name to search" onChange={this.inputHandle.bind(this)}></input>
                    <button onClick={this.search.bind(this)}>Search</button>
                </div>
                <table>
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
                </table>
            </div>
        )
    }
}

export default User;