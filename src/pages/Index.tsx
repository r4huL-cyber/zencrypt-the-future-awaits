import GridBackground from '@/components/GridBackground';
import FloatingParticles from '@/components/FloatingParticles';
import Logo from '@/components/Logo';
import CountdownTimer from '@/components/CountdownTimer';
import EmailSignup from '@/components/EmailSignup';
import SocialLinks from '@/components/SocialLinks';
import { Lock, Zap, Globe } from 'lucide-react';

const Index = () => {
  const features = [
    { icon: Lock, text: 'End-to-end encryption' },
    { icon: Zap, text: 'Lightning fast' },
    { icon: Globe, text: 'Decentralized' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GridBackground />
      <FloatingParticles />
      
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 sm:p-8">
          <Logo />
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Coming Soon
            </div>

            {/* Heading */}
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              The Future of{' '}
              <span className="text-primary text-glow">
                Secure
              </span>{' '}
              Communication
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Privacy-first messaging platform that puts you in control. 
              No compromises, no backdoors.
            </p>

            {/* Features */}
            <div 
              className="flex flex-wrap justify-center gap-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              {features.map((feature) => (
                <div 
                  key={feature.text}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Countdown */}
            <div className="py-8">
              <p 
                className="text-sm text-muted-foreground mb-6 uppercase tracking-wider opacity-0 animate-fade-up"
                style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
              >
                Launching In
              </p>
              <CountdownTimer />
            </div>

            {/* Email Signup */}
            <div 
              className="flex flex-col items-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
            >
              <p className="text-muted-foreground">
                Get notified when we launch
              </p>
              <EmailSignup />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p 
            className="text-sm text-muted-foreground opacity-0 animate-fade-up"
            style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
          >
            © 2024 Zencrypt. All rights reserved.
          </p>
          <SocialLinks />
        </footer>
      </main>
    </div>
  );
};

export default Index;
