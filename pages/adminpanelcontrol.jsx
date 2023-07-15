import { signIn, useSession, signOut } from "next-auth/react";


export default function adminPage(){
    const { data: session } = useSession();

    if(session != null){
   /*Here can go the confirmation of the name of the Super admin*/
    if(session.user.email=== "steinsgatedo@gmail.com"){
        return <h1>Welcome Super admin!</h1>
    }
    else {
        return <h1>You are not welcome</h1>
    }

  }
  else{ 
    return <h1>You are not welcome</h1>
  }

}