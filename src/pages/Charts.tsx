
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell 
} from 'recharts';

const monthlyData = [
  { name: 'Jan', value: 400, visits: 2400, revenue: 2400 },
  { name: 'Feb', value: 300, visits: 1398, revenue: 2210 },
  { name: 'Mar', value: 200, visits: 9800, revenue: 2290 },
  { name: 'Apr', value: 278, visits: 3908, revenue: 2000 },
  { name: 'May', value: 189, visits: 4800, revenue: 2181 },
  { name: 'Jun', value: 239, visits: 3800, revenue: 2500 },
  { name: 'Jul', value: 349, visits: 4300, revenue: 2100 },
];

const pieData = [
  { name: 'Mobile', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Tablet', value: 200 },
  { name: 'Other', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Charts = () => {
  const { toast } = useToast();
  const [activeChart, setActiveChart] = useState('line');
  
  const handleRefreshData = () => {
    toast({
      title: "Data Refreshed",
      description: "Chart data has been updated",
      duration: 2000,
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Charts Test Page</h1>
          <p className="text-muted-foreground">Test various chart components for data visualization</p>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Data Visualization</CardTitle>
                <CardDescription>View analytics data in different chart formats</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={handleRefreshData}>
                Refresh Data
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="line" value={activeChart} onValueChange={setActiveChart}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="line">Line Chart</TabsTrigger>
                <TabsTrigger value="bar">Bar Chart</TabsTrigger>
                <TabsTrigger value="area">Area Chart</TabsTrigger>
                <TabsTrigger value="pie">Pie Chart</TabsTrigger>
              </TabsList>
              
              <div className="mt-6">
                <TabsContent value="line">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="visits" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Line charts are ideal for showing trends over time. This example shows website visits and revenue over a 7-month period.
                  </p>
                </TabsContent>
                
                <TabsContent value="bar">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                        <Bar dataKey="visits" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Bar charts excel at comparing distinct categories. This example compares values and visits across different months.
                  </p>
                </TabsContent>
                
                <TabsContent value="area">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="value" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Area charts are useful for showing volume changes over time. This example demonstrates stacked values for better comparison.
                  </p>
                </TabsContent>
                
                <TabsContent value="pie">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Pie charts show proportional distribution. This example displays the breakdown of device types used to access the website.
                  </p>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Data Insights</CardTitle>
              <CardDescription>Key takeaways from the visualized data</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Consistent growth in mobile users (42% of total traffic)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Revenue peaked in June with a 15% increase</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                  <span>Visits spiked in March due to marketing campaign</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                  <span>Desktop usage declining by 3% month-over-month</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Chart Controls</CardTitle>
              <CardDescription>Change chart display options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Button variant={activeChart === 'line' ? 'default' : 'outline'} onClick={() => setActiveChart('line')}>Line Chart</Button>
                <Button variant={activeChart === 'bar' ? 'default' : 'outline'} onClick={() => setActiveChart('bar')}>Bar Chart</Button>
                <Button variant={activeChart === 'area' ? 'default' : 'outline'} onClick={() => setActiveChart('area')}>Area Chart</Button>
                <Button variant={activeChart === 'pie' ? 'default' : 'outline'} onClick={() => setActiveChart('pie')}>Pie Chart</Button>
              </div>
              
              <div className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => toast({ description: "Chart data exported as CSV" })}>
                  Export Data
                </Button>
                <Button variant="outline" size="sm" onClick={() => toast({ description: "Chart legend toggled" })}>
                  Toggle Legend
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Charts;
