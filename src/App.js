import { Paper, Switch } from '@mui/material';
import world from "./image/world.jpg";
import React, { useState, useEffect } from 'react';
import Data from "./data/Data";
import "./App.css";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


// export default function FullWidthGrid() {

	
//   const [position, setPosition] = useState({
 
//   });

//   const handleMouseMove = (e) => {
//     setPosition({
  
//     });
//   };

	
// 	const handleClick = (e) => {
// 		e.preventDefault();
// 		console.log("yoyo");
// }

// 	useEffect(() => {
// 		window.addEventListener("mousemove", handleMouseMove);
// 		return () => {
// 			window.removeEventListener("mousemove", handleMouseMove);
// 		};
// 	}, []);

// 	return (
// 		<div className= "grid">
			
// 			<div className='rowfirst'>
				
// 				<Grid className="box1" item>
					
// 					<div className="myDiv">
						
				
// 					<div className="hide">
// 						<h2>details</h2>
// 					</div>
// 						<Paper sx={{
						
// 							height: 80,
// 							width: 80,
// 							border: '1px solid white'
							
// 						}}>
							
// 						</Paper>
// 					</div>
// 					</Grid>
				
// 					<Grid item>
// 						<Paper sx={{
							
// 							height: 80,
// 							width: 80,
// 							border: '1px solid white'
// 						}}></Paper>
// 				</Grid>
				
// 					<Grid item>
// 						<Paper sx={{
							
// 							height: 80,
// 							width: 80,
// 							border: '1px solid white'
// 						}}></Paper>
// 					</Grid>
// 			</div>
// 		</div>
// 	);
// }
const App = () => {
	const [isHover, setIsHover] = useState(true);



	const [position, setPosition] = useState({
    x: "80",
    y: "80",
	});
	
	const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
	};
	useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
	// const handleMouseEnter = () => {
	// 	setIsHover(true);
	// };
	// const handleMouseLeave = () => {
	// 	setIsHover(false);
	// }

const boxStyle = {
	backgroundColor: isHover ? 'lightblue' : 'white',
}
	const myFunction = () => {
		console.log("yoyo");
	}
return (
	<Grid className="line1">
		<Grid className='line2'>
			<Paper onClick={myFunction}
				// onMouseEnter={handleMouseEnter}
				// onMouseLeave={handleMouseLeave}
				style={{left:`${position.x}px`,top:`${position.y}px`}} className="paper" sx={{
							
							height: 80,
							width: 80,
							border: '1px solid white'
						}}><p>hello</p></Paper>
		</Grid>
	</Grid>
	);
};
export default App;