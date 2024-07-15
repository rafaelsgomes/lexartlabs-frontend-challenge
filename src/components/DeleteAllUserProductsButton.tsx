import { toast } from "sonner";
import { Button } from "@/components/ui/button"


const DeleteAllUserProductsButton = () => {
  const handleDeleteAllUserProducts = () => {
    toast("Test Products are being generated", {
      description: `Test Products are being generated at ${new Date()}`,
    })
  }
  
  return (
      <>
        <Button variant={"destructive"} onClick={handleDeleteAllUserProducts}>Delete All Your Products</Button>
      </>
  )
}

export default DeleteAllUserProductsButton