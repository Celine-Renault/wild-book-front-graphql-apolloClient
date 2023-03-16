import "./Header.css";
// import { useState } from 'react';
export default function Header() {
    // const [counter, setCounter] = useState(0);
	return (
		<header>
			{/* <p>Currently at {counter}</p> */}
			{/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}
			<div className="container">
				<h1>Wilders Book</h1>
			</div>
		</header>
	);
}
