import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import { useState } from 'react';

interface IMARKER {
  tipoIcon: string
  popup?: string
  position: [number, number]
}

export default function Home() {
  const Map = dynamic(() => import("../component/Mapa"), {
    ssr: false
  });

  const markers: IMARKER[] = [
    {
    tipoIcon: "escola",
    popup: "Escola Municipal",
    position: [-16.82142329363438, -49.25121304195203]
    },
    {
      tipoIcon: "escola",
      popup: "Escola Municipal",
      position: [-16.822672322463514, -49.26253199958473]
      },

];

const markers2: IMARKER[] = [
  {
  tipoIcon:"img",
  popup: "Escola Municipal",
  position: [-16.82142329363438, -49.25121304195203]
  },
  {
    tipoIcon: "img",
    popup: "Escola Municipal",
    position: [-16.822672322463514, -49.26253199958473]
    },

];

  const [stateMarker,setStateMarker]= useState<IMARKER[]>(markers)

  return (
    <main>
     
      <div id="map">
        <Map center={[-16.82142329363438, -49.25121304195203]} markers={ stateMarker} />
      </div>
    </main>
  )
}

