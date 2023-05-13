import React from "react"
import { Button } from "reactstrap"
import "./Home.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
function Home() {
    return (
        <header>
            <div className="header-content">
                <h1 id="first">Teknolojik Yemekler</h1>
                <div className="hungry"> <p>fırsatı kaçırma</p> <h1 id="second">KOD ACIKTIRIR , PIZZA DOYURUR</h1> </div>
                <Link to="/pizza"><Button data-cy="im-hungry" id="order-pizza">ACIKTIM</Button> </Link></div>
        </header>
    )

}
export default Home