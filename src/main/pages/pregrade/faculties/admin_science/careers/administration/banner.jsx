import React from "react";
import bannerIMG from '@/assets/admin_banner.png';
import "@/styles/careers.css"
export default function Banner(){
    return(
        <section>
            <div className="career-title container-fluid">
                <img src={bannerIMG} className="banner-img"/>
                <div className="banner-career">
                    <h3 className="on-primary-color banner-text"><b>CARRERA DE</b></h3>
                    <h2 className="background-title banner-title"><b>ADMINISTRACIÓN DE EMPRESAS</b></h2>
                </div>
            </div>
        </section>
    );
}

