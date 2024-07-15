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
import { Product } from "./ListProductsTabs"

type DialogProps = {
  product: Product
}

const DetailsProductDialog: React.FC<DialogProps> = ({product}: DialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="hover:cursor-pointer hover:no-underline w-full">Details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[700px] max-h-[1000px]">
        <DialogHeader>
          <DialogTitle>{product.name} details</DialogTitle>
          <DialogDescription>You are seeing the details of the {product.name}</DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 grid-rows-2 gap-y-2">
          <div className="flex items-center justify-center">
            <img 
            src={`${product.image_url}`} 
            alt={`${product.description}`}
            className="aspect-square rounded-md object-cover"
            width="200"
            height="200"
            />
          </div>
          <div className="m-auto">
          <span className="text-ms text-gray-700"><span className="font-bold">Product Name: </span>{product.name}</span><br />
              <span className="text-ms text-gray-700"><span className="font-bold">Product Description: </span>{product.description}</span><br />
              <span className="text-ms text-gray-700"><span className="font-bold">Product Created at: </span>{product.created_at.toString()}</span><br />
              <span className="text-ms text-gray-700"><span className="font-bold">Product Updated at: </span>{product.updated_at.toString()}</span>
          </div>
        </div>
        </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
    </Dialog>
  )
}

export default DetailsProductDialog