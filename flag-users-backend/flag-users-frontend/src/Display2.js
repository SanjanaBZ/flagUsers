import React, { useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
// import { count } from '../../model/planets';

const Display2 = () => {

  let [data, setData] = useState(new Map());

  React.useEffect(() => {
    // axios.get("/api/data").then((result) => {
      axios.get("http://localhost:3000/api/data").then((result) => {
      // this.state.data = result.data.data;
      setData(
        result.data
      )
      console.log(result.data);
      console.log(data);
       
    }, (error) => {
      console.log("error");
    })
  }, [])

  return (
    <div className="App">
    {/* <h1>HELLO WORLD!!!</h1> */}
    {/* <h1>{ getRequest() }</h1> */}
    {/* <button onClick={ this.getRequest }>get</button> */}
    {/* style={{'border': '1px solid'}} */}
  <Table striped bordered hover size="sm">
      <thead>
              <tr>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
            
             {data.map((element,index) => {
                return (
                 <tr key={index}>
                  <td>{ element.user }</td>
                </tr>
              )
              })} 
            </tbody>
          </Table>
          </div>
        );
}

export default Display2;
