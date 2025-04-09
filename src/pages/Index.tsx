
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  const pages = [
    { 
      title: 'Forms', 
      path: '/forms', 
      description: 'Test various form components and validations',
      color: 'test-blue'
    },
    { 
      title: 'Tables', 
      path: '/tables', 
      description: 'Display and interact with tabular data',
      color: 'test-green'
    },
    { 
      title: 'Cards', 
      path: '/cards', 
      description: 'Different card layouts and designs',
      color: 'test-purple'
    },
    { 
      title: 'Charts', 
      path: '/charts', 
      description: 'Visualize data with various charts and graphs',
      color: 'test-orange'
    },
    { 
      title: 'Animations', 
      path: '/animations', 
      description: 'Test various animation effects and transitions',
      color: 'test-pink'
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">React Test Pages</h1>
          <p className="text-xl text-muted-foreground">
            A collection of pages for testing various React components and layouts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Card key={page.path} className="overflow-hidden border-t-4" style={{ borderTopColor: `var(--${page.color})` }}>
              <CardHeader>
                <CardTitle>{page.title}</CardTitle>
                <CardDescription>{page.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Click below to navigate to the {page.title} test page and explore various examples.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: `Going to ${page.title}`,
                      description: `You chose to explore the ${page.title} page`,
                      duration: 2000,
                    });
                  }}
                >
                  <Link to={page.path}>Visit {page.title} Page</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
