'use client'

import { useSession } from "next-auth/react";
import { Button } from "./ui/button";

function CheckoutButton() {
  const {data:session} = useSession()


  const createCheckoutSession = async ()=>{
    if(!session) return

  }

  return (
    <Button
    onClick={()=>createCheckoutSession()}
      className=" bg-indigo-600 mt-6
     text-white hover:bg-indigo-500"
    >
      Sign up
    </Button>
  );
}

export default CheckoutButton;
