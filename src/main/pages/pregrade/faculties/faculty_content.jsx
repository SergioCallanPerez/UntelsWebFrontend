import bannerAdmin from '@/assets/banner_faculty_admin.png';
import facultyAdminIMG from "@/assets/faculty_admin_science.png";
import adminIcon from "@/assets/svgs/monitoring.svg"
import marketingIcon from "@/assets/svgs/campaign.svg"


export const faculties=[
    {
        name: "CIENCIAS ADMINISTRATIVAS Y FINANCIERAS",
        desc: "Nuestra facultad se dedica a formar profesionales altamente capacitados en las áreas de administración y negocios internacionales. Con un enfoque en la innovación, el liderazgo y la ética, preparamos a nuestros estudiantes para destacar en un entorno empresarial dinámico y competitivo.",
        bannerIMG: bannerAdmin,
        facultyIMG: facultyAdminIMG,
        facultyCareers:[
            {
                icon: adminIcon,
                name: "Administración de empresas",
                desc: "Forma líderes con capacidad de gestión estratégica y habilidades para tomar decisiones que impacten positivamente en cualquier organización.",
                time: "5 años (10 semestres)",
                grade: "Bachiller en Administración",
                redirection: "/carreras/administracion"
            },
            {
                icon: marketingIcon,
                name: "Marketing y Negocios Internacionales",
                desc: "Prepara expertos en marketing y comercio internacional, capaces de diseñar estrategias globales para un mercado competitivo.",
                time: "5 años (10 semestres)",
                grade: "Bachiller en Marketing y Negocios Internacionales",
                redirection: "/carreras/marketing"
            }
        ],
    },
    {
        name: "INGENIERÍA AMBIENTAL E INDUSTRIAL",
        desc: "Nuestra facultad se dedica a formar profesionales comprometidos con el desarrollo sostenible, la innovación tecnológica y la eficiencia industrial. Con un enfoque en la sostenibilidad, la investigación y la responsabilidad social, preparamos a nuestros estudiantes para enfrentar los retos ambientales e industriales del futuro.",
        bannerIMG: bannerAdmin,
        facultyIMG: facultyAdminIMG,
        facultyCareers:[
            {
                icon: adminIcon,
                name: "Ingeniería Ambiental",
                desc: "Prepara especialistas en la gestión ambiental, capaces de diseñar soluciones innovadoras y sostenibles para proteger los recursos naturales y mitigar el impacto ambiental.",
                time: "5 años (10 semestres)",
                grade: "Bachiller en Ingeniería Ambiental",
                redirection: "/carreras/ingenieria_ambiental"
            },
            {
                icon: marketingIcon,
                name: "Ingeniería Industrial",
                desc: "Forma líderes en procesos industriales, con habilidades para optimizar recursos, mejorar la productividad y diseñar sistemas eficientes en un entorno competitivo.",
                time: "5 años (10 semestres)",
                grade: "Bachiller en Ingeniería Industrial",
                redirection: "/carreras/ingenieria_industrial"
            }
        ],
    },
    {
        name: "INGENIERÍA DE SISTEMAS COMPUTACIONALES",
        desc: "Nuestra facultad forma profesionales en tecnologías de la información y desarrollo de software, con un enfoque en la innovación, la solución de problemas complejos y la transformación digital. Preparamos a nuestros estudiantes para liderar proyectos tecnológicos en un mundo altamente conectado.",
        bannerIMG: bannerAdmin,
        facultyIMG: facultyAdminIMG,
        facultyCareers:[
            {
                icon: adminIcon,
                name: "Ingeniería de Sistemas de Información",
                desc: "Forma líderes con capacidad de gestión estratégica y habilidades para tomar decisiones que impacten positivamente en cualquier organización.",
                time: "5 años (10 semestres)",
                grade: "Bachiller en Sistemas de Información",
                redirection: "/carreras/administracion"
            },
            {
                icon: marketingIcon,
                name: "Ingeniería en Ciencia de Datos e Inteligencia Artificial",
                desc: "Prepara expertos en marketing y comercio internacional, capaces de diseñar estrategias globales para un mercado competitivo.",
                time: "5 años (10 semestres)",
                grade: "Bachiller en Ciencia de Datos",
                redirection: "/carreras/marketing"
            },
            {
                icon: adminIcon,
                name: "Ingeniería de Software",
                desc: "Especializa a los estudiantes en diseño, desarrollo y mantenimiento de aplicaciones y sistemas, utilizando tecnologías modernas para resolver necesidades empresariales y sociales.",
                time: "5 años (10 semestres)",
                grade: "Bachiller en Ingeniería de Software",
                redirection: "/carreras/administracion"
            },
        ],
    },
    {
        name: "INGENIERÍA MECÁNICA Y ELECTRÓNICA",
        desc: "Nuestra facultad se dedica a formar profesionales altamente capacitados en las áreas de administración y negocios internacionales. Con un enfoque en la innovación, el liderazgo y la ética, preparamos a nuestros estudiantes para destacar en un entorno empresarial dinámico y competitivo.",
        bannerIMG: bannerAdmin,
        facultyIMG: facultyAdminIMG,
        facultyCareers:[
            {
                icon: adminIcon,
                name: "Administración de empresas",
                desc: "Forma líderes con capacidad de gestión estratégica y habilidades para tomar decisiones que impacten positivamente en cualquier organización.",
                time: "5 años (10 semestres)",
                grade: "Bachiller en administración",
                redirection: "/carreras/administracion"
            },
            {
                icon: marketingIcon,
                name: "Marketing y Negocios Internacionales",
                desc: "Prepara expertos en marketing y comercio internacional, capaces de diseñar estrategias globales para un mercado competitivo.",
                time: "5 años (10 semestres)",
                grade: "Bachiller en marketing y negocios internacionales",
                redirection: "/carreras/marketing"
            }
        ],
    },
]