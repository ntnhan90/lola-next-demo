import CakePreview from "@/features/preview/CakePreview";

import Configurator from "@/features/configurator/Configurator";

export default function Home() {

  return (

    <div className="container py-5">

      <div className="row">

        <div className="col-lg-7">

          <CakePreview />

        </div>

        <div className="col-lg-5">

          <Configurator />

        </div>

      </div>

    </div>

  );

}