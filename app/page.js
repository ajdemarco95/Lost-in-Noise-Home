import { publicEvents } from "./apiEndpoints";
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
    <main>
      {console.log(mostRecentEvent.description)}
      <Image width={535} height={669} src={mostRecentEvent.flyer} />
      <p>{mostRecentEvent.description}</p>
      <button className="btn">Get Tickets!</button>
    </main>
  );
}
