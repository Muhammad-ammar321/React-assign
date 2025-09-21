
import { Link, NavLink } from 'react-router'


const NavbarSas=()=>{
return (
<header className="bg-white shadow-sm">
<div className="container-wide flex items-center justify-between py-4">
<Link to="/" className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold">FF</div>
<div>
<div className="font-bold">FlowForge</div>
<div className="text-xs text-slate-500">Workflow for modern teams</div>
</div>
</Link>
<nav className="flex items-center gap-6">
<NavLink to="/" end className={({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-slate-600'}>Home</NavLink>
<NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-slate-600'}>About</NavLink>
<NavLink to="/contact" className={({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-slate-600'}>Contact</NavLink>
<NavLink to="/flowbite" className={({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-slate-600'}>Flowbite</NavLink>
<a href="#" className="ml-4 inline-block px-4 py-2 rounded-md border border-indigo-600 text-indigo-600">Sign in</a>
</nav>
</div>
</header>
)
}
export default  NavbarSas