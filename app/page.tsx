import Image from "next/image";
import Aurora from './Components/background';

export default function Home() {
  return (
    <div className="h-screen w-screen fixed top-0 left-0">
      <Aurora
        colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
        blend={23.5}
        amplitude={0.7}
        speed={1}
      />
    </div>
  );
}
