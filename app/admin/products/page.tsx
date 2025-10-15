'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

// Mock data for products
const initialProducts = [
  {
    id: 1,
    name: "Classic English Breakfast Black Tea",
    price: 12.99,
    stock: 150,
    category: "Black Tea",
    image: "/premium-tea-packages-with-colorful-boxes-and-a-cer.jpg",
  },
  {
    id: 2,
    name: "Himalayan Green Tea",
    price: 14.99,
    stock: 100,
    category: "Green Tea",
    image: "/premium-tea-packages-with-colorful-boxes-and-a-cer.jpg",
  },
  {
    id: 3,
    name: "Soothing Chamomile Herbal Tea",
    price: 10.99,
    stock: 200,
    category: "Herbal Tea",
    image: "/premium-tea-packages-with-colorful-boxes-and-a-cer.jpg",
  },
]

export default function AdminProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [productToDelete, setProductToDelete] = useState<any>(null);
  const { toast } = useToast();

  // Handle opening the modal for adding or editing
  const handleOpenModal = (product: any = null) => {
    setCurrentProduct(product ? { ...product } : { id: null, name: '', price: '', stock: '', category: '', image: '' });
    setIsModalOpen(true);
  };

  // Handle saving the product (add or edit)
  const handleSaveProduct = () => {
    if (currentProduct.id) {
      // Update existing product
      setProducts(products.map(p => p.id === currentProduct.id ? currentProduct : p));
      toast({ title: "Product Updated", description: "The product has been successfully updated." });
    } else {
      // Add new product
      const newProduct = { ...currentProduct, id: Date.now() };
      setProducts([...products, newProduct]);
      toast({ title: "Product Added", description: "The new product has been successfully added." });
    }
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  // Handle deleting a product
  const handleDeleteProduct = (product: any) => {
    setProductToDelete(product);
    setIsDeleteAlertOpen(true);
  };

  const confirmDelete = () => {
    setProducts(products.filter(p => p.id !== productToDelete.id));
    toast({ title: "Product Deleted", description: "The product has been successfully deleted.", variant: "destructive" });
    setIsDeleteAlertOpen(false);
    setProductToDelete(null);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button onClick={() => handleOpenModal()}>Add Product</Button>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell><img src={product.image} alt={product.name} className="h-16 w-16 object-cover rounded-md" /></TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>₹{product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2" onClick={() => handleOpenModal(product)}>Edit</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteProduct(product)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{currentProduct?.id ? 'Edit Product' : 'Add New Product'}</DialogTitle>
            <DialogDescription>Fill in the details below.</DialogDescription>
          </DialogHeader>
          {currentProduct && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" value={currentProduct.name} onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">Price</Label>
                <Input id="price" type="number" value={currentProduct.price} onChange={(e) => setCurrentProduct({ ...currentProduct, price: parseFloat(e.target.value) || 0 })} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="stock" className="text-right">Stock</Label>
                <Input id="stock" type="number" value={currentProduct.stock} onChange={(e) => setCurrentProduct({ ...currentProduct, stock: parseInt(e.target.value) || 0 })} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">Category</Label>
                <Input id="category" value={currentProduct.category} onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">Image URL</Label>
                <Input id="image" value={currentProduct.image} onChange={(e) => setCurrentProduct({ ...currentProduct, image: e.target.value })} className="col-span-3" />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="button" onClick={handleSaveProduct}>Save</Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Alert */}
      <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the product from your records.
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
