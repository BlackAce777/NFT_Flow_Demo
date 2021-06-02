// File: ./src/App.js

import React from "react"
import {AuthCluster} from "./auth-cluster"
import {InitCluster} from "./init-cluster"
import {ProfileCluster} from "./profile-cluster"
import {useCurrentUser} from "./hooks/current-user"

export default function App() {
  const cu = useCurrentUser()

  return (
    <div>
      <AuthCluster />
      <InitCluster address={cu.addr} />
      <ProfileCluster address={cu.addr} />
      <ProfileCluster address="0xba1132bc08f82fe2" />
      <ProfileCluster address="0xf117a8efa34ffd58" />
    </div>
  )
}