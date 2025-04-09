
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { MoreHorizontal, ThumbsUp, MessageCircle, Share2, Bookmark, Calendar, Clock, Cpu, Heart } from 'lucide-react';

const Cards = () => {
  const { toast } = useToast();

  const showNotification = (message: string) => {
    toast({
      description: message,
      duration: 2000
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Cards Test Page</h1>
          <p className="text-muted-foreground">Test various card layouts and designs</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Social Media Post Card */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Posted 2 hours ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <p>Just finished working on my new project. Really excited about the possibilities this opens up!</p>
              <div className="mt-3 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Laptop code" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full">
                <Button variant="ghost" size="sm" onClick={() => showNotification("You liked this post")}>
                  <ThumbsUp className="h-4 w-4 mr-1" /> 
                  <span>42</span>
                </Button>
                <Button variant="ghost" size="sm" onClick={() => showNotification("Comment section opened")}>
                  <MessageCircle className="h-4 w-4 mr-1" /> 
                  <span>12</span>
                </Button>
                <Button variant="ghost" size="sm" onClick={() => showNotification("Post shared")}>
                  <Share2 className="h-4 w-4 mr-1" /> 
                  <span>Share</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
          
          {/* Product Card */}
          <Card>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Product" 
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">Sale</Badge>
            </div>
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>Premium Headphones</CardTitle>
                <p className="font-semibold text-right">$129.99</p>
              </div>
              <CardDescription>High-quality wireless audio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-muted-foreground ml-1">(42 reviews)</span>
              </div>
              <p className="text-sm">Wireless Bluetooth headphones with noise cancellation and 20-hour battery life.</p>
            </CardContent>
            <CardFooter>
              <div className="w-full grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={() => showNotification("Added to cart")}>Add to Cart</Button>
                <Button onClick={() => showNotification("Item purchased")}>Buy Now</Button>
              </div>
            </CardFooter>
          </Card>
          
          {/* Event Card */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Web Development Workshop</CardTitle>
                  <CardDescription>Learn modern frontend techniques</CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => showNotification("Event bookmarked")}
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">April 15, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">10:00 AM - 4:00 PM</span>
                </div>
                <Separator />
                <p className="text-sm">
                  Join us for a day-long workshop covering the latest trends in web development. Perfect for beginners and intermediate developers.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full"
                onClick={() => showNotification("Registration completed")}
              >
                Register Now
              </Button>
            </CardFooter>
          </Card>
          
          {/* Feature Card */}
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-none">
            <CardHeader>
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 mb-3">
                <Cpu className="h-6 w-6 text-purple-500" />
              </div>
              <CardTitle className="text-purple-800">AI-Powered Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Leverage our cutting-edge AI algorithms to gain insights from your data. Make better decisions with predictive analytics.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
                onClick={() => showNotification("Learning more about AI Analytics")}
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
          
          {/* Profile Card */}
          <Card>
            <div className="relative">
              <div className="h-24 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="absolute -bottom-12 left-4">
                <Avatar className="h-24 w-24 border-4 border-background">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardHeader className="pt-16">
              <CardTitle>Jane Smith</CardTitle>
              <CardDescription>Senior Product Designer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-4">
                <div className="text-center">
                  <p className="font-bold">142</p>
                  <p className="text-xs text-muted-foreground">Posts</p>
                </div>
                <Separator orientation="vertical" />
                <div className="text-center">
                  <p className="font-bold">2.8k</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <Separator orientation="vertical" />
                <div className="text-center">
                  <p className="font-bold">324</p>
                  <p className="text-xs text-muted-foreground">Following</p>
                </div>
              </div>
              <p className="text-sm">
                User experience designer focused on creating intuitive and beautiful interfaces. Based in San Francisco.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => showNotification("You are now following Jane Smith")}
              >
                Follow
              </Button>
            </CardFooter>
          </Card>
          
          {/* Achievement Card */}
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-6 text-white">
              <Heart className="h-8 w-8 mb-2" />
              <h3 className="text-xl font-bold">Milestone Reached!</h3>
              <p className="text-sm opacity-90">You've completed 30 days streak</p>
            </div>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-sm font-medium">Progress</p>
                  <p className="text-sm">30/30 days</p>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="ghost" 
                onClick={() => showNotification("Shared your achievement")}
              >
                Share
              </Button>
              <Button 
                onClick={() => showNotification("Achievement details viewed")}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cards;
