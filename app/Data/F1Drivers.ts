import { RankableItemTemplate } from "../RankableItem";
import { StaticImageData } from "next/image";

import AlexAlbon from "../../public/Images/F1 Drivers/alexAlbon.png";
import CarlosSainz from "../../public/Images/F1 Drivers/carlosSainz.png";
import CharlesLeclerc from "../../public/Images/F1 Drivers/charlesLeclerc.png";
import DanielRicciardo from "../../public/Images/F1 Drivers/danielRicciardo.png";
import EstebanOcon from "../../public/Images/F1 Drivers/estebanOcon.png";
import FernandoAlonso from "../../public/Images/F1 Drivers/fernandoAlonso.png";
import GeorgeRussell from "../../public/Images/F1 Drivers/georgeRussell.png";
import KevinMagnussen from "../../public/Images/F1 Drivers/kevinMagnussen.png";
import LanceStroll from "../../public/Images/F1 Drivers/lanceStroll.png";
import LandoNorris from "../../public/Images/F1 Drivers/landoNorris.png";
import LewisHamilton from "../../public/Images/F1 Drivers/lewisHamilton.png";
import LoganSargeant from "../../public/Images/F1 Drivers/loganSargeant.png";
import MaxVerstappen from "../../public/Images/F1 Drivers/maxVerstappen.png";
import NicoHulkenberg from "../../public/Images/F1 Drivers/nicoHulkenberg.png";
import OscarPiastri from "../../public/Images/F1 Drivers/oscarPiastri.png";
import PierreGasly from "../../public/Images/F1 Drivers/pierreGasly.png";
import SergioPerez from "../../public/Images/F1 Drivers/sergioPerez.png";
import ValtteriBottas from "../../public/Images/F1 Drivers/valtteriBottas.png";
import YukiTsunoda from "../../public/Images/F1 Drivers/yukiTsunoda.png";
import ZhouGuanyu from "../../public/Images/F1 Drivers/zhouGuanyu.png";

const F1DriversImageObjects: { image: StaticImageData; alt: string }[] = [
  { image: AlexAlbon, alt: "Alex Albon" },
  { image: CarlosSainz, alt: "Carlos Sainz" },
  { image: CharlesLeclerc, alt: "Charles Leclerc" },
  { image: DanielRicciardo, alt: "Daniel Ricciardo" },
  { image: EstebanOcon, alt: "Esteban Ocon" },
  { image: FernandoAlonso, alt: "Fernando Alonso" },
  { image: GeorgeRussell, alt: "George Russell" },
  { image: KevinMagnussen, alt: "Kevin Magnuseen" },
  { image: LanceStroll, alt: "Lance Stroll" },
  { image: LandoNorris, alt: "Lando Norris" },
  { image: LewisHamilton, alt: "Lewis Hamilton" },
  { image: LoganSargeant, alt: "Logan Sargeant" },
  { image: MaxVerstappen, alt: "Max Verstappen" },
  { image: NicoHulkenberg, alt: "Nico Hulkenberg" },
  { image: OscarPiastri, alt: "Oscar Piastri" },
  { image: PierreGasly, alt: "Pierre Gasly" },
  { image: SergioPerez, alt: "Sergio Perez" },
  { image: ValtteriBottas, alt: "Valtteri Bottas" },
  { image: YukiTsunoda, alt: "Yuki Tsunoda" },
  { image: ZhouGuanyu, alt: "Zhou Guanyu" },
];

export const F1Drivers: RankableItemTemplate[] = F1DriversImageObjects.map((ImageObject, Index) => ({
  id: `${ImageObject.alt}_${Index + 1}`,
  ...ImageObject,
}));
