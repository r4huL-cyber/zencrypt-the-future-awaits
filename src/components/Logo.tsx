import { Shield } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
      <div className="relative">
        <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse-glow" />
        <div className="relative w-12 h-12 rounded-xl bg-primary/20 border border-primary/50 flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
      </div>
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-foreground">Zen</span>
        <span className="text-primary text-glow-subtle">crypt</span>
      </span>
    </div>
  );
};

export default Logo;
