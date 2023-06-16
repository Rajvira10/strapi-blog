import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout text="My Portfolio">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div className='flex flex-col'>
          <div className='text-red-500 relative w-full -right-2 top-10 lg:top-0 text-lg font-normal' >Hi, my name is</div>
          <div className='text-black relative w-full -right-2 top-10 lg:top-0 text-6xl font-bold' >Rajvir Ahmed Shuvo</div>
          <div className='mt-1 text-black relative w-full -right-2 top-10 lg:top-0 text-lg font-normal' >Fullstack Web Developer and AI enthusiast</div>
          <div className='mt-4 text-black relative w-full -right-2 top-10 lg:top-0 text-lg font-normal' >Currently studying at Brac University with previous work experience in <Link href="https://innovation.brac.net/" className='text-blue-800'>Brac Social Innovation Forum</Link> and chipping away at <Link href="https://rajvir-portfolio.netlify.app/#work" className='text-blue-800'>these projects</Link>.</div>
        </div>
        
      </div>
</Layout>

  )
}
