import dynamic from 'next/dynamic'
const Studio = dynamic(() => import('@/studio/index'), { ssr: false })
export default function StudioPage() {
  return (
    <div className="w-full h-screen">
      <Studio />
    </div>
  )
}
export async function getStaticProps() {
  return {
    props: { noLayout: true },
  }
}