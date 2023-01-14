import { PropsWithChildren } from "react"
import { TopBar } from "../components/TopBar/TopBar"

export const AppLayout = ({children}: PropsWithChildren): JSX.Element => {
  return (
    <div className="mx-2 mb-2">
      <TopBar>
        CONTACTS
      </TopBar>
      {children}
    </div>
  )
}