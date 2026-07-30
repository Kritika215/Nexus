import "./Home.css";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import Hero from "../../components/home/Hero/Hero";

function Home(){

return(

<>

<Navbar/>

<main className="home">

<div className="container">

<h1>NEXUS</h1>

<p>

AI Powered Beneficiary Credit Scoring Platform

</p>

</div>

</main>

<Footer/>

</>

)

}

export default Home;