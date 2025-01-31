'use client'

import { MessageSquarePlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

function CreateChatButton() {
    const router = useRouter();

    const createNewChat = () =>{
          
        router.push("/chat/new")
    }
  return (
    <Button onClick={createNewChat} variant={"ghost"}>
       <MessageSquarePlusIcon/>
    </Button>
  )
}

export default CreateChatButton