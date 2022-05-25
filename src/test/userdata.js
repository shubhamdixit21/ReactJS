import React, {Component, useReducer} from 'react';
var a = [
    {'user_name':'shubham', 'email':'shubham@gmail.com', 'contactnumber':'8878666281', 'password':'123'},
    {'user_name':'rani', 'email':'rani@gmail.com', 'contactnumber':'9589135755', 'password':'123'},
    {'user_name':'ruchi', 'email':'ruchi@gmail.com', 'contactnumber':'9406651275', 'password':'123'},
    {'user_name':'neeraj', 'email':'neeraj@gmail.com', 'contactnumber':'8085285373', 'password':'123'},
    {'user_name':'tanishq', 'email':'tanishq@gmail.com', 'contactnumber':'8770450925', 'password':'123'},
    {'user_name':'samsung', 'email':'samsung@gmail.com', 'contactnumber':'8770450425', 'password':'123'},
    {'user_name':'oppo', 'email':'oppo@gmail.com', 'contactnumber':'54512682231', 'password':'123'},
    {'user_name':'vivo', 'email':'vivo@gmail.com', 'contactnumber':'8770450925', 'password':'123'},
    {'user_name':'henry', 'email':'henry@gmail.com', 'contactnumber':'8770450925', 'password':'123'},
    {'user_name':'stark', 'email':'stark@gmail.com', 'contactnumber':'8770450925', 'password':'123'}
];
class Userdata extends Component{
    render(){
        return(
            <div>
                <Userlist />
            </div>
        )}
}

class Userlist extends Component{
    render(){
        return(
            <div>
                <table style={{border:"solid 5px"}}>
                    <tbody>
                        <tr>
                            <td>User ID</td>
                            <td>User Name</td>
                            <td>Email ID</td>
                            <td>Contact Number</td>
                            <td>Password</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
} 

export default Userdata;