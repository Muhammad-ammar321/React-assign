import  { type ReactNode } from 'react'


type CardProps = {
title: string,
children: ReactNode
}


const Card=({title, children}: CardProps)=>{
return (
<div className="bg-white rounded-2xl p-6 shadow-sm">
<h3 className="font-semibold mb-3">{title}</h3>
<div className="text-sm text-slate-600">{children}</div>
</div>
)
}
export default Card