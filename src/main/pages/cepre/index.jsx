import React from "react"
import Banner from "./sections/banner.jsx";
import Ciclo from "./sections/ciclo.jsx";
import Modalities from "./sections/modalities.jsx";
import Vacancies from "./sections/vacancies.jsx";
import Schedule from "./sections/schedule.jsx";
import Activities from "./sections/activities.jsx";
import Lessons from "./sections/lessons.jsx";

export default function Cepre(){


    return(
        <main className="d-flex flex-column gap-5 pb-5">
            <Banner/>
            <Ciclo/>
            <Modalities/>
            <Vacancies/>
            <Schedule/>
            <Activities/>
            <Lessons/>
        </main>
    );
}