import { RankableItemTemplate } from "../RankableItem";
import { StaticImageData } from "next/image";

// Red Bull
import MaxVerstappen from "../../public/Images/F1 Drivers/maxVerstappen.png";
import SergioPerez from "../../public/Images/F1 Drivers/sergioPerez.png";
// Mercedes
import LewisHamilton from "../../public/Images/F1 Drivers/lewisHamilton.png";
import GeorgeRussell from "../../public/Images/F1 Drivers/georgeRussell.png";
// Aston Martin
import FernandoAlonso from "../../public/Images/F1 Drivers/fernandoAlonso.png";
import LanceStroll from "../../public/Images/F1 Drivers/lanceStroll.png";
// Ferrari
import CharlesLeclerc from "../../public/Images/F1 Drivers/charlesLeclerc.png";
import CarlosSainz from "../../public/Images/F1 Drivers/carlosSainz.png";
// McLaren
import LandoNorris from "../../public/Images/F1 Drivers/landoNorris.png";
import OscarPiastri from "../../public/Images/F1 Drivers/oscarPiastri.png";
// Alpine
import EstebanOcon from "../../public/Images/F1 Drivers/estebanOcon.png";
import PierreGasly from "../../public/Images/F1 Drivers/pierreGasly.png";
// Williams
import AlexAlbon from "../../public/Images/F1 Drivers/alexAlbon.png";
import LoganSargeant from "../../public/Images/F1 Drivers/loganSargeant.png";
// Haas
import KevinMagnussen from "../../public/Images/F1 Drivers/kevinMagnussen.png";
import NicoHulkenberg from "../../public/Images/F1 Drivers/nicoHulkenberg.png";
// Alfa Romeo
import ValtteriBottas from "../../public/Images/F1 Drivers/valtteriBottas.png";
import ZhouGuanyu from "../../public/Images/F1 Drivers/zhouGuanyu.png";
// AlphaTauri
import YukiTsunoda from "../../public/Images/F1 Drivers/yukiTsunoda.png";
import DanielRicciardo from "../../public/Images/F1 Drivers/danielRicciardo.png";

const F1DriversImageObjects: { image: StaticImageData; alt: string }[] = [
  // Red Bull
  { image: MaxVerstappen, alt: "Max Verstappen" },
  { image: SergioPerez, alt: "Sergio Perez" },
  // Mercedes
  { image: LewisHamilton, alt: "Lewis Hamilton" },
  { image: GeorgeRussell, alt: "George Russell" },
  // Aston Martin
  { image: FernandoAlonso, alt: "Fernando Alonso" },
  { image: LanceStroll, alt: "Lance Stroll" },
  // Ferrari
  { image: CharlesLeclerc, alt: "Charles Leclerc" },
  { image: CarlosSainz, alt: "Carlos Sainz" },
  // McLaren
  { image: LandoNorris, alt: "Lando Norris" },
  { image: OscarPiastri, alt: "Oscar Piastri" },
  // Alpine
  { image: EstebanOcon, alt: "Esteban Ocon" },
  { image: PierreGasly, alt: "Pierre Gasly" },
  // Williams
  { image: AlexAlbon, alt: "Alex Albon" },
  { image: LoganSargeant, alt: "Logan Sargeant" },
  // Haas
  { image: KevinMagnussen, alt: "Kevin Magnuseen" },
  { image: NicoHulkenberg, alt: "Nico Hulkenberg" },
  // Alfa Romeo
  { image: ValtteriBottas, alt: "Valtteri Bottas" },
  { image: ZhouGuanyu, alt: "Zhou Guanyu" },
  // AlphaTauri
  { image: YukiTsunoda, alt: "Yuki Tsunoda" },
  { image: DanielRicciardo, alt: "Daniel Ricciardo" },
];

export const F1Drivers: RankableItemTemplate[] = F1DriversImageObjects.map((ImageObject, Index) => ({
  id: `${ImageObject.alt}_${Index + 1}`,
  ...ImageObject,
}));
