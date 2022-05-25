import React, { Component } from 'react';
import Users from '../data/users.json';

class Usersdat extends Component {
    constructor(){
        super();
            this.state ={userList:Users}
    }
    render() {
        console.log(this.state);

        return (
            <div>
                <p style={{ color: "black", textAlign: "center", fontSize: "28px", fontWeight: "800" }}><u>Customers Details of "MY WEBSITE"</u></p>
                <CustomerData />
            </div>
        )
    }
}


class CustomerData extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder='Input Customer Name'></input>
                <button>Search</button>
                <table>
                    <tbody>
                        <tr>
                            <td>S No</td>
                            <td>Name</td>
                            <td>Username</td>
                            <td>Email</td>
                            <td>Street</td>
                            <td>Suite</td>
                            <td>City</td>
                            <td>Zipcode</td>
                            <td>Company</td>
                            <td>Action</td>
                        </tr>
                        {Users.map((Customerss, index) => {
                            return <tr key={index}>
                                <td>{index = index + 1}</td>
                                <td>{Customerss.name}</td>
                                <td>{Customerss.username}</td>
                                <td>{Customerss.email}</td>
                                <td>{Customerss.address.street}</td>
                                <td>{Customerss.address.suite}</td>
                                <td>{Customerss.address.city}</td>
                                <td>{Customerss.address.zipcode}</td>
                                <td>{Customerss.company.name}</td>
                                <td><button>SUBMIT</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Usersdat;