
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


interface ContactForm {
name: string
email: string
message: string
}
const schema = yup.object({
name: yup.string().required('Name is required').min(2, 'Too short'),
email: yup.string().email('Must be a valid email').required('Email is required'),
message: yup.string().required('Message is required').min(10, 'Please provide more details'),
}).required()


const Contact=()=>{
const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<ContactForm>({ resolver: yupResolver(schema) })


const onSubmit: SubmitHandler<ContactForm> = async (data) => {
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/yourFormId'
try {
const resp = await fetch(FORMSPREE_ENDPOINT, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data),
})


if (!resp.ok) throw new Error('Network response was not ok')
reset()
alert('Message sent — we will reply soon!')
} catch (err) {
console.error(err)
alert('Failed to send message. Please try again or email hello@flowforge.example')
}
}


return (
<section className="max-w-3xl mx-auto">
<h1 className="text-3xl font-bold mb-4">Contact sales & support</h1>
<p className="text-slate-600 mb-6">Have a question about FlowForge? Fill out the form and we'll get back to you within 1 business day.</p>


<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-2xl shadow-sm">
<div>
<label className="block text-sm font-medium">Name</label>
<input {...register('name')} className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.name ? 'border-red-500' : 'border-slate-200'}`} />
{errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
</div>


<div>
<label className="block text-sm font-medium">Email</label>
<input {...register('email')} className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.email ? 'border-red-500' : 'border-slate-200'}`} />
{errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
</div>


<div>
<label className="block text-sm font-medium">Message</label>
<textarea {...register('message')} rows={6} className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.message ? 'border-red-500' : 'border-slate-200'}`} />
{errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
</div>


<div className="flex items-center gap-4">
<button type="submit" disabled={isSubmitting} className="px-5 py-2 rounded-md bg-indigo-600 text-white">{isSubmitting ? 'Sending…' : 'Send message'}</button>
{isSubmitSuccessful && <span className="text-green-600 text-sm">Sent!</span>}
</div>
</form>


<div className="mt-6 text-sm text-slate-600">Alternatively email us at <a href="mailto:hello@flowforge.example" className="underline">hello@flowforge.example</a></div>
</section>
)
}
export default Contact