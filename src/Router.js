import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/navbar/home";
import About from "./components/navbar/about";
import Contact from "./components/navbar/contact-us";
import Delivery from "./components/navbar/delivery";
import Quotation from "./components/navbar/quotation";
import AntiStaticBags from "./components/product-data/bags/AntiStaticBags";
import BubblePouches from "./components/product-data/bags/BubblePouches";
import ClearPolyBags from "./components/product-data/bags/ClearPolyBags";
import ClearReclosableBags from "./components/product-data/bags/ClearReclosableBags";
import PolyBagSealer from "./components/product-data/bags/PolyBagSealer";
import PolyPropyleneBags from "./components/product-data/bags/PolypropyleneBags";
import PolyTubing from "./components/product-data/bags/PolyTubing";
import StaticShieldingBags from "./components/product-data/bags/StaticShieldingBags";
import VacuumBags from "./components/product-data/bags/VacuumBags";
import BoxStaplerStaples from "./components/product-data/corrugated-boxes/BoxStaplerStaples";
import CorrugatedBoxes from "./components/product-data/corrugated-boxes/CorrugatedBoxes";
import CorrugatedBulk from "./components/product-data/corrugated-boxes/CorrugatedBulkContainers";
import CorrugatedMailers from "./components/product-data/corrugated-boxes/CorrugatedMailers";
import CorrugatedPads from "./components/product-data/corrugated-boxes/CorrugatedPads";
import EasyFoldBox from "./components/product-data/corrugated-boxes/EasyFoldBoxes";
import MailingTubes from "./components/product-data/corrugated-boxes/MailingTubes";
import BubbleWrap from "./components/product-data/cushioning/BubbleWrap";
import BubbleWrapFoamDis from "./components/product-data/cushioning/BubbleWrapFoamDispenser";
import CushioningFoam from "./components/product-data/cushioning/CushioningFoam";
import KraftWrappingPaper from "./components/product-data/cushioning/KraftWrappingPaper";
import NewsprintWrappingPaper from "./components/product-data/cushioning/NewsprintWrappingPaper";
import PackingPeanuts from "./components/product-data/cushioning/PackingPeanuts";
import TissueWrappingPaper from "./components/product-data/cushioning/TissueWrappingPaper";
import CircleMailingLabels from "./components/product-data/labels-envelopes/CircleMailingLabels";
import LaserLabels from "./components/product-data/labels-envelopes/LaserLabels";
import PackingListEnvelopes from "./components/product-data/labels-envelopes/PackingListEnvelopes";
import ShippingHandlingLabels from "./components/product-data/labels-envelopes/ShippingHandlingLabels";
import ThermalTransfer from "./components/product-data/labels-envelopes/ThermalTransfer";
import KraftBubbleMailer from "./components/product-data/mailers/KraftBubbleMailer";
import PolyBubbleMailers from "./components/product-data/mailers/PolyBubbleMailers";
import PolyMailers from "./components/product-data/mailers/PolyMailers";
import CableTies from "./components/product-data/misc/CableTies";
import GlovesMasks from "./components/product-data/misc/GlovesMasks";
import MetalTruckSeals from "./components/product-data/misc/MetalTruckSeal";
import ShippingScales from "./components/product-data/misc/ShippingScales";
import TwistTies from "./components/product-data/misc/TwistTies";
import PolyStrappingMachine from "./components/product-data/strapping/poly-strapping-machine";
import PolyStrapping from "./components/product-data/strapping/PolyStrapping";
import PolyStrappingTools from "./components/product-data/strapping/PolyStrappingTools";
import SteelStrapping from "./components/product-data/strapping/SteelStrapping";
import VBoard from "./components/product-data/strapping/VBoard";
import HandStretchWrap from "./components/product-data/stretch-film/HandStretchWrap";
import MachineStretchWrap from "./components/product-data/stretch-film/MachineStretchWrap";
import OpaqueStretchWrap from "./components/product-data/stretch-film/OpaqueStretchWrap";
import ShrinkWrapRoll from "./components/product-data/stretch-film/ShrinkWrapRoll";
import ShrinkWrapSystem from "./components/product-data/stretch-film/ShrinkWrapSystem";
import StretchWrapMachinery from "./components/product-data/stretch-film/StretchWrapMachinery";
import CartonSealingTape from "./components/product-data/tape/CartonSealingTape";
import ColoredTape from "./components/product-data/tape/ColoredTape";
import CustomPrintTape from "./components/product-data/tape/CustomPrintTape";
import FilamentTape from "./components/product-data/tape/FilamentTape";
import MaskingTape from "./components/product-data/tape/MaskingTape";
import OfficeTapeDispenser from "./components/product-data/tape/OfficeTapeDispenser";
import TapeDispenser from "./components/product-data/tape/TapeDispenser";
import VinylTape from "./components/product-data/tape/VinylTape";
import WaterActivatedGummedTape from "./components/product-data/tape/WaterActivatedGummedTape";
import AirPillowMachine from "./components/product-data/tools-machines/AirPillowMachine";
import GlueGun from "./components/product-data/tools-machines/GlueGun";
import UtilityKnife from "./components/product-data/tools-machines/UtilityKnife";
import WrappingPaperDispenser from "./components/product-data/tools-machines/WrappingPaperDispenser";

const Router = () => (
  <Switch>
    {/*NAVBAR LINKS*/}
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact-us" component={Contact} />
    <Route path="/delivery" component={Delivery} />
    <Route path="/quotation" component={Quotation} />
    {/*BAGS*/}
    <Route path="/anti-static-bags" component={AntiStaticBags} />
    <Route path="/bubble-pouches" component={BubblePouches} />
    <Route path="/clear-poly-bags" component={ClearPolyBags} />
    <Route path="/clear-reclosable-bags" component={ClearReclosableBags} />
    <Route path="/poly-bag-sealer" component={PolyBagSealer} />
    <Route path="/polypropylene-bags" component={PolyPropyleneBags} />
    <Route path="/poly-tubing" component={PolyTubing} />
    <Route path="/static-shielding-bags" component={StaticShieldingBags} />
    <Route path="/vacuum-bags" component={VacuumBags} />
    {/*CORRUGATED BOXES*/}
    <Route path="/box-stapler-staples" component={BoxStaplerStaples} />
    <Route path="/corrugated-boxes" component={CorrugatedBoxes} />
    <Route path="/corrugated-bulk-containers" component={CorrugatedBulk} />
    <Route path="/corrugated-mailers" component={CorrugatedMailers} />
    <Route path="/corrugated-pads" component={CorrugatedPads} />
    <Route path="/easy-fold-boxes" component={EasyFoldBox} />
    <Route path="/mailing-tubes" component={MailingTubes} />
    {/*CUSHIONING*/}
    <Route path="/bubble-wrap" component={BubbleWrap} />
    <Route path="/bubble-wrap-foam-dispenser" component={BubbleWrapFoamDis} />
    <Route path="/cushioning-foam" component={CushioningFoam} />
    <Route path="/kraft-wrapping-paper" component={KraftWrappingPaper} />
    <Route
      path="/newsprint-wrapping-paper"
      component={NewsprintWrappingPaper}
    />
    <Route path="/packing-peanuts" component={PackingPeanuts} />
    <Route path="/tissue-wrapping-paper" component={TissueWrappingPaper} />
    {/*LABELS & ENVELOPES*/}
    <Route path="/circle-mailing-labels" component={CircleMailingLabels} />
    <Route path="/laser-labels" component={LaserLabels} />
    <Route path="/packing-list-envelopes" component={PackingListEnvelopes} />
    <Route
      path="/shipping-handling-labels"
      component={ShippingHandlingLabels}
    />
    <Route path="/thermal-transfer" component={ThermalTransfer} />
    {/*MAILERS*/}
    <Route path="/kraft-bubble-mailer" component={KraftBubbleMailer} />
    <Route path="/poly-bubble-mailer" component={PolyBubbleMailers} />
    <Route path="/poly-mailers" component={PolyMailers} />
    {/*STRAPPING*/}
    <Route path="/poly-strapping-machine" component={PolyStrappingMachine} />
    <Route path="/poly-strapping" component={PolyStrapping} />
    <Route path="/poly-strapping-tools" component={PolyStrappingTools} />
    <Route path="/steel-strapping" component={SteelStrapping} />
    <Route path="/v-board" component={VBoard} />
    {/*STRETCH FILM*/}
    <Route path="/hand-stretch-wrap" component={HandStretchWrap} />
    <Route path="/machine-stretch-wrap" component={MachineStretchWrap} />
    <Route path="/opaque-stretch-wrap" component={OpaqueStretchWrap} />
    <Route path="/shrink-wrap-roll" component={ShrinkWrapRoll} />
    <Route path="/shrink-wrap-system" component={ShrinkWrapSystem} />
    <Route path="/stretch-wrap-machinery" component={StretchWrapMachinery} />
    {/*TAPE*/}
    <Route path="/carton-sealing-tape" component={CartonSealingTape} />
    <Route path="/colored-tape" component={ColoredTape} />
    <Route path="/custom-print-tape" component={CustomPrintTape} />
    <Route path="/filament-tape" component={FilamentTape} />
    <Route path="/masking-tape" component={MaskingTape} />
    <Route path="/office-tape-dispenser" component={OfficeTapeDispenser} />
    <Route path="/tape-dispenser" component={TapeDispenser} />
    <Route path="/vinyl-tape" component={VinylTape} />
    <Route
      path="/water-activated-gummed-tape"
      component={WaterActivatedGummedTape}
    />
    {/*TOOLS & MACHINES*/}
    <Route path="/air-pillow-machine" component={AirPillowMachine} />
    <Route path="/glue-gun" component={GlueGun} />
    <Route path="/utility-knife" component={UtilityKnife} />
    <Route
      path="/wrapping-paper-dispenser"
      component={WrappingPaperDispenser}
    />
    {/*MISC*/}
    <Route path="/cable-ties" component={CableTies} />
    <Route path="/gloves-masks" component={GlovesMasks} />
    <Route path="/metal-truck-seal" component={MetalTruckSeals} />
    <Route path="/shipping-scales" component={ShippingScales} />
    <Route path="/twist-ties" component={TwistTies} />
  </Switch>
);

export default Router;
