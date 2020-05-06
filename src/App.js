import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const url = "http://www.mocky.io/v2/5eb275f1320000cf2928fc5c"
  const [plan,setPlan] = useState("");
  
  useEffect(() => {
    if(plan == ""){

    }else{
      handleApiCall();
    }
  })
  const handleApiCall = () => {
    fetch(url,{
      method : "POST",
      body : {
        plan
      }
    })
    .then(response => response.json())
    .then(data => {
      alert(`Your plan has been set to ${plan}`)
      console.log(data)
    } 
    ).catch(e => {
      alert("An error occoured, try again");
      console.error(e)
    })
    
  }
  const highlighted = expected => {
   return plan === expected ? {border: "solid greenyellow", borderWidth:  "5px"} : null
  }
  
  return (
            <section>
            <h1 className="section-title">
                Choose Your Plan
            </h1>
            <div>
                <article className="plan" style={highlighted("bronze")}>
                    <h1 className="plan__title">BRONZE</h1>
                    <h2 className="plan__price">$5/month</h2>
                    <h3>For hobby projects or small teams.</h3>
                    <ul className="plan__features">
                        <li>1 Workspace</li>
                        <li>Unlimited Traffic</li>
                        <li>10GB Storage</li>
                        <li>Basic Support</li>
                    </ul>
                    <div>
                        <button onClick={ () => setPlan("bronze")} className="button">CHOOSE PLAN</button>
                    </div>
                </article>
                <article className="plan plan--highlighted"  style={highlighted("silver")}>
                    <h1 className="plan__annotation">SILVER</h1>
                    <h1 className="plan__title">Recommended</h1>
                    <h2 className="plan__price">$29/month</h2>
                    <h3>For ambitious projects.</h3>
                    <ul className="plan__features">
                        <li>5 Workspaces</li>
                        <li>Unlimited Traffic</li>
                        <li>100GB Storage</li>
                        <li>Plus Support</li>
                    </ul>
                    <div>
                        <button onClick={ () => setPlan("silver")} className="button">CHOOSE PLAN</button>
                    </div>
                </article>
                <article className="plan"  style={highlighted("gold")}>
                    <h1 className="plan__title">GOLD</h1>
                    <h2 className="plan__price">$50/month</h2>
                    <h3>Your enterprise solution.</h3>
                    <ul className="plan__features">
                        <li>10 Workspaces</li>
                        <li>Unlimited Traffic</li>
                        <li>Unlimited Storage</li>
                        <li>Priority Support</li>
                    </ul>
                    <div>
                        <button onClick={ () => setPlan("gold")}  className="button">CHOOSE PLAN</button>
                    </div>
                </article>
            </div>
        </section>
  );
}

export default App;
