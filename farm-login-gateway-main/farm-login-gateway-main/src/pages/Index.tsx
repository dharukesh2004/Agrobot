
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import LoginForm from '@/components/LoginForm';
import SignupForm from '@/components/SignupForm';

const Index = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Farm image */}
      <div 
        className="md:w-1/2 h-40 md:h-screen relative overflow-hidden bg-farm-200"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)',
            filter: 'brightness(0.9)' 
          }}
        ></div>
        <div className="absolute inset-0 bg-farm-900/20 backdrop-blur-[2px]"></div>
        
        {/* Content on top of the image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
          <div className="animate-fade-up">
            <Logo className="text-white mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-md">
              Revolutionize Your Farming Experience
            </h1>
            <p className="text-white/80 max-w-md">
              Join thousands of farmers who have transformed their agricultural operations with our cutting-edge platform.
            </p>
          </div>
        </div>
      </div>
      
      {/* Right side - Login/Signup form */}
      <div className="md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          {showLoginForm ? (
            <LoginForm onSwitchForm={() => setShowLoginForm(false)} />
          ) : (
            <SignupForm onSwitchForm={() => setShowLoginForm(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
