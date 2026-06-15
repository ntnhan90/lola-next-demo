import CakePreview from "@/features/preview/CakePreview";
import { ProductProvider } from "@/context/ProductContext";
import Configurator from "@/features/configurator/Configurator";
import product from "@/mock/products/classic-round";
export default function Home() {

  return (
    <ProductProvider product={product}>
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
    </ProductProvider>

  );

}