
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const initialUsers: User[] = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Developer', status: 'Active' },
  { id: 2, name: 'Michael Brown', email: 'michael@example.com', role: 'Designer', status: 'Active' },
  { id: 3, name: 'Emily Davis', email: 'emily@example.com', role: 'Manager', status: 'Inactive' },
  { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Developer', status: 'Active' },
  { id: 5, name: 'Jessica Moore', email: 'jessica@example.com', role: 'Tester', status: 'Active' },
  { id: 6, name: 'Daniel Taylor', email: 'daniel@example.com', role: 'Designer', status: 'Inactive' },
  { id: 7, name: 'Sophia Martinez', email: 'sophia@example.com', role: 'Developer', status: 'Active' },
];

const Tables = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
    toast({
      title: "User Deleted",
      description: `User with ID ${id} has been removed.`,
      variant: "destructive",
      duration: 3000
    });
  };

  const handleStatusToggle = (id: number) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        const newStatus = user.status === 'Active' ? 'Inactive' : 'Active';
        toast({
          title: "Status Updated",
          description: `${user.name} is now ${newStatus}.`,
          duration: 3000
        });
        return { ...user, status: newStatus };
      }
      return user;
    }));
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Tables Test Page</h1>
          <p className="text-muted-foreground">Test various table components and interactions</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>View and manage user data</CardDescription>
            <div className="mt-4">
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of users in the system</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          user.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell className="space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleStatusToggle(user.id)}
                        >
                          Toggle Status
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">No users found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            
            {users.length === 0 && (
              <div className="mt-4 text-center">
                <p className="mb-2">All users have been deleted</p>
                <Button onClick={() => setUsers(initialUsers)}>Restore Users</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Tables;
