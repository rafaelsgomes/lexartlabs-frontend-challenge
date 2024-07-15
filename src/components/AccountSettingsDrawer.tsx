import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { toast } from "sonner"

export type User = {
  name: string
  email: string
  password?: string
}

type DrawerProps = {
  user: User
} 

const AccountSettingsDrawer: React.FC<DrawerProps> = ({user}: DrawerProps) => {
  const handleUpdateUser = (e: React.FormEvent) => {
    console.log(user)
    e.preventDefault();
    toast("Your account has been updated", {
      description: `Your account has been updated at ${new Date()}`,
    })
  }
  return (
    <Drawer direction={"right"} >
      <DrawerTrigger asChild><Button variant={"ghost"}>Settings</Button></DrawerTrigger>
      <div>
      <DrawerContent className="max-w-[500px] fixed ml-auto mb-auto w-full h-full bg-white rounded-none">
      <DrawerHeader className="flex justify-center my-4">
        <DrawerTitle className="text-2xl">Account</DrawerTitle>
      </DrawerHeader>
      <form onSubmit={handleUpdateUser}>
      <div className="m-auto my-2 items-center justify-between gap-4 w-[300px]">
      <Label htmlFor="name" className="text-left">
        Name
      </Label>
      <Input id="name" defaultValue={`${user.name}`} className="col-span-3" onChange={(e) => user.name = e.target.value}/>
      </div>
      <div className="m-auto my-2 items-center justify-between gap-4 w-[300px]">
      <Label htmlFor="email" className="text-left">
        Email
      </Label>
      <Input id="email" defaultValue={`${user.email}`} className="col-span-3" onChange={(e) => user.email = e.target.value}/>
      </div>
      <div className="m-auto my-2 items-center justify-between gap-4 w-[300px]">
      <Label htmlFor="password" className="text-left">
        Password
      </Label>
      <Input id="password" type="password" className="col-span-3" onChange={(e) => user.password = e.target.value}/>
      </div>
      <DrawerFooter>
        <DrawerClose>
        <div className="flex justify-center gap-4">
          <Button className="w-[150px]" type="submit">Save</Button>
          <Button className="w-[150px]" variant="outline" type="button">Close</Button>
          </div>
        </DrawerClose>
      </DrawerFooter>
      </form>
      </DrawerContent>
      </div>
    </Drawer>
  )
}

export default AccountSettingsDrawer