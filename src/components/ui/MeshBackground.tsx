interface MeshBackgroundProps {
  dark?: boolean;
}

export default function MeshBackground({ dark = false }: MeshBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 ${dark ? "bg-dark" : "bg-grad-mesh"}`} />
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-secondary/10 blur-3xl animate-pulse-slow" />
    </div>
  );
}
