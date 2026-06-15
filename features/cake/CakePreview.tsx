import CakeCanvas from "./CakeCanvas";

export default function CakePreview() {
  return (
    <section className="preview-panel">

      <div className="preview-header">

        <h2>Classic Round</h2>

        <p>Vanilla</p>

      </div>

      <CakeCanvas />

    </section>
  );
}