import "./Solution.css";
import { motion } from "framer-motion";
import {
  FaTimesCircle,
  FaCheckCircle
} from "react-icons/fa";

function Solution() {

return(

<section className="solution">

<div className="container">

<h2 className="section-title">

Why Choose NEXUS?

</h2>

<p className="section-subtitle">

NEXUS transforms traditional loan processing into a fast,
transparent and intelligent digital lending experience.

</p>

<div className="solution-grid">

<motion.div
className="old-system"
initial={{opacity:0,x:-80}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.6}}
>

<h3>

Traditional Lending

</h3>

<ul>

<li>

<FaTimesCircle/>

Manual Verification

</li>

<li>

<FaTimesCircle/>

Long Processing Time

</li>

<li>

<FaTimesCircle/>

Limited Income Proofs

</li>

<li>

<FaTimesCircle/>

High Human Bias

</li>

<li>

<FaTimesCircle/>

No Support for Informal Workers

</li>

</ul>

</motion.div>

<div className="arrow">

→

</div>

<motion.div
className="new-system"
initial={{opacity:0,x:80}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.6}}
>

<h3>

NEXUS Solution

</h3>

<ul>

<li>

<FaCheckCircle/>

OCR Based Verification

</li>

<li>

<FaCheckCircle/>

AI Credit Scoring

</li>

<li>

<FaCheckCircle/>

Alternative Income Proofs

</li>

<li>

<FaCheckCircle/>

Fraud Detection

</li>

<li>

<FaCheckCircle/>

Transparent Loan Decision

</li>

</ul>

</motion.div>

</div>

</div>

</section>

)

}

export default Solution;