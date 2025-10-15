'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"

// Mock data for users
const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "2024-07-20",
    totalOrders: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    joinDate: "2024-07-22",
    totalOrders: 3,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    joinDate: "2024-07-25",
    totalOrders: 8,
  },
]

export default function AdminUsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userToDelete, setUserToDelete] = useState<any>(null);
  const { toast } = useToast();

  const handleOpenModal = (user: any = null) => {
    setCurrentUser(user ? { ...user } : { id: null, name: '', email: '', joinDate: new Date().toISOString().split('T')[0], totalOrders: 0 });
    setIsModalOpen(true);
  };

  const handleSaveUser = () => {
    if (currentUser.id) {
      setUsers(users.map(u => u.id === currentUser.id ? currentUser : u));
      toast({ title: "User Updated", description: "The user has been successfully updated." });
    } else {
      const newUser = { ...currentUser, id: Date.now() };
      setUsers([...users, newUser]);
      toast({ title: "User Added", description: "The new user has been successfully added." });
    }
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const handleDeleteUser = (user: any) => {
    setUserToDelete(user);
    setIsDeleteAlertOpen(true);
  };

  const confirmDelete = () => {
    setUsers(users.filter(u => u.id !== userToDelete.id));
    toast({ title: "User Deleted", description: "The user has been successfully deleted.", variant: "destructive" });
    setIsDeleteAlertOpen(false);
    setUserToDelete(null);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Users</h1>
        <Button onClick={() => handleOpenModal()}>Add User</Button>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Total Orders</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.totalOrders}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2" onClick={() => handleOpenModal(user)}>Edit</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteUser(user)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{currentUser?.id ? 'Edit User' : 'Add New User'}</DialogTitle>
            <DialogDescription>Fill in the details below.</DialogDescription>
          </DialogHeader>
          {currentUser && (
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Name</Label>
                    <Input id="name" value={currentUser.name} onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">Email</Label>
                    <Input id="email" value={currentUser.email} onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="joinDate" className="text-right">Join Date</Label>
                    <Input id="joinDate" type="date" value={currentUser.joinDate} onChange={(e) => setCurrentUser({ ...currentUser, joinDate: e.target.value })} className="col-span-3" />
                </div>
            </div>
          )}
          <DialogFooter>
            <Button type="button" onClick={handleSaveUser}>Save</Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the user from your records.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  )
}
