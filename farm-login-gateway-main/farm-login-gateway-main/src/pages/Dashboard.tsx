
import React from 'react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-farm-50 p-6">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <div className="glass-morphism rounded-2xl p-8 w-full animate-scale-in">
          <h1 className="text-3xl font-semibold mb-4 text-center text-farm-900">
            Dashboard
          </h1>
          
          <p className="text-center text-muted-foreground mb-8">
            This is a placeholder for your main application dashboard.
          </p>
          
          <div className="flex justify-center">
            <Button onClick={() => window.history.back()} className="bg-farm-500 hover:bg-farm-600 text-white">
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
