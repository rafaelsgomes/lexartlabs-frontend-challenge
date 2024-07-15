import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react";
import { products } from "@/app/cards/page";

type CreateProduct = {
  name: string
  description: string
  imageUrl: string
}

const CreateProductDialog: React.FC  = () => {
  let productName = ''
  let productDescription = ''
  let productImageUrl = ''
  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    products.push({
      name: productName,
      description: productDescription,
      image_url: productImageUrl,
      user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
      created_at: new Date(),
      updated_at: '2024-04-03T09:28:04.000Z ',
      id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10"
    })
    toast("Product has been created", {
      description: `The product has been created at ${new Date()}`,
    })
  }
  return <Dialog>
    <DialogTrigger asChild>
      <Button>
        <PlusCircle className="h-3.5 w-3.5 mr-2" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Product
        </span>
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
    <DialogTitle>Create Product</DialogTitle>
    <DialogDescription>
      You are creating a new product
    </DialogDescription>
  </DialogHeader>
  <form onSubmit={handleCreateProduct} className="grid gap-4 py-4">
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="name" className="text-right">
      Name
    </Label>
    <Input id="name" className="col-span-3" onChange={(e)=> productName = e.target.value} />
  </div>
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="description" className="text-right">
      Description
    </Label>
    <Input id="description" className="col-span-3" onChange={(e)=> productDescription = e.target.value} />
  </div>
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="imageUrl" className="text-right">
      Image Url
    </Label>
    <Input id="imageUrl" className="col-span-3" onChange={(e)=> productImageUrl = e.target.value} />
  </div>
  <DialogFooter>
  <DialogClose asChild>
    <Button variant="outline">Cancel</Button>
  </DialogClose>
  <DialogClose asChild>
  <Button type="submit">Create</Button>
  </DialogClose>
  </DialogFooter>
  </form>
    </DialogContent>
  </Dialog>
}

export default CreateProductDialog