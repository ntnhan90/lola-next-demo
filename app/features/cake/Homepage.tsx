import MainLayout from "@/app/shared/layout/MainLayout";
import CakePreview from "./CakePreview";
import Sidebar from "../sidebar/Sidebar";
import Configurator from "../configurator/components/Configurator";

export default function HomePage() {
  return (
    <MainLayout
      preview={<CakePreview />}
      sidebar={<Sidebar />}
      configurator={<Configurator />}
    />
  );
}