
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { ArrowRight } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();
  const [showStart, setShowStart] = React.useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStart(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleStart = () => {
    // In a real application, this would navigate to your main dashboard
    // For demo purposes, we'll just navigate to a URL param
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-farm-50 p-6">
      <div className="w-full max-w-md flex flex-col items-center">
        <Logo className="animate-fade-down mb-8" />
        
        <div className="glass-morphism rounded-2xl p-8 w-full animate-scale-in">
          <h1 className="text-3xl font-semibold mb-8 text-center text-farm-900 animate-blur-in">
            Welcome to Farm Matrix
          </h1>
          
          <div className="space-y-4 text-center">
            <p className="text-muted-foreground animate-fade-up">
              Your journey to efficient farm management starts here.
            </p>
            
            {showStart && (
              <Button 
                onClick={handleStart}
                className="bg-farm-500 hover:bg-farm-600 text-white px-8 py-6 rounded-lg font-medium text-lg group animate-fade-up"
              >
                Start
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
