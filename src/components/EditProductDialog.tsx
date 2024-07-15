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
import { Product } from "./ListProductsTabs";

type DialogProps = {
  product: Product
}

const EditDialog: React.FC<DialogProps> = ({ product }: DialogProps) => {
  const handleUpdateProduct = (e: React.FormEvent) => {
    console.log(product)
    e.preventDefault();
    toast("Product has been updated", {
      description: `The product has been updated at ${new Date()}`,
    })
  }
  
  return (
  <Dialog>
    <DialogTrigger asChild>
    <Button variant={"link"} className="hover:cursor-pointer hover:no-underline w-full">Edit</Button>
    </DialogTrigger>
    <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogDescription>
        You are editing {product.name} product
      </DialogDescription>
    </DialogHeader>
    <form className="grid gap-4 py-4" onSubmit={handleUpdateProduct}>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
        Name
      </Label>
      <Input id="name" defaultValue={`${product.name}`} className="col-span-3" onChange={(e) => product.name = e.target.value}/>
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="description" className="text-right">
        Description
      </Label>
      <Input id="description" defaultValue={`${product.description}`} className="col-span-3" onChange={(e) => product.description = e.target.value}/>
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="imageUrl" className="text-right">
        Image Url
      </Label>
      <Input id="imageUrl" defaultValue={`${product.image_url}`} className="col-span-3" onChange={(e) => product.image_url = e.target.value}/>
    </div>
    <DialogFooter>
    <DialogClose asChild>
      <Button variant="outline">Cancel</Button>
    </DialogClose>
    <DialogClose asChild>
      <Button type="submit">Save</Button>
    </DialogClose>
    </DialogFooter>
  </form>
  </DialogContent>
  </Dialog>
  )
}

export default EditDialog