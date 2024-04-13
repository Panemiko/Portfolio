export function ColorStrip() {
  return (
    <div className="shadow-2xl md:grid hidden shadow-primary/40 fixed md:left-12 lg:left-40 top-0 min-h-screen w-32 grid-cols-3">
      <div className="bg-secondary"></div>
      <div className="bg-primary">
        <div className="w-full h-full bg-[#000]/30"></div>
      </div>
      <div className="bg-primary"></div>
    </div>
  );
}
