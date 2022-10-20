import React, {useState} from 'react'
import axios from 'axios';
import './Hello';

// let [data, setData] = useState([]);

const Display = () => {

    // this.state = {data: new Map()};
    // const [data, setData] = useState({});
    const initialValue = new Map();
    var [data, setData] = useState(initialValue);
    var [arrData, setarrData] = useState([]);

    const showDetails = () => {
        console.log(data);
        console.log(arrData);
        var ans = "";
        for(const ele in data)
        {
            ans += (ele.toString() + "\n");
        }
        var html = "<table border='1'>";
        html += "<thead><tr><td>USERS</td></tr></thead><tbody>";
        for (var i = 0; i < arrData.length; i++) {
            html+="<tr>";
            html+="<td>"+arrData[i]+"</td>";
            html+="</tr>";

        }
        html+="</tbody></table>";
        document.getElementById("table").innerHTML = html;
    }

    const getDetails = () => {
        axios.get("http://localhost:3000/api/data").then((result) => { 
            alert("Enter");
            // setData({
            //     data : result.data
            // })
            var site = document.getElementById("dropdown").value;
            var sec = document.getElementById("timegap").value;
            sec *= 60;
            console.log(site, sec*60);
            // data = result.data[site];
            var reqData = new Map();
            var usersArr = [];
            // var userDetails = result.data[site];
            for(const user in result.data[site])
            {
                if(result.data[site][user] <= sec)
                {
                    usersArr.push(user);
                    reqData[user] = result.data[site][user];
                }
            }
            // console.log(usersArr);
            setData(
                data = reqData
            )
            setarrData(
                arrData = usersArr
            )
            showDetails();
        });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Hello");
        getDetails();
    }

  return (
    <div>
        <div>
        <form onSubmit={handleSubmit}>
            <select name="timegap" id="timegap">
                <option value="1">1 minute</option>
                <option value="2">2 minutes</option>
                <option value="3">3 minutes</option>
                <option value="4">4 minutes</option>
                <option value="5">5 minutes</option>
                <option value="6">6 minutes</option>
                <option value="7">7 minutes</option>
                <option value="8">8 minutes</option>
                <option value="9">9 minutes</option>
                <option value="10">10 minutes</option>
            </select>&nbsp;&nbsp;&nbsp;
            <select name="dropdown" id="dropdown"> {/* value={this.state.mintRate} onChange={this.handleInputChange}> */}
            <option value="LEETCODE">LEETCODE</option>
            <option value="CODECHEF">CODECHEF</option>
            <option value="CODEFORCES">CODEFORCES</option>
            <option value="HACKERRANK">HACKERRANK</option>
            <option value="HACKEREARTH">HACKEREARTH</option>
            </select>&nbsp;&nbsp;&nbsp;
            <input type="submit"/>
        </form>
        </div><br/><br/>
        <center><div id="table">
        </div></center>
    </div>
  )
}

export default Display