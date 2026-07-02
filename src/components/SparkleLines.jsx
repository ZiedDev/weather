import "./sparkleLines.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const LINES = [
  { top: "32%", left: "20.6%", length: 57, rotate: 60 }, // top-left
  { top: "30%", left: "49.6%", length: 47, rotate: -85 }, // top-center
  { top: "37.5%", left: "84.5%", length: 53, rotate: -30.5 }, // top-right
  { top: "54.1%", left: "9.3%", length: 46, rotate: 5 }, // left
  { top: "56.1%", left: "90.8%", length: 35, rotate: 12 }, // right
  { top: "70.1%", left: "20.2%", length: 52, rotate: -37 }, // bottom-left
  { top: "70.6%", left: "49.8%", length: 44, rotate: 87 }, // bottom-center
  { top: "70.2%", left: "84.6%", length: 53, rotate: 41 }, // bottom-right
];

function SparkleLines() {
  useGSAP(() => {
    const sparkleLines = document.querySelector(".sparkle-lines");

    gsap.to(sparkleLines, {
      scale: 0.95,
      duration: 1.8 + Math.random() * 2.4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="sparkle-lines">
      {LINES.map((line, i) => (
        <div
          key={i}
          className="sparkle-line-wrapper"
          style={{ top: line.top, left: line.left }}
        >
          <span
            className="sparkle-line"
            style={{
              width: `${line.length}px`,
              transform: `rotate(${line.rotate}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default SparkleLines;
