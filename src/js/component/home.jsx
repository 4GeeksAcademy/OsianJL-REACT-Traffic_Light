import React, {useState} from "react";



const Home = () => {
	const [colorRed, setColorRed] = useState("bg-danger opacity-50")
	const [colorOrange, setColorOrange] = useState("bg-warning opacity-50")
	const [colorGreen, setColorGreen] = useState("bg-success opacity-50")

	function changeColorRed () {
		setColorRed("bg-danger")
		setColorOrange("bg-warning opacity-50")
		setColorGreen("bg-success opacity-50")
		if (colorRed === "bg-danger"){
			setColorRed("bg-danger opacity-50")	
		}
	}

	function changeColorOrange () {
		setColorOrange("bg-warning")
		setColorRed("bg-danger opacity-50")
		setColorGreen("bg-success opacity-50")
		if (colorOrange === "bg-warning"){
			setColorOrange("bg-warning opacity-50")
			
		}
	}

	function changeColorGreen () {
		setColorGreen("bg-success")
		setColorOrange("bg-warning opacity-50")
		setColorRed("bg-danger opacity-50")
		if (colorGreen === ("bg-success")){
			setColorGreen("bg-success opacity-50")
			
		}
	}

	return (
		<div className="trafficLightBody row container-fluid d-flex justify-content-md-center bg-white">
			<div className="col-5"></div>
			<div className="col-2 d-flex flex-column mt-5">
			<div className={`redLight light rounded-circle ${colorRed}`} onClick={changeColorRed}>red</div>
		<div className={`orangeLight light rounded-circle ${colorOrange}`} onClick={changeColorOrange}>orange</div>
		<div className={`greenLight light rounded-circle ${colorGreen}`} onClick={changeColorGreen}>green</div>
			</div>
		
	<div className="col-5"></div>
		</div>
	);
};

export default Home;

	// setColorOrange("bg-warning")
		// setColorGreen("bg-success")