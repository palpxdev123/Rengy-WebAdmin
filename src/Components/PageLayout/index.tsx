import { type ReactNode } from 'react'
import Header from '../../Layout/Header'

interface props {
    title: String,
    children?: ReactNode,
    header2?: any
}


const PageLayout = ({
    title,
    children,
    header2,
}: props) => {
  return (
    <div>
        <Header title={title} header2={header2} />
        <div className={`p-[24px] ${header2 ? "h-[calc(100vh-116px)]" : "h-[calc(100vh-56px)]"} overflow-y-scroll`}>
            {children}
        </div>
    </div>
  )
}

export default PageLayout