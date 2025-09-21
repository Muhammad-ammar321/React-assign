
import Card from '../../components/assign-1-c/card'
import { Link } from 'react-router'


const Home=()=>{
return (
<section className="space-y-10">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-4xl font-extrabold">FlowForge — Build & ship faster</h1>
<p className="mt-4 text-lg text-slate-600">A lightweight workflow platform to manage feature launches, approvals, and analytics in one place.</p>
<div className="mt-6 flex gap-4">
<Link to="/contact" className="inline-block px-5 py-3 rounded-lg bg-indigo-600 text-white">Get started</Link>
<Link to="/about" className="inline-block px-5 py-3 rounded-lg border">Learn more</Link>
</div>
</div>
<div className="grid gap-4">
<Card title="Release Management">Plan, schedule, and coordinate releases across teams.</Card>
<Card title="Observability">Track performance and customer impact of launches.</Card>
</div>
</div>


<div>
<h2 className="text-2xl font-bold mb-6">How teams use FlowForge</h2>
<div className="grid md:grid-cols-3 gap-6">
<Card title="Product">Prioritize experiments, approvals, and rollouts with confidence.</Card>
<Card title="Engineering">Minimize rollbacks and speed mean time to deploy.</Card>
<Card title="Customer Success">Understand which releases affect customers most.</Card>
</div>
</div>
</section>
)
}
export default Home