import { React } from "react";
import Banner from "./sections/banner";
import FixedDrawerLayout from "@/components/fixed_drawer";
import Mission from "./sections/mission";
import Review from "./sections/review";
import Statute from "./sections/statute";
import OrganizationChart from "./sections/organization_chart";
import Directory from "./sections/directory";
import DirectoryTel from "./sections/directory_tel";
import Campus from "./sections/campus";

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
    title: "Directorio Telefónico (Anexos)",
    searchParam: "directorio-telefonico",
  },
  {
    title: "Mapa del campus",
    searchParam: "campus",
  },
  {
    title: "Memoria anual",
    searchParam: "memoria",
  },
  {
    title: "Convenios",
    searchParam: "convenios",
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
        <Directory />
        <DirectoryTel />
        <Campus />
      </FixedDrawerLayout>
    </main>
  );
}
