import { AngledAbutment } from "./AngledAbutment";
import { FixtureLabAnalog } from "./FixtureLabAnalog";
import { FuxtureNt2 } from "./FuxtureNt2";
import { HealingAbutment } from "./HealingAbutment";
import { ImpressionCopingPickUp } from "./ImpressionCopingPickUp";
import { ImpressionCopingTransfer } from "./ImpressionCopingTransfer";
import { StraightAbutment } from "./StraightAbutment";
import { SurgicalKit } from "./SurgicalKit";
import { UCLAAbutment } from "./UCLAAbutment";

const implantSystemProducts: { [key: string]: React.ComponentType } = {
  AngledAbutment,
  FixtureLabAnalog,
  FuxtureNt2,
  HealingAbutment,
  ImpressionCopingPickUp,
  ImpressionCopingTransfer,
  StraightAbutment,
  SurgicalKit,
  UCLAAbutment,
};

export default implantSystemProducts;
