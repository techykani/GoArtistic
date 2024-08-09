import Link from 'next/link'
import EyeBrew from '../widgets/shared/eyeBrew'
import ReactPortableText from '../widgets/shared/reactPortableText'

export const MedisaveGuide: React.FC<any> = ({ title, tagline, description, cta }) => {
  return (
    <div className="pt-10 sm:pt-20 bg-[#f1f6ff] px-6">
      <div className="mx-auto max-w-[800px]">
        <div className="w-full flex flex-col gap-2">
          <EyeBrew title={title} theme="light" />
          <h2 className="text-[#0957CB] font-bold text-2xl sm:text-3xl font-montserrat">
            {tagline}
          </h2>
          <div className="mt-[-24px]">
            <ReactPortableText content={description} />
          </div>

          <Link href={cta.href ?? ''} className="text-[16px] font-semibold inline-flex gap-2 mt-4">
            {cta.text}
            <div className="transition-all duration-150 group-hover:translate-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.8925 6.89459C15.283 6.50406 15.9162 6.50405 16.3067 6.89457L20.7052 11.2929C20.8927 11.4804 20.9981 11.7348 20.9981 12C20.9981 12.2652 20.8927 12.5196 20.7052 12.7071L16.3067 17.1056C15.9162 17.4961 15.283 17.4961 14.8925 17.1056C14.502 16.7151 14.502 16.0819 14.8925 15.6914L17.5839 13H3.99805C3.44576 13 2.99805 12.5523 2.99805 12C2.99805 11.4477 3.44576 11 3.99805 11H17.5838L14.8925 8.3088C14.502 7.91829 14.502 7.28512 14.8925 6.89459Z"
                  fill="#3C3C3C"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
