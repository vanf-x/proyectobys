import React, { useReducer, useState } from "react";
import Contexto from "./Contexto";

const init = () => {
  const valor = localStorage.getItem("estado");
  return {
    estado: !!valor,
  };
};

const Provider = ({ children }) => {

const [logeado, setLogeado] = useState(false);


    //localStorage.setItem("estado", true);

//    localStorage.removeItem("estado");


  const [persona, setPersona] = useState({});
  const [empleados, setEmpleados] = useState([
    { nombre: "Héctor", apellido: "Sánchez" },
    { nombre: "Lautaro", apellido: "Montaño" },
    { nombre: "Carla", apellido: "Márquez" },
    { nombre: "Belén", apellido: "Oña" },
    { nombre: "Jasbir", apellido: "Singh" },
    { nombre: "Damián", apellido: "Bettini" },
    { nombre: "Sharon", apellido: "Ostrovsky" },
    { nombre: "Max", apellido: "Sauerbrey" },
    { nombre: "Dalma", apellido: "Ponce" },
    { nombre: "Facundo", apellido: "Aguirre" },
    { nombre: "Marcos", apellido: "Aguero" },
    { nombre: "Mirna", apellido: "Diaz" },
  ]);
  const [skill, setSkill] = useState([
    "Agile",
    "Android",
    "Angular",
    "AS400",
    "AWS Re start",
    "Base 24",
    "Blueprints",
    "C",
    "C#",
    "CICS",
    "Cobol",
    "Cobol AS400",
    "DevOps",
    "Digital Assistance",
    "Flutter",
    "Genesys IVR",
    "Governance",
    "HCM Oracle",
    "IBM Watson",
    "IOS",
    "IPO",
    "IT Risk",
    "Java",
    "Javascript",
    "Linux",
    "MDA",
    "Microsoft",
    "Mobile",
    "Monitoreo de Canales",
    "NOC",
    "Node.js",
    "On Site",
    "PHP",
    "Python",
    "QA",
    "React",
    "Remedy",
    "RPA",
    "RPG AS400",
    "SAP",
    "Seguridad Informatica",
    "Selenium",
    "SQL",
    "SRE",
    "Unity",
    "Visual Basic",
    "Vue.js",
    "Xamarin",
    "Z/OS",
    "Infraestructura",
    "Drupal",
    "PeopleSoft",
    "Open Banking",
    "Full Stack",
    "SysAdmin",
    "POS",
    "Microestrategy",
    "Plataformas Virtuales",
    "Idioma Chino",
    "Plataformas",
    "SQL Server 2016",
    "Cloud",
    "Salesforce",
    "Automation",
    "Marketing",
    "IBM Integracion BUS 10",
    "Conceptual Analytics",
    "API",
    "Tester",
    "PL/SQL",
    "QA VB",
    "Calipso",
    "Bantotal",
    "Genexus",
    "C++",
    "Videoconferencia",
    ".Net Core",
    "React/NodeJS",
  ]);

  const [seniority, setSeniority] = useState([
    "Trainee",
    "Jr",
    "Jr+",
    "Ssr",
    "Ssr+",
    "Sr",
  ]);
  const [fuenteContacto, setFuenteContacto] = useState([
    "MiBucle",
    "InMail",
    "Linkedin propio",
    "Instagram",
    "EducationIT",
    "Pagina G&L",
    "Tandil",
    "Email",
    "WhatsApp",
    "WeFoc",
    "Referido",
    "Empujar",
    "Proveedor",
  ]);
  const [rol, setRol] = useState([
    "Analista Tester Funcional",
    "Administrador",
    "Analista",
    "Analista Funcional",
    "Arquitecto",
    "Back Office",
    "Business Analyst",
    "Call Taker",
    "Consultor",
    "Data Entry",
    "Desarrollador",
    "Diseñaron UX/UI",
    "Especialista",
    "Ingeniero",
    "Lider Tecnico",
    "Operador",
    "Project Manager",
    "Scrum Master",
    "Soporte",
    "Tester",
    "Incident Manager",
    "Diseñador",
    "QA Tester",
    "Ciberseguridad",
    "Tester Automation",
    "QA Agile",
    "Diseñador Grafico",
  ]);

  return (
    <Contexto.Provider
      value={{
        empleados,
        setEmpleados,
        persona,
        setPersona,
        skill,
        setSkill,
        seniority,
        setSeniority,
        fuenteContacto,
        setFuenteContacto,
        rol,
        setRol,
        logeado,
        setLogeado
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
export default Provider;
