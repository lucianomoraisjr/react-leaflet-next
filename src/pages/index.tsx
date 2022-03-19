import type { NextPage } from 'next'
import dynamic from "next/dynamic";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../component/Mapa"), {
    ssr: false
  });

  return (
    <main>
    <div id="map">
      <MapWithNoSSR />
    </div>
  </main>
  )
}

