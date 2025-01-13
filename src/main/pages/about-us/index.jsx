import { React } from "react";
import Banner from "./sections/banner";
import FixedDrawerLayout from "@/components/fixed_drawer";
import Mission from "./sections/mission";
import Review from "./sections/review";
import Statute from "./sections/statute";
import OrganizationChart from "./sections/organization_chart";

const navData = [
  {
    title: "Misión, visión y valores",
    searchParam: "mision",
  },
  {
    title: "Reseña histórica",
    searchParam: "historia",
  },
  {
    title: "Estatuto",
    searchParam: "estatuto",
  },
  {
    title: "Organigrama",
    searchParam: "organigrama",
  },
  {
    title: "Directorio institucional",
    searchParam: "directorio",
  },
  {
    title: "Mapa del campus",
    searchParam: "mapa",
  },
  {
    title: "Convenios",
    searchParam: "convenios",
  },
  {
    title: "Memoria anual",
    searchParam: "memoria",
  },
  {
    title: "Mesa de parte",
    searchParam: "mesa",
  },
];

export default function AbutUs() {
  return (
    <main className="d-flex flex-column gap-5 pb-5">
      <Banner />
      <FixedDrawerLayout
        title={<h4>Acerca de la universidad</h4>}
        navData={navData}
        searchName="section"
      >
        <Mission />
        <Review />
        <Statute />
        <OrganizationChart />
      </FixedDrawerLayout>
    </main>
  );
}

