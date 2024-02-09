import React, {useState} from "react";




const Home = () => {
	const [lightRed, setLightRed] = useState("")
	const [lightOrange, setLightOrange] = useState("")
	const [lightGreen, setLightGreen] = useState("")
	const [newColor, setNewColor] = useState("bg-success")

	function changeLightRed () {
		setLightRed("shadowRed")
		setLightOrange("")
		setLightGreen("")
		if (lightRed === "shadowRed"){
			setLightRed("")	
		}
	}

	function changeLightOrange () {
		setLightOrange("shadowOrange")
		setLightRed("")
		setLightGreen("")
		if (lightOrange === "shadowOrange"){
			setLightOrange("")
			
		}
	}

	function changeLightGreen () {
		setLightGreen("shadowGreen")
		setLightOrange("")
		setLightRed("")
		if (lightGreen === ("shadowGreen")){
			setLightGreen("")
			
		}
}

function buttonCycle () {
	if (lightRed === ("") && lightOrange === ("") && lightGreen === ("")){
		setLightRed("shadowRed")
	}
	else if (lightRed === ("shadowRed")){
		setLightRed("")
		setLightOrange("shadowOrange")
	} else if (lightOrange === ("shadowOrange")){
		setLightOrange("")
		setLightGreen("shadowGreen")
	} else if (lightGreen === ("shadowGreen")){
		setLightGreen("")
		setLightRed("shadowRed")
	}

	}

	function newColored (){
			setNewColor("bg-purple")
			if (newColor === ("bg-purple")){
				setNewColor("bg-success")
			}
	}
	return (
		<>
		<div
		className="trafficLightBody row container-fluid d-flex flex-column justify-content-md-center bg-white align-items-center"
	  >
		
		<div className="col-1 palo d-flex"></div>
		<div
		  className=" d-flex flex-column align-items-center justify-content-center bg-dark rounded-4"
		>
		
		  <div
			className={`redLight ${lightRed} margenes d-flex align-items-center justify-content-center light rounded-circle bg-danger`} onClick={changeLightRed} 
		  >
			
		  </div>
		  <div
			className={`orangeLight ${lightOrange} margenes d-flex align-items-center justify-content-center light rounded-circle bg-warning`} onClick={changeLightOrange}
		  >
			
		  </div>
		  <div
			className={`greenLight ${lightGreen} margenes d-flex align-items-center justify-content-center light rounded-circle ${newColor}`} onClick={changeLightGreen}
		  >
			
		  </div>
		 
		</div>
  
		
	  </div>
	  <button className="buttonCycle bg-primary rounded-3" onClick={buttonCycle}>Toggling</button>
	  <button className="buttonColor bg-tertiary rounded-3" onClick={newColored}>NewColor</button>
	  </>
	);
};

export default Home;

