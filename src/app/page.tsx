"use client";
import 'dotenv/config'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import React, { useState } from "react"
import Cookies from 'js-cookie'

const Login: React.FC = () => {
  // const session = await getSession()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  // let email = ''
  // let name = ''
  // let password = ''

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de autenticação aqui
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Password:', password);
  };

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    const user = {email, password}
    if(!user){
      return
    }
  const token = await fetch(`http://localhost:3333/users/authenticate`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
  const data = await token.json()
  if(!data) {
    return
  }
  const expires = new Date(Date.now() + 86400000 )
  Cookies.set('session', data.access_token, {expires, httpOnly: true})
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="sign-in">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <form className="space-y-1" onSubmit={handleLogin}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="contato@email.com" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </CardContent>
              <CardFooter>
              <Button type="submit">Login</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
      <TabsContent value="sign-in">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <form className="space-y-1" onSubmit={handleSignup}>
            <CardContent className="space-y-2">
            <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
                </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="contato@email.com" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </CardContent>
              <CardFooter>
              <Button type="submit">Sign Up</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default Login