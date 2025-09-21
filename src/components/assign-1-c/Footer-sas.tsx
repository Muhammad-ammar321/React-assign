

const FooterSas=()=>{
return (
<footer className="bg-white border-t mt-12">
<div className="container-wide py-8 flex flex-col md:flex-row justify-between items-start gap-6">
<div>
<div className="font-bold">FlowForge</div>
<div className="text-sm text-slate-500">Ship features faster. Delight customers.</div>
</div>
<div className="text-sm text-slate-600">© {new Date().getFullYear()} FlowForge — All rights reserved</div>
</div>
</footer>
)
}
export default FooterSas