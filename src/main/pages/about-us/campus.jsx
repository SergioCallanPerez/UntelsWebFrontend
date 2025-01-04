import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/root.css";
import mapIMG from "@/assets/MapaCampusUniversitario.png";
import "@/styles/about-us.css";

export default function Campus(){
    return (
        <main className="background">

                <h3 className="ms-3 about-us-title with-h-divider-on-background">Campus</h3>
                <div className="d-flex justify-content-center">
                    <img src= {mapIMG}></img>
                </div>
                
        </main>
    );
}