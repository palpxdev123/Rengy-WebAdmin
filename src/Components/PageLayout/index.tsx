import { type ReactNode } from 'react'
import Header from '../../Layout/Header'

interface props {
    title: String,
    children?: ReactNode
}


const PageLayout = ({
    title,
    children
}: props) => {
  return (
    <div>
        <Header title={title} />
        <div className='p-[24px]'>
            {children}
        </div>
    </div>
  )
}

export default PageLayout