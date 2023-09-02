import { PropsWithChildren } from "react"

interface IProps {
    page: string
}
const Link: React.FC<PropsWithChildren<IProps>> = (props) => {
    return (
        <a href={props.page}>{props.children}</a>
    )
}

export default Link
