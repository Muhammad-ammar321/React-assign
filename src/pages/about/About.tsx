
const About=()=>{
return (
<section className="space-y-6">
<h1 className="text-3xl font-bold">About FlowForge</h1>
<p className="text-slate-600">FlowForge started as a small team frustrated by complex release processes. We built tools that simplify release orchestration and provide clear visibility for product teams.</p>


<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white rounded-2xl p-6 shadow-sm">
<h3 className="font-semibold mb-2">Mission</h3>
<p className="text-slate-600">Empower teams to ship confidently while reducing friction between product, engineering, and support.</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-sm">
<h3 className="font-semibold mb-2">Values</h3>
<ul className="text-slate-600 list-disc pl-5">
<li>Clarity</li>
<li>Speed with safety</li>
<li>Customer empathy</li>
</ul>
</div>
</div>
</section>
)
}
export default About