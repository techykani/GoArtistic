import { pageQuery } from '@/lib/query'
import { groq } from 'next-sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { sanityStaticProps } from '@/sanity'

const query = pageQuery(groq`
  *[_type == "termsOfService"][0]
  `)
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => ({
  props: await sanityStaticProps({
    context,
    query,
    params: {
      locale: 'en',
      defaultLocale: 'en',
    },
  }),
  revalidate: 10,
})

const termsOfService = () => {
  return (
    <section className="px-6 lg:px-[71px] pt-[36px] pb-[48px] lg:py-[30px] lg:pb-[80px]">
      <div className="container mx-auto flex flex-col gap-[24px]">
        <h5 className="text-[#3C3C3C] text-[24px] lg:text-[32px] font-semibold leading-[30px] lg:leading-[40px] tracking-[0.48px] lg:tracking-[0.64px]">
          TERMS OF USE
        </h5>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">1. General</h6>
        <ul className="pb-4">
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            1.1 PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THIS WEBSITE AND ANY OTHER
            RELATED APPLICATIONS AND/OR WEBSITES, TOGETHER WITH VARIOUS FUNCTIONALITIES
            (COLLECTIVELY, THE “PLATFORMS”).
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            1.2 The Platforms offer you access to healthcare and wellness services (“Services “)
            provided by Health Management International Pte. Ltd. (“HMI”) including any companies
            which are subsidiaries of HMI from time to time (“HMI Group”).
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            1.3 By accessing this Website including registering for an account or scheduling an
            appointment or generally using the Platforms, you agree to be bound by these Terms of
            Use and all other terms and policies that appear on these platforms including our Data
            Privacy Policy at{' '}
            <a
              href="www.hmimedical.com/privacy-policy"
              target="_blank"
              className="text-[#6E6E6E]  leading-[24px] font-semibold hover:underline !text-[#0084C6] undefined"
            >
              www.hmimedical.com/privacy-policy
            </a>
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            1.4 IF YOU DO NOT AGREE TO ANY OF THE TERMS OF USE, PLEASE DISCONTINUE ACCESS TO THIS
            WEBSITE AND THE PLATFORMS, AND YOUR USE OF ONLINE SERVICES IMMEDIATELY.
          </li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            1.5 HMI may modify, vary or amend these Terms of Use at any time and any such
            modifications, variations or amendments shall be effective immediately upon posting on
            this Website. Your use of this Website and/or the Platforms after such changes have been
            posted, will constitute your agreement to the modified Terms of Use.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          2. Account Registration and Access to Services
        </h6>
        <ul className="pb-4">
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            2.1 This Website is publicly accessible. However certain Services including medical
            consultations and scheduling of appointments will only be available after you have
            registered or opened an account with HMI Group. The specific terms and conditions
            relating to the different types of Services will apply accordingly.
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            2.2 You are responsible for all activities and actions conducted under your account
            including without limitation: (i) ensuring that the information provided for the opening
            of your account, registration and generally during your use of the Platforms is true,
            accurate, up-to-date and complete; (ii) keeping confidential your log in details,
            passwords and any other information to avoid unauthorised access to your account; (iii)
            notifying us in writing as soon as possible, if there is reason to believe that the
            security of your account has been compromised; and (iv) taking all steps and actions
            necessary to ensure that your use of the Platforms and Services will be compliant with
            applicable laws and regulations.
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            2.3 If you are accessing the Website and/or Platforms, and/or using the Services on
            behalf of a minor, you are assuming the obligations of this Agreement as they relate to
            the minor and shall accept conditions which we in our absolute discretion, deem
            necessary to effect the Services.
          </li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            2.4 HMI has the right to cancel, suspend or discontinue your account at any time if
            there is concern regarding security, illegality, breach or misinformation arising from
            your account.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          3. Proprietary Right to Contents
        </h6>
        <ul className="pb-4">
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            3.1 The information and contents in this Website are owned by and/or licensed to HMI
            Group. The contents, including but not limited to the logos, software applications,
            artwork, photographs, graphics, documents, are protected by applicable intellectual
            property laws.
          </li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            3.2 HMI Group and its third-party providers reserve all copyright, trademarks and other
            intellectual property rights in and to this Website and its contents. No part hereof may
            be reproduced, distributed, adapted, modified, republished, displayed, broadcast,
            hyperlinked, framed or transmitted in any manner or by any means or stored in an
            information retrieval system without the prior written permission of HMI Group and/or
            the relevant third-party proprietor(s).
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          4. Disclaimer of Warranties and Liability
        </h6>
        <ul className="pb-4">
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            4.1 The information and online services contained or provided on this Website and the
            Platforms are designed for informational or educational purposes only and should not be
            regarded as a substitute for any medical advice. This Website, the Platforms and all
            their contents are provided on an “as is” basis and without warranties of any kind.
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            4.2 To the fullest extent permitted by law, HMI Group does not represent and hereby
            disclaims any warranty, whether express or implied: (i) as to the accuracy, adequacy,
            completeness correctness, reliability, non-infringement for any particular purpose of
            information and/or contents contained or referenced in this Website and/or the
            Platforms; and (ii) that access to this Website, the Platforms or any of their contents
            will be provided uninterrupted or free from errors or that any identified defect will be
            corrected, or that this Website, the Platforms and/or their contents are free from any
            virus or other malicious, destructive or corrupting code or programme.
          </li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            4.3 To the maximum extent permitted by law, HMI Group shall in no event be liable for
            any damages loss or expense including without limitation, direct, indirect, special, or
            consequential damage, or economic loss arising from or in connection with: (i) any
            access, use or the inability to access or use this Website or the Platforms or reliance
            on the contents of and/or any information in this Website or the Platforms; (ii) the
            conduct or views of any person who accesses or uses the Website or the Platforms; (iii)
            any system, server or connection failure, error, omission, interruption, delay in
            transmission, or computer virus; and/or (iv) any use of or access to any other website
            linked to this Website or Platforms.
          </li>
        </ul>
        <h6 className="text-[#6E6E6E]  leading-[24px] font-bold text-base">
          5. Hyperlinks to Third Party Sites
        </h6>
        <ul className="pb-4">
          <li className="text-[#6E6E6E]  leading-[24px]">
            5.1 This Website may contain hyperlinks to other websites which are not maintained by
            HMI Group and are provided as a convenience only. These links do not signify that HMI
            Group endorses such other websites or imply any kind of association or affiliation with
            those websites. HMI Group does not take responsibility for the content of any external
            website linked from this Website and/or the Platforms.
          </li>
        </ul>
        <h6 className="text-[#6E6E6E]  leading-[24px] font-bold text-base">6. Feedback</h6>
        <ul className="pb-4">
          <li className="text-[#6E6E6E]  leading-[24px]">
            6.1 HMI Group shall be free to use or disclose any feedback including but not limited to
            ideas or suggestions submitted to via this Website or Platforms for any purpose, in any
            way and no compensation, royalty fee or reimbursement of any kind shall be payable from
            HMI Group under any circumstances.
          </li>
        </ul>
        <h6 className="text-[#6E6E6E]  leading-[24px] font-bold text-base">7. Indemnity </h6>
        <ul className="pb-4">
          <li className=" text-[#6E6E6E]  leading-[24px]">
            7.1 You agree to indemnify and hold harmless HMI Group, our directors, officers,
            employees, affiliates, agents, contractors and licensors against all damages, losses,
            expenses, claims and costs (including legal costs) suffered or incurred in connection
            with your access of this Website and the Platforms, the use of the Services, and/or any
            violation of these Terms of Use.
          </li>
        </ul>
        <h6 className="text-[#6E6E6E]  leading-[24px] font-bold text-base">8. Governing Law </h6>
        <ul className="pb-4">
          <li className="text-[#6E6E6E]  leading-[24px]">
            8.1 These Terms of Use shall be governed and construed in accordance with laws of
            Singapore. Any dispute arising in connection with these Terms of Use shall be referred
            to and finally resolved by the courts in Singapore.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default termsOfService
