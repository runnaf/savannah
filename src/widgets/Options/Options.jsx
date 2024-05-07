import { Children } from "react"

export const Options = ({title, children}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {children}
            </ul>
        </div>
    )
}