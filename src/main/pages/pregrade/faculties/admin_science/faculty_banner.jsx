import React from "react";
import bannerIMG from '@/assets/banner_faculty_admin.png';
import "@/styles/faculties.css"
export default function Banner(){
    return(
        <section>
            <div className="career-title container-fluid">
                <img src={bannerIMG} className="banner-img" width="100%"/>
                <div className="banner-career">
                    <h3 className="on-primary-color banner-text"><b>FACULTAD DE</b></h3>
                    <h2 className="background-title banner-title"><b>CIENCIAS ADMINISTRATIVAS Y FINANCIERAS</b></h2>
                </div>
            </div>
        </section>
    );
}