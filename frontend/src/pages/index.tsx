import React from "react"
import config from "../config";

export default function Home() {

  console.log("config", config)

  return (
    <div>
      <div>Hello world!</div>

      <button onClick={()=> {
       window.location.href = `${config.domainUrl}/login?client_id=${config.clientId}&response_type=code&scope=email+openid&redirect_uri=${config.loginRedirectUri}`
      }} >Login</button>
    </div>
  )
}
