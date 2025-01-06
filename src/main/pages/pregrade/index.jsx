import React from "react";
import AdminScienceSummary from "./faculties/admin_science/faculty_summary";

export default function Pregrade(){

    return(
        <main>
            <div className="pregrade-title">
                <h2>Pregrado en UNTELS</h2>
            </div>
            <AdminScienceSummary/>
            
        </main>
    );
}