import type { NextPage } from 'next'
import dynamic from "next/dynamic";


export default function Home() {
  const Map = dynamic(() => import("../component/Mapa"), {
    ssr: false
  });



  return (
    <main>
     <div id="map">
        <Map center={[-16.82142329363438, -49.25121304195203]} />
      </div>
    </main>
  )
}

