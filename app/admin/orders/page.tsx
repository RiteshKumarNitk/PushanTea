'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import withAuth from '@/components/withAuth'

const initialOrders = [
  {
    id: "#1250",
    userName: "John Doe",
    items: 3,
    total: 45.00,
    date: "2024-07-29",
    status: "Delivered",
  },
  {
    id: "#1249",
    userName: "Jane Smith",
    items: 2,
    total: 28.50,
    date: "2024-07-29",
    status: "Pending",
  },
  {
    id: "#1248",
    userName: "Bob Johnson",
    items: 5,
    total: 82.00,
    date: "2024-07-28",
    status: "Delivered",
  },
]

function AdminOrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<any>(null);
  const [orderToDelete, setOrderToDelete] = useState<any>(null);
  const { toast } = useToast();

  const handleOpenModal = (order: any) => {
    setCurrentOrder(order);
    setIsModalOpen(true);
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    toast({ title: "Order Status Updated", description: "The order status has been successfully updated." });
  };

  const handleDeleteOrder = (order: any) => {
    setOrderToDelete(order);
    setIsDeleteAlertOpen(true);
  };

  const confirmDelete = () => {
    setOrders(orders.filter(o => o.id !== orderToDelete.id));
    toast({ title: "Order Deleted", description: "The order has been successfully deleted.", variant: "destructive" });
    setIsDeleteAlertOpen(false);
    setOrderToDelete(null);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Orders</h1>
        <div className="flex items-center space-x-4">
          <Input type="date" className="w-48" />
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="cursor-pointer hover:underline" onClick={() => handleOpenModal(order)}>{order.id}</TableCell>
                  <TableCell>{order.userName}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>₹{order.total.toFixed(2)}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-md ${order.status === 'Delivered' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="flex items-center">
                    <Select defaultValue={order.status.toLowerCase()} onValueChange={(value) => handleStatusChange(order.id, value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Delivered">Delivered</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="destructive" size="sm" className="ml-2" onClick={() => handleDeleteOrder(order)}>Delete</Button>
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
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>Details for order {currentOrder?.id}</DialogDescription>
          </DialogHeader>
          {currentOrder && (
            <div className="grid gap-4 py-4">
              <p><strong>User:</strong> {currentOrder.userName}</p>
              <p><strong>Items:</strong> {currentOrder.items}</p>
              <p><strong>Total:</strong> ₹{currentOrder.total.toFixed(2)}</p>
              <p><strong>Date:</strong> {currentOrder.date}</p>
              <p><strong>Status:</strong> {currentOrder.status}</p>
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the order from your records.
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

export default withAuth(AdminOrdersPage);
