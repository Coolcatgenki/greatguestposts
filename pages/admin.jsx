import { signIn } from "next-auth/react";

export default function Admin(){

return(
    <button type="submit" onClick={()=>signIn("google", {
        redirect: true,
        callbackUrl: "/adminpanelcontrol",
    })}>
     <img loading="lazy" height="24" width="24" id="provider-logo" src="https://authjs.dev/img/providers/google.svg"/>
     <span>Sign in with Google</span>
    </button>
)
}