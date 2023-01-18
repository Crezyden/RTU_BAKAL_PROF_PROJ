import Link from 'next/link'
import React from 'react'
const Mylink = (props) => {
let { href, children, active, ...rest } = props
return (
<Link href={href}>
<button {...rest}
className={`${active && 'bg-blue-500'} w-full rounded-md p-2`}
href="/account-settings"
>
{children}
</button>
</Link>
)
}
export default Mylink