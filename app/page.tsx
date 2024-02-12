import { Sun, Moon, Bird, Cloudy } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex gap-3">
        <Sun size={30} className="hover:scale-150 transition duration-300" />
        <Moon size={30} className="hover:scale-150 transition duration-300" />
        <Cloudy size={32} className="hover:scale-150 transition duration-300" />
        <Bird
          size={30}
          scale={1}
          className="hover:scale-150 transition duration-300"
        />
      </div>
    </div>
  );
}
