import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PrismaClient } from '@prisma/client'
import React from 'react'

const prisma = new PrismaClient();
const CreateUser = () => {

    const createUser = async () => {
        // const user = await prisma.user.create({
        //     data: {
        //         name: 
        //     }
        // })
    }
  return (
    <div>
        <Label className="text-lg font-semibold">Create User</Label>
        <Input type="text" className="mt-2" id='name'/>

        <Button className="mt-4">Create User</Button>
    </div>
  )
}

export default CreateUser