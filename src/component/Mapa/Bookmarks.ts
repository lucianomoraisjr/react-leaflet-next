import { iconEsola } from "./Icons";

interface IMARKER {
    icon?: L.DivIcon
    popup?: string
    position: [number, number]
  }

 export const bookmarks: IMARKER[] = [
    {
    popup: "Escola Municipal",
    position: [-16.82142329363438, -49.25121304195203]
    },
    {
      icon:iconEsola,
      popup: "Escola Municipal",
      position: [-16.822672322463514, -49.26253199958473]
      },

];