import clsx from 'clsx'
import { LinkAngleRight } from '../ui'
import { PortableText, imageUrlBuilder } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'
import { useState } from 'react'
import EyeBrew from '../widgets/shared/eyeBrew'
import Title from '../widgets/shared/title'
import ReactPortableText from '../widgets/shared/reactPortableText'
import Link from 'next/link'

export const CorporateHealthcareScreening: React.FC<any> = ({
  title,
  cta,
  image,
  description,
  tagline,
  props,
}) => {
  const quizGender = ['Male', 'Female', 'Any']
  const quizAge = ['All', 'Below 30', '30 to 40', 'Above 40']
  const quizspecificConcern = [
    'All',
    'Chronic Health Issues',
    'Sleep Issues',
    'Bone & Joint Issues',
  ]
  interface QuizData {
    age: string
    gender: string
    specificConcern: string[] // Specify the type of specificConcern as string[]
  }
  const [quizsTitle, setquizsTitle] = useState('gender')
  const [quizs, setquizs] = useState(quizGender)
  const [showQuizPopup, setShowQuizPopup] = useState(false)
  const [quizData, setQuizData] = useState<QuizData>({ age: '', gender: '', specificConcern: [] })
  const handleSelectedQuiz = (name: keyof QuizData, option: string | string[]) => {
    if (name === 'specificConcern') {
      // If the name is 'specificConcern', ensure that option is an array
      setQuizData({ ...quizData, [name]: Array.isArray(option) ? option : [option] })
    } else {
      // For other fields, directly update the state
      setQuizData({ ...quizData, [name]: option })
    }

    handleChangeQuiz(name)
    setquizsTitle(name)
  }
  const filterData = () => {
    props(quizData)
    setShowQuizPopup(false)
  }

  const handleChangeQuiz = (name: string) => {
    if (name === 'gender') {
      setquizs(quizAge)
    } else if (name === 'age') {
      setquizs(quizspecificConcern)
    }
  }

  const toggleQuiz = (name: string) => {
    if (name === 'gender') {
      setquizs(quizGender)
    } else if (name === 'age') {
      setquizs(quizAge)
    }
  }

  return (
    <section
      style={{
        background: 'linear-gradient(75deg, #195FC9 21.69%, #2C82D0 50.84%, #7BEFFF 104.28%)',
      }}
      className="px-6 md:px-[71px] py-[48px] md:py-[80px]"
    >
      {showQuizPopup && (
        <div className="fixed inset-0 z-[999]">
          <section className="w-full h-screen z-[999] md:flex md:justify-center md:pt-[102px] lg:pt-[127px] md:px-8 lg:px-[175px] bg-off-white md:bg-[#000000b3] relative overflow-scroll slider-body">
            <div className="w-full h-screen">
              <div className="bg-off-white w-full h-auto md:max-w-[392px] md:min-h-[546px] md:rounded-[12px] overflow-hidden mx-auto">
                {/* header */}
                <div className="w-full flex justify-between items-center py-4 px-6 relative z-40">
                  <p className="text-grey-dark text-[20px] leading-[24px]">Health Screening Quiz</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    onClick={() => {
                      setShowQuizPopup(false), setquizs(quizGender)
                    }}
                    className="cursor-pointer"
                  >
                    <g clip-path="url(#clip0_1_136259)">
                      <mask
                        id="mask0_1_136259"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                      >
                        <rect width="32" height="32" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1_136259)">
                        <path
                          d="M16.0001 17.8658L9.46673 24.3991C9.22229 24.6435 8.91118 24.7658 8.5334 24.7658C8.15562 24.7658 7.84451 24.6435 7.60007 24.3991C7.35562 24.1546 7.2334 23.8435 7.2334 23.4658C7.2334 23.088 7.35562 22.7769 7.60007 22.5324L14.1334 15.9991L7.60007 9.46576C7.35562 9.22131 7.2334 8.9102 7.2334 8.53242C7.2334 8.15464 7.35562 7.84353 7.60007 7.59909C7.84451 7.35464 8.15562 7.23242 8.5334 7.23242C8.91118 7.23242 9.22229 7.35464 9.46673 7.59909L16.0001 14.1324L22.5334 7.59909C22.7778 7.35464 23.089 7.23242 23.4667 7.23242C23.8445 7.23242 24.1556 7.35464 24.4001 7.59909C24.6445 7.84353 24.7667 8.15464 24.7667 8.53242C24.7667 8.9102 24.6445 9.22131 24.4001 9.46576L17.8667 15.9991L24.4001 22.5324C24.6445 22.7769 24.7667 23.088 24.7667 23.4658C24.7667 23.8435 24.6445 24.1546 24.4001 24.3991C24.1556 24.6435 23.8445 24.7658 23.4667 24.7658C23.089 24.7658 22.7778 24.6435 22.5334 24.3991L16.0001 17.8658Z"
                          fill="#3C3C3C"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_136259">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* divider */}
                <div className="border-[1px] border-grey-3 " />
                <div className="py-[64px] md:py-8 px-6 flex flex-col gap-8 z-20 relative">
                  {/* gender */}
                  <div className="w-full">
                    {quizs.indexOf('Female') !== -1 && (
                      <>
                        <p className="text-grey-8 mb-2 text-[14px] leading-[20px] text-center">
                          1 of 3 questions
                        </p>
                        <p className="text-grey-dark mb-8 text-[20px] leading-[24px] text-center">
                          What is your gender?
                        </p>
                      </>
                    )}
                    {quizs.indexOf('Below 30') !== -1 && (
                      <>
                        <p className="text-grey-8 mb-2 text-[14px] leading-[20px] text-center">
                          2 of 3 questions
                        </p>
                        <p className="text-grey-dark mb-8 text-[20px] leading-[24px] text-center">
                          What is your age?
                        </p>
                      </>
                    )}
                    {quizs.indexOf('Chronic Health Issues') !== -1 && (
                      <>
                        <p className="text-grey-8 mb-2 text-[14px] leading-[20px] text-center">
                          2 of 3 questions
                        </p>
                        <p className="text-grey-dark mb-8 text-[20px] leading-[24px] text-center">
                          Do you have specific concerns?
                        </p>
                      </>
                    )}
                    {quizs.indexOf('Female') !== -1 && (
                      <>
                        {quizGender.map((quiz, i) => (
                          <div
                            onClick={() => handleSelectedQuiz('gender', quiz)}
                            className={`w-full rounded-[8px] border-[1px] border-grey-3 p-4 flex gap-2 bg-off-white text-grey-dark items-center mb-2 relative cursor-pointer 
                         `}
                            key={i}
                          >
                            <span className="flex-1 text-base leading-[24px] whitespace-nowrap">
                              {quiz}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <mask
                                id="mask0_861_149275"
                                style={{ maskType: 'alpha' }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              >
                                <rect width="24" height="24" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_861_149275)">
                                <path
                                  d="M9.54972 15.15L18.0247 6.675C18.2247 6.475 18.4622 6.375 18.7372 6.375C19.0122 6.375 19.2497 6.475 19.4497 6.675C19.6497 6.875 19.7497 7.1125 19.7497 7.3875C19.7497 7.6625 19.6497 7.9 19.4497 8.1L10.2497 17.3C10.0497 17.5 9.81639 17.6 9.54972 17.6C9.28305 17.6 9.04972 17.5 8.84972 17.3L4.54972 13C4.34972 12.8 4.25389 12.5625 4.26222 12.2875C4.27055 12.0125 4.37472 11.775 4.57472 11.575C4.77472 11.375 5.01222 11.275 5.28722 11.275C5.56222 11.275 5.79972 11.375 5.99972 11.575L9.54972 15.15Z"
                                  fill="#FEFEFE"
                                />
                              </g>
                            </svg>
                          </div>
                        ))}
                      </>
                    )}
                    {quizs.indexOf('Below 30') !== -1 && (
                      <>
                        {quizAge.map((quiz, i) => (
                          <div
                            onClick={() => handleSelectedQuiz('age', quiz)}
                            className={`w-full rounded-[8px] border-[1px] border-grey-3 p-4 flex gap-2 items-center mb-2 relative cursor-pointer 
                        ${
                          quizData.gender === quiz
                            ? 'bg-primary-blue text-off-white'
                            : 'bg-off-white text-grey-dark'
                        } `}
                            key={i}
                          >
                            <span className="flex-1 text-base leading-[24px] whitespace-nowrap">
                              {quiz}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <mask
                                id="mask0_861_149275"
                                style={{ maskType: 'alpha' }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              >
                                <rect width="24" height="24" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_861_149275)">
                                <path
                                  d="M9.54972 15.15L18.0247 6.675C18.2247 6.475 18.4622 6.375 18.7372 6.375C19.0122 6.375 19.2497 6.475 19.4497 6.675C19.6497 6.875 19.7497 7.1125 19.7497 7.3875C19.7497 7.6625 19.6497 7.9 19.4497 8.1L10.2497 17.3C10.0497 17.5 9.81639 17.6 9.54972 17.6C9.28305 17.6 9.04972 17.5 8.84972 17.3L4.54972 13C4.34972 12.8 4.25389 12.5625 4.26222 12.2875C4.27055 12.0125 4.37472 11.775 4.57472 11.575C4.77472 11.375 5.01222 11.275 5.28722 11.275C5.56222 11.275 5.79972 11.375 5.99972 11.575L9.54972 15.15Z"
                                  fill="#FEFEFE"
                                />
                              </g>
                            </svg>
                          </div>
                        ))}
                      </>
                    )}
                    {quizs.indexOf('Chronic Health Issues') !== -1 && (
                      <>
                        {quizspecificConcern.map((quiz, i) => (
                          <div
                            onClick={() => handleSelectedQuiz('specificConcern', quiz)}
                            className={`w-full rounded-[8px] border-[1px] border-grey-3 p-4 flex gap-2 items-center mb-2 relative cursor-pointer ${
                              quizData.gender === quiz
                                ? 'bg-primary-blue text-off-white'
                                : 'bg-off-white text-grey-dark'
                            } `}
                            key={i}
                          >
                            <span className="flex-1 text-base leading-[24px] whitespace-nowrap">
                              {quiz}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <mask
                                id="mask0_861_149275"
                                style={{ maskType: 'alpha' }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              >
                                <rect width="24" height="24" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_861_149275)">
                                <path
                                  d="M9.54972 15.15L18.0247 6.675C18.2247 6.475 18.4622 6.375 18.7372 6.375C19.0122 6.375 19.2497 6.475 19.4497 6.675C19.6497 6.875 19.7497 7.1125 19.7497 7.3875C19.7497 7.6625 19.6497 7.9 19.4497 8.1L10.2497 17.3C10.0497 17.5 9.81639 17.6 9.54972 17.6C9.28305 17.6 9.04972 17.5 8.84972 17.3L4.54972 13C4.34972 12.8 4.25389 12.5625 4.26222 12.2875C4.27055 12.0125 4.37472 11.775 4.57472 11.575C4.77472 11.375 5.01222 11.275 5.28722 11.275C5.56222 11.275 5.79972 11.375 5.99972 11.575L9.54972 15.15Z"
                                  fill="#FEFEFE"
                                />
                              </g>
                            </svg>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                {/* divider */}
                <div className="w-full h-full flex flex-col justify-end fixed md:static bottom-0 ">
                  {quizs.indexOf('Female') === -1 && (
                    <>
                      <div className="w-full border-[1px] border-grey-3" />
                      <div className="w-full px-6 flex gap-6 items-center justify-between h-[72px]">
                        {quizs.indexOf('Below 30') !== -1 && (
                          <div className="">
                            <p
                              className="inline text-grey-dark text-base font-semibold leading-[24px] cursor-pointer"
                              onClick={() => toggleQuiz('gender')}
                            >
                              Previous
                            </p>
                          </div>
                        )}
                        {quizs.indexOf('Chronic Health Issues') !== -1 && (
                          <div className="">
                            <p
                              className="inline text-grey-dark text-base font-semibold leading-[24px] cursor-pointer"
                              onClick={() => toggleQuiz('age')}
                            >
                              Previous
                            </p>
                          </div>
                        )}

                        {quizs.indexOf('Chronic Health Issues') !== -1 && (
                          <button
                            className=" bg-grey-dark text-off-white text-base font-semibold leading-[20px] px-6 py-3 rounded-lg"
                            onClick={() => filterData()}
                          >
                            Show Recommendation
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      <div className="container mx-auto flex flex-col md:flex-row-reverse gap-6 md:items-center">
        <div className="w-full md:max-w-[496px] rounded-xl overflow-hidden">
          <SanityImg
            className="w-full"
            builder={imageUrlBuilder}
            image={image}
            alt={image.alt ?? 'image'}
            loading="eager"
            width={500}
            height={413}
          />
        </div>
        <div className="md:pr-[48px] flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <EyeBrew title={title} theme="dark" className="" />
            <Title headingType="h2" theme="dark" tagline={tagline} className="" />
            <div className="mt-[-24px]">
              <ReactPortableText content={description} theme="dark" />{' '}
            </div>
          </div>
          <div className="w-full flex">
            <Link
              href={cta?.href ?? ''}
              className={`btn_tertiary_medium-dark font-semibold rounded-[8px] leading-[20px] flex gap-2 items-center group cursor-pointer`}
            >
              {cta?.text}
              <div className="transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.8925 7.39459C15.283 7.00406 15.9162 7.00405 16.3067 7.39457L20.7052 11.7929C20.8927 11.9804 20.9981 12.2348 20.9981 12.5C20.9981 12.7652 20.8927 13.0196 20.7052 13.2071L16.3067 17.6056C15.9162 17.9961 15.283 17.9961 14.8925 17.6056C14.502 17.2151 14.502 16.5819 14.8925 16.1914L17.5839 13.5H3.99805C3.44576 13.5 2.99805 13.0523 2.99805 12.5C2.99805 11.9477 3.44576 11.5 3.99805 11.5H17.5838L14.8925 8.8088C14.502 8.41829 14.502 7.78512 14.8925 7.39459Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
