// File: ./src/flow/profile-set-name.tx.js

import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

export async function setName(name) {
  const txId = await fcl
    .send([
      fcl.proposer(fcl.authz),
      fcl.payer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(35),
      fcl.args([fcl.arg(name, t.String)]),
      fcl.transaction`
        import Profile from 0xProfile

        transaction(name: String) {
          prepare(account: AuthAccount) {
            account
              .borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!
              .setName(name)
          }
        }
      `,
    ])
    .then(fcl.decode)
    .catch((e) => {
      console.log(e);
    })

  console.log(txId);

  return fcl.tx(txId).onceSealed()
}