import Shadow from "./layers/Shadow";
import Plate from "./layers/Plate";
import Cake from "./layers/Cake";

export default function CakeCanvas() {
  return (
    <div className="cake-canvas">

      <Shadow />

      <Cake />

      <Plate />

    </div>
  );
}