import { PropsWithChildren } from "react"

export const TopBar = ({children}: PropsWithChildren) => {
  return (
    <div className="bg-teal-600 rounded-b-2xl flex justify-center p-1">
      {children}
    </div>
  )
}