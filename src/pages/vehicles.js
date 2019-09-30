import React, { Component } from 'react'; 
import axios from 'axios'
import { apiRoot } from '../services/consts'

class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        const token = localStorage.getItem("token")

        axios.get(apiRoot + "/vehicles",
        {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
    }
    render() { 
        return ( 
            <div>
                vehicles
            </div>
         );
    }
}
 
export default Vehicles;