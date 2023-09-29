import { useEffect } from "react";
import aosLoad from "../AOS/aosLoad";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, 
    BiLogoPython, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";

const icons = [
    { icon: BiLogoHtml5, label: "HTML" },
    { icon: BiLogoCss3, label: "CSS" },
    { icon: BiLogoJavascript, label: "JavaScript" },
    { icon: BiLogoPython, label: "Python" },
    { icon: BiLogoReact, label: "React" },
    { icon: BiLogoTailwindCss, label: "TailwindCSS" }
  ];
  
function SkillList() {
    useEffect(() => {
        aosLoad();
    }, []);
    return (
        <div data-aos="fade-right" data-aos-duration="1500" data-aos-offset="100"
        data-aos-easing="ease-in-sine">
            <p className="text-2xl md:font-semibold underline mb-3 lg:mb-6"> SKILLS </p>
            <div className="flex flex-col items-center gap-5">
                <ul className="flex gap-8 font-medium">
                {icons.slice(0, 3).map(({ icon: Icon, label }) => (
                    <li key={label} className="transition hover:scale-125">
                    <Icon size={48}/> {label}
                    </li>
                ))}
                </ul>
                <ul className="flex gap-8 font-medium">
                {icons.slice(3).map(({ icon: Icon, label }) => (
                    <li key={label} className="transition hover:scale-125">
                    <Icon size={48}/> {label}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default SkillList