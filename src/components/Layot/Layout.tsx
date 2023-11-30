import { ReactElement } from "react"
import Header from "../Header"
import { JsxElement } from "typescript"

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
} 