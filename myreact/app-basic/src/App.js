import React from 'react';
import './index.css';

function App() {
  // return (
  //   <>
  //     <h3>Hello World! </h3>
  //     <br />
  //     <h1>สวัสดีชาวโลกฉันมาแล้ว</h1>
  //   </>
  // );


  let r = 'React';
  let rn = 'React Native';
  const el = (
    <h1>
      <center>
        Create Web & Mobile Apps
        <br />
        with {r} & {rn}
      </center>
    </h1>
  );
  return el;

  
  /*return (
      <table border="1">
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>React</td>
          <td>320</td>
        </tr>
        <tr>
          <td>React Native</td>
          <td>340</td>
        </tr>
      </table>
    );*/
  /*const divStyle = {
		color: 'red',
		backgroundColor: 'powderblue',		
		fontSize: 'larger',
		padding: '3px',
	}
	return <div style={divStyle}>Hello React</div>*/
  /*let colors = ['red', 'green', 'blue', 'yellow']
	let list = colors.map(c => <li>{c}</li>)		//แทรกค่าแบบ JSX
	return <ul>{list}</ul>*/
  /*let colors = ['red', 'green', 'blue', 'yellow']
	return (
		<ul>
			{colors.map(c => <li>{c}</li>)}
		</ul> 
	)*/
  /*return (
		<ul>
			{colors.map(c => <li>{c}</li>)}
		</ul>
	)
	
	return <img src="./logo192.png" alt=""/>
	return <img src={"./logo192.png"} alt=""/>
	return <img src={(process.env.PUBLIC_URL + "/logo192.png")} alt=""/>
	return <img src={reactlogo} width="10%" alt=""/>*/
}

export default App;
