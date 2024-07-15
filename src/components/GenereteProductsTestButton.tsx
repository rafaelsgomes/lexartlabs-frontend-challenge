import { toast } from "sonner";
import { Button } from "@/components/ui/button"


const GenereteProductsTestButton = () => {
  const handleGenereteProductsTest = () => {
    toast("Test Products are being generated", {
      description: `Test Products are being generated at ${new Date()}`,
    })
  }
  
  return (
      <>
        <Button variant={"secondary"} onClick={handleGenereteProductsTest}>Generate Products Test</Button>
      </>
  )
}

export default GenereteProductsTestButton