import { ReactNode } from "react";

type Props = {
  preview: ReactNode;
  sidebar: ReactNode;
  configurator: ReactNode;
};

export default function MainLayout({
  preview,
  sidebar,
  configurator,
}: Props) {
  return (
    <main className="cake-layout container-fluid">

      <div className="row g-4">

        <div className="col-xl-8">

          {preview}

        </div>

        <div className="col-xl-4">

          {sidebar}

        </div>

      </div>

      <div className="mt-4">

        {configurator}

      </div>

    </main>
  );
}