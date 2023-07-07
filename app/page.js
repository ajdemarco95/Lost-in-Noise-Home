import { publicEvents } from "./apiEndpoints";
import logo from "../public/assets/logo.png";
import Image from "next/image";

async function getData() {
  const res = await fetch(publicEvents);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // console.log(await res.json());
  return res.json();
}

export default async function Home() {
  const data = await getData();

  const mostRecentEvent = data.events[data.events.length - 1];

  return (
    <main className="bg-fuchsia-600">
      <div className="container mx-auto flex flex-col items-center">
        <Image src={logo} className="w-full my-10" alt="logo" />
        <div className="flex flex-col items-center max-w-[50%]">
          <div className="w-1/3">
            <Image
              width={535}
              height={669}
              src={mostRecentEvent.flyer}
              alt="flyer"
            />
          </div>
          <p>{mostRecentEvent.description}</p>
          <button className="btn">Get Tickets!</button>
        </div>
      </div>
      {console.log(mostRecentEvent.description)}
    </main>
  );
}
