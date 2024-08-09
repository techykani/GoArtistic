import { pageQuery } from '@/lib/query'
import { groq } from 'next-sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { sanityStaticProps } from '@/sanity'

const query = pageQuery(groq`
  *[_type == "privacypolicy"][0]
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

const privacypolicy = () => {
  return (
    <section className="px-6 lg:px-[71px] pt-[36px] pb-[48px] lg:py-[30px] lg:pb-[80px]">
      <div className="container mx-auto flex flex-col gap-[24px]">
        <h5 className="text-[#3C3C3C] text-[24px] lg:text-[32px] font-semibold leading-[30px] lg:leading-[40px] tracking-[0.48px] lg:tracking-[0.64px]">
          Data Privacy Notice
        </h5>
        <div className="text-[#6E6E6E]  leading-[24px]">
          <ul className="pb-4">
            <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
              This Data Privacy Notice is applicable to Health Management International Pte Ltd’s
              subsidiary companies in Singapore including the subsidiary companies which may be
              established from time to time (“HMI Group”).
            </li>
            <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
              Your privacy is important to us.
            </li>
            <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
              This document serves to inform you of our practices on Personal Data management. You
              should read this Data Privacy Notice to know and understand the purposes for which we
              collect, use and disclose your Personal Data. It supplements any other consents which
              you may have previously provided to us on your Personal Data.
            </li>
            <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
              From time to time, we may update/amend this Data Privacy Notice to be consistent with
              our internal practices and to stay abreast with future developments in the industry
              and/ or changes in legal and regulatory requirements without prior notice. All your
              interactions with us shall be subject to the latest version of the Data Privacy Notice
              in force at the relevant time.
            </li>
            <li className="text-[#6E6E6E]  leading-[24px]">
              By continuing to communicate with HMI Group and/or by continuing to use our services
              following the modifications, updates or amendments to this Data Privacy Notice, such
              action shall signify your acceptance of such modifications.
            </li>
          </ul>
        </div>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">1. Personal Data</h6>
        <ul className="pb-4">
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            In this Data Privacy Notice, “Personal Data” refers to any data including any sensitive
            personal data, whether true or not, about an individual who can be identified (a) from
            that data; or (b) from that data and other information to which HMI have or are likely
            to have access, including data in our records as may be updated from time to time.
          </li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            For the context of this Data Privacy Notice, examples of such “Personal Data” you may
            provide to us include (depending on the nature of your interaction with us) your name,
            NRIC, passport or other identification number, telephone number(s), mailing address,
            email address, any personal data consisting of information as to your physical or mental
            health or condition, your political opinions, your religious beliefs or other beliefs of
            a similar nature, and any other information relating to any individuals which you have
            provided to HMI Group in any forms you may have submitted, or via other forms of
            interaction with you.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          2. Collection of Personal Data
        </h6>
        <ul className="pb-4">
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            2.1 Generally, we may collect Personal Data in the following ways:
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            a. when you submit any form e.g. patient inquiry forms or other forms relating to any of
            our services;
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            b. when you enter into any agreement or provide other documentation or information in
            respect of your interactions with us, or when you use our services;
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            c. when you interact with our staff, including customer service officers, for example,
            via telephone calls (which may be recorded), letters, fax, face-to-face meetings, social
            media platforms and emails;
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            d. when you interact with us via our websites or use services on our websites;
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            e. when you request that we contact you or request that you be included in an email or
            other mailing list;
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            f. when you respond to our promotions, initiatives or to any request for additional
            Personal Data;
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            g. when you submit an employment application or when you provide documents or
            information including your resume and/or CVs in connection with any appointment as an
            officer, director, representative or any other position;
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            h. when your images are captured by us via CCTV cameras while you are within our
            premises, or via photographs or videos taken by us or our representatives when you
            attend our events;
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            i. when you are contacted by, and respond to, our marketing representatives and customer
            service officers;
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            j. when we seek information about you and receive your Personal Data in connection with
            your relationship with us, including for our products and services or job applications,
            for example, from business partners, public agencies, your ex-employer, referral
            intermediaries and the relevant authorities;
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            k. when you registered with us as patients, employees, business associates and other
            related parties; and/or
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            l. when you submit your Personal Data to us for any other reasons.
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            2.2 When you browse our Website, you generally do so anonymously but please see
            paragraph 6 below for information on cookies and other technologies which we have
            implemented on our Website.
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            2.3 If you provide us with any Personal Data relating to a third party (e.g. information
            of your spouse, children, parents, and/or employees), by submitting such information to
            us, you represent to us that you have obtained the consent of the third party to provide
            us with their Personal Data for the relevant purposes.
          </li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            2.4 You should ensure that all Personal Data submitted to us is complete, accurate, true
            and correct. Failure on your part to do so may result in our inability to provide you
            with the products and services you have requested, or delays in providing you with
            products and services you have requested, or processing your applications.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          3. Purposes for the Collection, Use, Process and Disclosure of Your Personal Data
        </h6>
        <ul className="pb-4">
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            3.1 Generally, we collect, use and disclose your Personal Data for the following
            purposes: a. If you are a prospective, current or former patient or customer of HMI:{' '}
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            (i) providing customer service and support (including but not limited to customer
            relationship management, processing your admissions, processing and settlement of bills,
            facilitating, arranging and providing reminders of your appointments, medical
            examinations, screenings or check-ups, applying for visas on your behalf, contacting you
            regarding medical reports and results, providing follow-up calls, providing you with
            administrative support, and administering insurance coverage and processing insurance
            claims);{' '}
          </li>
          <li className="text-[#6E6E6E]  leading-[24px] pb-6">
            (ii) administering and processing your requests including creating and maintaining
            profiles of our customers in our system database for administrative purposes at various
            HMI Group’s facilities;{' '}
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            (iii) providing services as a vendor when you register or subscribe for one of our
            services, place an order for our products or services or use our online services,
            interact with us in any other way, such as via social media, issue any testimonials or
            other feedback on products and/or services, comment on any blogs or featured articles,
            sign up for our special offers or other updates, fill in surveys;{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (iv) personalising your experience at HMI Group’s various touchpoints and conducting
            market research, understanding and analysing customer behaviour, location, preferences
            and demographics in order to improve our service offerings;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (v) administering medical care (including keeping patient case and procedure records,
            providing medication, ordering medical tests, reports and biological samples;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (vi) liaising with third party specialist doctors, clinics, hospitals and/or medical
            institutions in relation to your medical care (including by providing them with access
            to your medical records);{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (vii) administering debt recovery and debt management;{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (viii) whenever and to whomever the regulatory directions, legislation or a court order
            may require;{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (ix) disclosing to the suppliers/vendors of HMI Group, if it is required for the
            performance of their services, or if required by the law and/or authorities that the
            end-user consuming the medicine/drug/equipment must be recorded;{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (x) enabling a response to a request for Personal Data which may include the Personal
            Data of the patient in compliance with the Personal Data Protection Act 2012 and its
            regulations; and/or
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (xi) purposes which are reasonably related to the aforesaid.{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            b. If you are a nominated caregiver or next-of-kin of a patient or customer of HMI
            Group:
          </li>
          <li className="text-[#6E6E6E] pb-6  leading-[24px]">
            (i) informing you of the patient’s medical status and whereabouts;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (ii) the disclosure of your Personal Data whenever and to whomever regulatory directives
            or law or a court order may require; and/or
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (iii) purposes which are reasonably related to the aforesaid.
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            c. If you are an employee, officer or owner of an external service provider or vendor
            outsourced or prospected by HMI Group:{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (i) assessing your organisation’s suitability as an external service provider or vendor
            for HMI;{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (ii) managing project tenders and quotations, processing orders or managing the supply
            of goods and services;{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (iii) creating and maintaining profiles of our service providers and vendors in our
            system database;{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (iv) processing and payment of vendor invoices and bills;{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (v) facilities management (including but not limited to issuing visitor access passes
            and facilitating security clearance);{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (vi) the disclosure of your Personal Data whenever and to whomever regulatory directives
            or the law or a court order may require;{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (vii) administering debt recovery and debt management; and/or{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (viii) purposes which are reasonably related to the aforesaid.{' '}
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            d. If you submit an application to us as a candidate for employment, internships or
            scholarships:
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (i) conducting interviews and processing your application (including but not limited to
            pre-recruitment checks involving your qualifications and facilitating interviews);
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (ii) obtaining references, background screening and assessing your suitability for the
            position applied for;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (iii) enrolling successful candidates as our employees and facilitating human resource
            planning and management (including but not limited to preparing letters of employment,
            name cards and building access passes); and/or
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (iv) purposes which are reasonably related to the aforesaid.
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            e. If you are an existing employee of HMI Group:
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (i) providing remuneration, reviewing salaries and bonuses, conducting salary
            benchmarking reviews, staff appraisals and evaluation, as well as recognising
            individuals for their services and conferring awards;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (ii) administrative and support processes relating to your employment, including staff
            orientation, its management and termination, as well as staff benefits, travel,
            manpower, business continuity and logistics management or support, processing expense
            claims, medical insurance applications, medical screenings and immunisations, leave
            administration, long-term incentive plans, training, learning and talent development,
            and planning and organising corporate events;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (iii) providing you with tools and/or facilities to enable or facilitate the performance
            of your duties;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (iv) facilitating professional accreditation and complying with compliance audits;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (v) compiling and publishing internal directories and emergency contact lists for
            business continuity;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (vi) managing corporate social responsibility projects;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (vii) conducting analytics and research for human resource planning and management, and
            for us to review, develop, optimise and improve work-related practices, environment and
            productivity;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (viii) ensuring that the administrative and business operations of HMI Group will
            function in a secure, efficient and effective manner (including but not limited to
            examining or monitoring any computer software and/or hardware installed within HMI
            Group, your work emails and personal digital and storage devices);
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (ix) compliance with any applicable rules, laws and regulations, codes of practice or
            guidelines or to assist in law enforcement and investigations by relevant authorities
            (including but not limited to disclosures to regulatory bodies, conducting audit checks
            or surveillance and investigation);
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (x) administering employment cessation processes;
          </li>
          <li className="text-[#6E6E6E] pb-6  leading-[24px]">
            (xi) the disclosure of your Personal Data whenever and to whomever regulatory directives
            or the law or a court order may require;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (xii) administering debt recovery and debt management; and/or
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (xiii) any other purposes relating to any of the above.
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            f. If you are a medical/dental practitioner or traditional and complementary medicine
            practitioner at HMI:
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (i) facilitating professional accreditation and complying with compliance audits;
          </li>
          <li className="text-[#6E6E6E] pb-6  leading-[24px]">
            (ii) facilitating disbursements of fees collected on your behalf;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (iii) managing and providing you with tools, services and/or facilities to enable or
            facilitate the performance of your duties;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (iv) planning and organising events for practitioners;
          </li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            (v) creating and maintaining profiles of our accredited doctors in our system database;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (vi) facilities management (including but not limited to issuing visitor access passes
            and facilitating security clearance);
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (vii) the disclosure of your Personal Data whenever and to whomever regulatory
            directives or the law or a court order may require;
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (viii) administering debt recovery and debt management; and/or
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            (ix) any other purposes relating to any of the above.
            <br />
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            3.2 Further, where permitted under Personal Data Protection Act 2012, HMI Group may also
            collect, use and disclose your Personal Data for the following “Additional Purposes”:
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            a. taking or filming photographs and videos for corporate publicity or marketing
            purposes, and featuring your photographs and/or testimonials in our articles and
            publicity materials;
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            b. providing or marketing services and benefits to you or to our patients in general,
            including promotions, service upgrades, loyalty programmes and sending of healthcare-
            related updates, event invitations, newsletters and marketing and promotional
            information which we have identified are relevant and/or of interest to you;
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            c. organising roadshows, tours, campaigns (including health check or vaccination
            campaigns) and promotional or events and administering contests and competitions;
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            d. matching Personal Data with other data collected for other purposes and from other
            sources (including third parties) in connection with the provision or offering of
            services;
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            e. conducting market research, aggregating and analysing customer profiles and data to
            determine health-related patterns and trends, understanding and analysing customer
            behaviour, location, preferences and demographics for us to offer you other products and
            services as well as special offers and marketing programmes which may be relevant to
            your preferences and profile; and/or
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            f. purposes which are reasonably related to the aforesaid.
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            3.3 If you have indicated that you consent to receiving marketing or promotional
            information via your contact details, then from time to time, HMI Group may contact you
            using contact details which you had provided to us, with information about our products
            and services.
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            3.4 In relation to particular services or in your interactions with us, we may also have
            specifically notified you of other purposes for which we collect, use or disclose your
            Personal Data. If so, we will collect, use and disclose your Personal Data for these
            additional purposes as well, unless we have specifically notified you otherwise.
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            3.5 You have a choice to withdraw your consent for receiving marketing or promotional
            materials/communication. You may contact us using the contact details found in paragraph
            11 below.
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            3.6 Please be aware that once we receive confirmation that you wish to withdraw your
            consent for marketing or promotional materials/communication, it may take up to 21
            calendar days for your withdrawal to be reflected in our systems. Therefore, you may
            still receive marketing or promotional materials/communication during this period of
            time.
          </li>
          <li className=" text-[#6E6E6E] leading-[24px]">
            3.7 Please note that even if you withdraw your consent for the receipt of marketing or
            promotional materials, we may still contact you for other purposes in relation to the
            services that you have requested or purchased from HMI.
            <br />
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          4. Disclosure of Personal Data{' '}
        </h6>
        <ul className="pb-4">
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            4.1 HMI Group will take reasonable steps to protect your Personal Data against
            unauthorised disclosure.
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            4.2 Subject to the provisions of any applicable law, your Personal Data may be
            disclosed, for the purposes listed above (where applicable), to the following entities
            or parties, whether they are located overseas or in Singapore:
            <br />
            <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
              a. amongst the HMI Group entities and affiliates (including their staff and medical
              /dental/ traditional and complementary medicine practitioners, registered nurses,
              medical assistants, technologists, allied health staff, paramedical staff or other
              healthcare staff engaged or referred to for the provision of healthcare services in
              accordance with applicable law;
            </li>
            <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
              b. third party medical/dental practitioners, clinics, hospitals and/or medical
              institutions;
            </li>
            <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
              c. companies providing services relating to insurance to HMI Group;
            </li>
            <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
              d. vendors, agents, contractors, sub-contractors or third-party service providers who
              provide operational, marketing or business services to HMI Group;
            </li>
            <li className=" text-[#6E6E6E] pb-6 leading-[24px]">e. our corporate clients;</li>
            <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
              f. any business partner, investor, assignee or transferee (actual or prospective) to
              facilitate business asset transactions (which may extend to any merger, acquisition or
              asset sale);
            </li>
            g. external banks, credit card companies, other financial institutions and their
            respective service providers;
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            h. our professional advisers such as consultants, auditors and lawyers;
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            i. third party insurers, employers of patients, guarantors and/or credit reporting
            agencies/credit data management company;
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            j. relevant government regulators or authorities or law enforcement agencies to comply
            with any laws, rules, guidelines and regulations or schemes imposed by any governmental
            authority (including the Ministry of Health);
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            k. in connection with a corporate transaction, such as merger, consolidation, or in the
            unlikely event of winding up; and/or
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            l. any other party to whom you authorise us to disclose your Personal Data.
            <br />
          </li>
          <li className=" text-[#6E6E6E] leading-[24px]">
            4.3 As far as permitted by the laws of Singapore, HMI will not be responsible for any
            unauthorised use of your Personal Data by third parties which are wholly attributable to
            factors beyond the control of HMI.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          5. Retention of Personal Data{' '}
        </h6>
        <ul className="pb-4">
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            5.1 HMI Group retains such Personal Data as may be required for business or legal
            purposes, and such purposes may vary according to the circumstances.
          </li>{' '}
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            5.2 Whilst HMI Group will securely dispose of or anonymise Personal Data which it can
            reasonably determine is no longer needed and does not generally hold on to Personal Data
            “just in case”, it is in the interests of any caregiver or person treating the patient
            to be able to refer to a complete set of medical records to avoid risks to health and
            safety of the patient.
          </li>{' '}
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            5.3 With respect to the medical records of patients, unless specific contrary
            instructions from the patient are received in writing, HMI may (but is not obliged to)
            retain such medical records for as long as HMI may be potentially consulted for further
            follow up by (or on behalf of) the patient even where such consultation may not occur
            until after a substantial period of time or there is no current or present indication
            that the patient may well return for further consultation or follow up. In addition, HMI
            will retain Personal Data relating to claims for a period deemed necessary due to
            regulatory requirements.
          </li>
          <li className=" text-[#6E6E6E]  leading-[24px]">
            5.3 With respect to the medical records of patients, unless specific contrary
            instructions from the patient are received in writing, HMI may (but is not obliged to)
            retain such medical records for as long as HMI may be potentially consulted for further
            follow up by (or on behalf of) the patient even where such consultation may not occur
            until after a substantial period of time or there is no current or present indication
            that the patient may well return for further consultation or follow up. In addition, HMI
            will retain Personal Data relating to claims for a period deemed necessary due to
            regulatory requirements.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          6. Use of Cookies, Web Beacons, and Similar Technologies on the website
        </h6>
        <ul className="pb-4">
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            6.1 When you visit or interact with our sites, services, we or our authorized service
            providers may use cookies, web beacons, and other similar technologies for collecting
            and storing information to help provide you with a better, faster, and safer web
            experience.
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            6.2 The information collected by us or our authorised service providers may recognise a
            visitor as a unique user and may collect information such as how a visitor arrives at
            our sites, what kind of browser a visitor is on, what operating system a visitor is
            using, a visitor’s IP address and a visitor’s click stream information and time stamp
            (for example, which pages they have viewed, the time the pages were accessed and the
            time spent per web page).
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            6.3 The use of cookies, web beacons and similar technologies by us on our website has
            different functions. They are either necessary for the functioning of our services, help
            us improve our performance, or serve to provide you with extra functionalities. They may
            also be used to deliver content that is more relevant to you and your interests, or to
            target advertising to you on or off our sites.
          </li>
          <li className=" text-[#6E6E6E]  leading-[24px]">
            6.4 We offer certain site features and services that are available only through the use
            of these technologies. You are always free to block, delete, or disable these
            technologies if your browser so permits. However, if you decline cookies or other
            similar technologies, you may not be able to take advantage of certain site features or
            services tools.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          7. Third-Party Sites{' '}
        </h6>
        <ul className="pb-4">
          <li className=" text-[#6E6E6E]  leading-[24px]">
            Our website may contain links to other websites operated by third parties. However, we
            are not responsible for the data protection practices of such third-party websites even
            though some of these third-party websites may be co-branded with our logo or trademarks.
            Once you have left our website, you should check the applicable Data Privacy Notice of
            the third- party website to determine how they will handle any information they collect
            from you.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          8. Accuracy of Information
        </h6>
        <ul className="pb-4">
          <li className=" text-[#6E6E6E]  leading-[24px]">
            You are responsible for informing us about changes to your Personal Data and for
            ensuring that such information is accurate and current. We will not be responsible for
            relying on inaccurate or incomplete data provided.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          9. Transfer of Personal Data Outside Singapore
        </h6>
        <ul className="pb-4">
          <li className="text-[#6E6E6E]  leading-[24px]">
            Your Personal Data may be transferred to, stored, used and processed in a jurisdiction
            other than Singapore, in order that HMI can duly perform the agreed services and fulfil
            its contractual obligations with you. In such case, HMI shall ensure that the recipient
            organisation is obliged to comply with a standard of protection which is comparable to
            the protection required under the Singapore Personal Data Protection Act 2012.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">
          10. Contacting Us – Withdrawal of Consent, Access and Correction of your Personal Data
        </h6>
        <ul className="pb-4">
          <li className="text-[#6E6E6E]  leading-[24px]">10.1 If you:</li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            a. have any questions or feedback relating to your Personal Data or our Data Privacy
            Notice; b. would like to withdraw your consent to any use of your Personal Data as set
            out in this Data Privacy Notice;
          </li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            b. would like to withdraw your consent to any use of your Personal Data as set out in
            this Data Privacy Notice;
          </li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            c. would like to inform us of changes to your Personal Data or obtain access and make
            corrections to your Personal Data records; or
          </li>
          <li className="text-[#6E6E6E] pb-6 leading-[24px]">
            d. would like to lodge a complaint regarding the collection, use, process and disclosure
            of your Personal Data;
          </li>
          <li className=" text-[#6E6E6E] leading-[24px]">please contact us as follows: </li>
          <li className=" text-[#6E6E6E] leading-[24px]">Call: +65 68049888</li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            Email: dataprotection@hmimedical.com
          </li>
          <li className=" text-[#6E6E6E] leading-[24px]">
            Write to our Data Protection Officer at:
          </li>
          <li className=" text-[#6E6E6E] leading-[24px]">Data Protection Officer</li>
          <li className=" text-[#6E6E6E] leading-[24px]">
            Health Management International Pte Ltd
          </li>
          <li className=" text-[#6E6E6E] leading-[24px]">
            320 Serangoon Road, #18-08 Centrium Square
          </li>
          <li className=" text-[#6E6E6E] pb-6 leading-[24px]">
            Singapore 218208
            <br />
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            10.2 It may take up to 21 calendar days for the requested changes to be reflected in our
            systems. Also, we reserve the right to charge a minimal fee to attend to any data access
            requests as permitted by the relevant personal data protection laws applicable.
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            10.3 Please note that if your Personal Data has been provided to us by a third party
            (e.g. a general practitioner or your employer), you should contact that organisation or
            individual, to make such queries, complaints, and access and correction requests to HMI
            Group on your behalf.
          </li>
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            10.4 If you withdraw your consent to any or all use of your Personal Data, depending on
            the nature of your request, HMI Group may not be in a position to continue to provide
            its products and services to you, or administer any contractual relationship in place,
            which in turn may also result in the termination of any agreements with HMI Group, and
            your being in breach of your contractual obligations or undertakings. HMI’s legal rights
            and remedies in such event are expressly reserved.
          </li>
          <li className="text-[#6E6E6E]  leading-[24px]">
            10.5 If we have not received any response from you in withdrawing your consent to HMI
            Group collecting, using, processing and disclosing your Personal Data as set out above,
            we reserve the right to assume that you consent to and agree with the terms set out
            above.
          </li>
        </ul>
        <h6 className="font-bold text-base text-[#6E6E6E]  leading-[24px]">11. Governing Law </h6>
        <ul className="pb-4">
          <li className="pb-6 text-[#6E6E6E]  leading-[24px]">
            11.1 For HMI Group in Singapore, this Data Privacy Notice shall be governed in all
            respects by the laws of Singapore.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default privacypolicy
