const express = require("express")
const bodyparser = require("body-parser")
const app = express()

app.use(bodyparser.urlencoded({extended:true}));


app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
    
})

app.post('/',(req,res)=>{	
     heigh = parseFloat(req.body.Height);
     weigh = parseFloat(req.body.Weight);
	 bmi = weigh / (heigh * heigh);

	//number to string format
	 bmi = bmi.toFixed();

	 req_name = req.body.Name;

	// CONDITION FOR BMI
	if (bmi < 19) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Underweight!")
	} else if (19 <= bmi && bmi < 25) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Normalweight!")
	} else if (25 <= bmi && bmi < 30) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Overweight!")
	} else {
		res.send("<h3>hey!0 " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Obese!")
	}


    


})

app.listen(3000,(res)=> {
	console.log("port active at 3000")
})
