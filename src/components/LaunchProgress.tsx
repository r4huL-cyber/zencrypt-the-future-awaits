import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const LaunchProgress = () => {
  const [progress, setProgress] = useState(0);
  const totalDays = 45;

  useEffect(() => {
    // Calculate progress (starts at 0%, ends at 100% when launched)
    // For demo purposes, we'll show progress based on a fixed start date
    const startDate = new Date();
    startDate.setDate(startDate.getDate()); // Start is "now"
    
    // Since we're 45 days out, progress starts near 0
    // As days pass, progress increases
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + totalDays);
    
    const totalTime = totalDays * 24 * 60 * 60 * 1000;
    const elapsed = 0; // Just started
    const progressPercent = Math.min(100, Math.max(0, (elapsed / totalTime) * 100));
    
    // Animate the progress bar on load
    const timer = setTimeout(() => {
      setProgress(Math.max(5, progressPercent)); // Show at least 5% for visibility
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="mt-8 max-w-md mx-auto opacity-0 animate-fade-up"
      style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
    >
      <div className="flex justify-between text-xs text-muted-foreground mb-2">
        <span>Development</span>
        <span>{progress.toFixed(0)}% Complete</span>
      </div>
      <Progress value={progress} className="h-2 bg-muted/50" />
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Building something amazing for you
      </p>
    </div>
  );
};

export default LaunchProgress;
