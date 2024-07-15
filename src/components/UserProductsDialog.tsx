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
import ListProductsTabs from "./ListProductsTabs";
import { products } from "@/app/home/page";


const UserProductsDialog: React.FC = () => {  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>  Products</Button>
      </DialogTrigger>
    <DialogContent className="max-w-[95%] max-h-[95%] overflow-y-scroll">
      <DialogHeader>
        <DialogTitle className="text-2xl">Your Products</DialogTitle>
        <DialogDescription className="pl-2">You are seeing your products</DialogDescription>
      </DialogHeader>
      {ListProductsTabs(products, 'userProducts')}
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default UserProductsDialog