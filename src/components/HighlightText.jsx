import "./HighlightText.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function HighlightText({ text }) {
  const spanRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      spanRef.current,
      { backgroundPosition: "400% 50%" },
      {
        backgroundPosition: "0% 50%",
        duration: 10,
        ease: "none",
        repeat: -1,
      },
    );
  }, []);

  return (
    <>
      <span className="highlight" ref={spanRef}>
        {text}
      </span>
    </>
  );
}

export default HighlightText;
