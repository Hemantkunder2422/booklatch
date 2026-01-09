export const ComingSoon = () => {
  return (
    <div className="h-screen bg-background text-foreground flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      </div>

      <div className="text-center px-6 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1 text-sm mb-6 animate-slide-down">
          <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
          Launching Soon
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 animate-slide-up">
          Something <span className="text-primary">Special</span> is Coming
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-muted text-lg mb-10 animate-fade-in delay-150">
          Book venues, plan events, and connect with trusted vendors —
          all in one seamless platform.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4 animate-fade-in delay-300">
          <button className="rounded-xl bg-primary text-primary-foreground px-6 py-3 font-medium shadow-lg hover:scale-105 transition-transform">
            Notify Me
          </button>
          <button className="rounded-xl border border-border px-6 py-3 font-medium hover:bg-muted transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
