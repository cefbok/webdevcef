import AOS from "aos";
import "aos/dist/aos.css";

export default function aosLoad() {
  AOS.init({
    delay: 300,
    duration: 500,
    offset: 100,
    easing: "ease",
  });
  AOS.refresh();
}