import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Send, Check } from 'lucide-react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    toast({
      title: "Success!",
      description: "You've been added to our waitlist.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-3 text-primary animate-fade-up">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Check className="w-5 h-5" />
        </div>
        <span className="text-lg">You're on the list!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
      />
      <Button 
        type="submit" 
        variant="glow" 
        size="lg"
        disabled={isLoading}
        className="group"
      >
        {isLoading ? (
          <span className="animate-pulse">Joining...</span>
        ) : (
          <>
            Notify Me
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  );
};

export default EmailSignup;
