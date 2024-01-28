
import { useState } from 'react';
import './App.css';

function App() {
  const [weight,setWeight] = useState("");
  const [height,setHeight] = useState("");
  const [message,setMessage] = useState("");
  const [bmi,setBmi] = useState("");
   
  let calcbmi = (e)=>{
    e.preventDefault();
    
    if(weight === 0 || height=== 0){
      alert("please enter valid wight and height")
    }else{
      let bmi =(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage("you are underweight")
      }else{
        if(bmi>=25 && bmi<70){
          setMessage("you are healthy weight")
        }else{
          setMessage("your are overweight")
        }
      }
    }


  }

  let reload=()=>{
    window.location.reload()
  }
  


  return (
    <div className="App">
      <div className='container'>
         <h1>BMI Calculator</h1>
         
         <form onSubmit={calcbmi}>
          <div>
            <label htmlFor="weight (ibs)">weight (ibs)</label>
              <input type="text" placeholder='enter weight value' value={weight} onChange={(e)=>{
                setWeight(e.target.value)
              }}/>
            
          </div>

          <div>
            <label htmlFor="Height (ibs)">Height (ibs)</label>
              <input type="text" placeholder='enter height value' value={height} onChange={(e)=>{
                setHeight(e.target.value)
              }} />
           
          </div>

          <div>
          <button className='btn' type='submit'>submit</button>
          <button className='btn btn-outline' type='submit' onClick={reload}>reload</button>
          </div>
          
          <div className='center'>
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>

          </div>
         </form>

      </div>
    </div>
  );
}

export default App;
