
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const Animations = () => {
  const { toast } = useToast();
  const [isAnimating, setIsAnimating] = useState<Record<string, boolean>>({});

  const triggerAnimation = (animationName: string) => {
    setIsAnimating((prev) => ({ ...prev, [animationName]: true }));
    setTimeout(() => {
      setIsAnimating((prev) => ({ ...prev, [animationName]: false }));
    }, 1000);
    
    toast({
      description: `${animationName} animation triggered`,
      duration: 1500,
    });
  };

  const animations = {
    basic: [
      { name: 'fade', class: 'opacity-0' },
      { name: 'scale', class: 'scale-50' },
      { name: 'slide-up', class: 'translate-y-10' },
      { name: 'slide-down', class: '-translate-y-10' },
      { name: 'slide-left', class: 'translate-x-10' },
      { name: 'slide-right', class: '-translate-x-10' },
      { name: 'rotate', class: 'rotate-180' },
      { name: 'flip', class: 'rotate-y-180' },
    ],
    combined: [
      { name: 'pop', class: 'scale-50 opacity-0' },
      { name: 'zoom-in', class: 'scale-150 opacity-0' },
      { name: 'drop-in', class: '-translate-y-10 opacity-0' },
      { name: 'swing-in', class: 'rotate-12 opacity-0' },
      { name: 'bounce', class: 'translate-y-4' },
      { name: 'pulse', class: 'scale-110' },
      { name: 'shake', class: 'translate-x-1' },
      { name: 'float', class: '-translate-y-3' },
    ]
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Animations Test Page</h1>
          <p className="text-muted-foreground">Test various animation effects and transitions</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Animation Playground</CardTitle>
            <CardDescription>Click on the boxes to trigger different animations</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="basic">Basic Animations</TabsTrigger>
                <TabsTrigger value="combined">Combined Animations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {animations.basic.map((animation) => (
                    <div key={animation.name} className="flex flex-col items-center">
                      <div
                        className={cn(
                          "w-20 h-20 bg-primary/80 rounded-lg flex items-center justify-center text-white cursor-pointer mb-2 transition-all duration-300",
                          isAnimating[animation.name] && animation.class
                        )}
                        onClick={() => triggerAnimation(animation.name)}
                      >
                        {animation.name}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => triggerAnimation(animation.name)}
                      >
                        Trigger
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="combined" className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {animations.combined.map((animation) => (
                    <div key={animation.name} className="flex flex-col items-center">
                      <div
                        className={cn(
                          "w-20 h-20 bg-secondary rounded-lg flex items-center justify-center cursor-pointer mb-2 transition-all duration-300",
                          isAnimating[animation.name] && animation.class
                        )}
                        onClick={() => triggerAnimation(animation.name)}
                      >
                        {animation.name}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => triggerAnimation(animation.name)}
                      >
                        Trigger
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Button Hover Effects</CardTitle>
              <CardDescription>Examples of button hover animations</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button className="transition-all duration-300 hover:translate-y-[-5px]">
                Hover Float
              </Button>
              <Button className="transition-all duration-300 hover:scale-105">
                Hover Scale
              </Button>
              <Button className="transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600">
                Hover Gradient
              </Button>
              <Button className="transition-all duration-300 hover:shadow-lg hover:shadow-blue-200">
                Hover Shadow
              </Button>
              <Button className="transition-all duration-300 group relative overflow-hidden">
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative">Shine Effect</span>
              </Button>
              <Button className="transition-all duration-300 relative group">
                <span className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Glow Effect</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Interactive Animation Demo</CardTitle>
              <CardDescription>Animations triggered by user interactions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-full h-12 bg-muted rounded-full">
                  <div
                    className={cn(
                      "absolute top-0 left-0 h-12 w-12 bg-primary rounded-full transition-all duration-700 flex items-center justify-center text-white",
                      isAnimating['progress'] ? 'w-full rounded-full' : 'w-12'
                    )}
                  ></div>
                </div>
                <Button 
                  onClick={() => {
                    triggerAnimation('progress');
                    toast({
                      title: "Progress Animation",
                      description: "Progress bar animation complete",
                      duration: 2000,
                    });
                  }}
                >
                  Animate Progress
                </Button>
              </div>
              
              <div className="flex flex-col items-center space-y-6">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i}
                      className={cn(
                        "w-4 h-16 bg-muted rounded-full transition-all duration-300",
                        isAnimating['equalizer'] && `bg-primary animate-bounce delay-${i*100}`
                      )}
                    ></div>
                  ))}
                </div>
                <Button 
                  onClick={() => {
                    triggerAnimation('equalizer');
                    setTimeout(() => setIsAnimating(prev => ({ ...prev, equalizer: false })), 2000);
                  }}
                >
                  Trigger Equalizer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Keyframe Animations</CardTitle>
            <CardDescription>Examples of complex keyframe animations</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-4">
              <div 
                className={cn(
                  "w-20 h-20 bg-test-blue rounded-lg",
                  isAnimating['pulse'] && "animate-[pulse_2s_infinite]"
                )}
              ></div>
              <Button onClick={() => {
                triggerAnimation('pulse');
                setTimeout(() => setIsAnimating(prev => ({ ...prev, pulse: false })), 6000);
              }}>
                Pulse Animation
              </Button>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div 
                className={cn(
                  "w-20 h-20 bg-test-green rounded-full",
                  isAnimating['spin'] && "animate-[spin_1s_linear_infinite]"
                )}
              ></div>
              <Button onClick={() => {
                triggerAnimation('spin');
                setTimeout(() => setIsAnimating(prev => ({ ...prev, spin: false })), 6000);
              }}>
                Spin Animation
              </Button>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div 
                className={cn(
                  "w-20 h-20 bg-test-purple rounded-lg",
                  isAnimating['bounce'] && "animate-[bounce_1s_infinite]"
                )}
              ></div>
              <Button onClick={() => {
                triggerAnimation('bounce');
                setTimeout(() => setIsAnimating(prev => ({ ...prev, bounce: false })), 6000);
              }}>
                Bounce Animation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Animations;
