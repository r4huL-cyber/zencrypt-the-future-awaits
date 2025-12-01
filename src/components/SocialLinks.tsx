import { Twitter, Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="w-10 h-10 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 opacity-0 animate-fade-up"
          style={{ animationDelay: `${1.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
