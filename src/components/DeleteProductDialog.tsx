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

import { Button } from "@/components/ui/button"

interface DialogProps {
  productId: string
}

const DeleteDialog: React.FC<DialogProps> = (productId: DialogProps) => {
  const handleDeleteProduct = (e: React.FormEvent) => {
    console.log(productId)
    e.preventDefault();
    toast("Product has been deleted", {
      description: `The product has been deleted at ${new Date()}`,
    })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"} className="hover:cursor-pointer hover:no-underline w-full">Delete</Button>
    </DialogTrigger>
      <DialogContent>
  <DialogHeader>
    <DialogTitle>Are you sure?</DialogTitle>
    <DialogDescription>
      Do you want to delete the product? Deleting this entry cannot be
      undone.
    </DialogDescription>
  </DialogHeader>
  <DialogFooter>
    <DialogClose asChild>
      <Button variant="outline">Cancel</Button>
    </DialogClose>
    <form onSubmit={handleDeleteProduct}><Button type="submit">Delete</Button></form>
  </DialogFooter>
</DialogContent>
    </Dialog>
  )
}

export default DeleteDialog