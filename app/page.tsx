import Image from "next/image";
import mainCopy from "./context/main-copy.json";
import featCopy from "./context/features-copy.json";
import PANABU_LOGO from "@/app/icon.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex px-8 py-4 items-center justify-between">
        <div className="flex gap-4">
          <Image src={PANABU_LOGO} alt="Panabu Logo" height={32} />
          <p className="text-3xl font-semibold">{mainCopy.title}</p>
        </div>
        <p>👋 Coming Soon!</p>
      </div>

      <main className="flex flex-col items-center justify-start gap-16 p-12 text-center">
        <p
          className="font-bold text-5xl"
          dangerouslySetInnerHTML={{ __html: mainCopy.headline }}
        />

        <div className="flex gap-4 flex-wrap w-auto justify-center">
          {featCopy.map((feat, index) => (
            <ul key={index}>
              <li className="hover:border-[#7EE081] border-black border-2 p-6 rounded-md hover:translate-y-1 transition-all ease-out cursor-pointer w-72 h-36">
                <p className="text-xl font-semibold mb-2">{feat.name}</p>
                <p className="text-sm">{feat.description}</p>
              </li>
            </ul>
          ))}
        </div>

        <p className="text-sm">{mainCopy.philosophy}</p>
      </main>
    </div>
  );
}
