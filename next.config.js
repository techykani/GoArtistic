/** @type {import('next').NextConfig} */
module.exports = {
  // To run in local comment headers obj
  // async headers() {
  //   return [
  //     {
  //       source: '/',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: "default-src 'self'; object-src 'self';",
  //         },
  //       ],
  //     },
  //   ]
  // },
  transpilePackages: ['react-time-picker'],
  reactStrictMode: true,
  i18n: {
    locales: ['en-my'],
    defaultLocale: 'en-my',
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: '/studio/',
      },
      {
        source: '/billplz-api/:path*',
        destination:
          process.env.BILLPLZ_SANDBOX === 'true'
            ? 'https://www.billplz-sandbox.com/api/:path*'
            : `https://www.billplz.com/api/:path*`,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:slug((?:id|zh))',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mmc_doctor/:slug',
        destination: '/our-doctors/:slug',
        permanent: true,
      },
      {
        source: '/mmc_doctor/dr',
        destination: '/our-doctor/dr-jayendran-dharmaratnam',
        permanent: true,
      },
      {
        source: '/centres-of-excellence',
        destination: '/services/centres-of-excellence',
        permanent: true,
      },
      {
        source: '/:slug((?:cancer-centre|diabetes-centre))',
        destination: '/services/centres-of-excellence/:slug',
        permanent: true,
      },
      {
        source: '/specialised-focus',
        destination: '/services/specialised-focus',
        permanent: true,
      },
      {
        source:
          '/:slug((?:bone-joint-replacement-centre|emergency-trauma-centre|heart-centre|liver-gastro-centre|mens-health-centre|neurological-stroke-centre|wellness-centre|woman-centre))',
        destination: '/services/specialised-focus/:slug',
        permanent: true,
      },
      {
        source: '/clinical-services',
        destination: '/services/clinical-services',
        permanent: true,
      },
      {
        source:
          '/:slug((?:aesthetic-centre|cardiac-catheterisation-laboratory|chemotherapy-daycare|clinical-research-centre|day-procedure-unit|dental-centre|haemodialysis-centre|health-screening-centre|ivf-centre|laboratory|nutritional-and-food-services|pet-ct-centre|radiology|radiotherapy|rehabilitation-centre|clinical-psychological-services))',
        destination: '/services/clinical-services/:slug',
        permanent: true,
      },
      {
        source: '/:slug((?:find-a-doctor|meet-our-new-doctor))',
        destination: '/our-doctors',
        permanent: true,
      },
      {
        source: '/id/temui-dokter-kami',
        destination: '/our-doctors',
        permanent: true,
      },
      {
        source: '/:slug((?:step-by-step-guide|admission-guide))',
        destination: '/getting-admitted/admission-guide',
        permanent: true,
      },
      {
        source:
          '/:slug((?:pink-care-ecard-package|diabetes-package|maybank-cardmembers-exclusive-offer|lung-screening|ride-2-mahkota-medical-centre|golden-age-package|kidney-screening|time-for-your-eye-screening|endoscopy-package|allergy-panel-package))',
        destination: '/services/packages/:slug',
        permanent: true,
      },
      {
        source: '/id/pakej-pink-care-ecard',
        destination: '/services/packages/pakej-pink-care-ecard',
        permanent: true,
      },
      {
        source: '/id/pakej-pemeriksaan-kanker-payudara-pink-care-ecard-agent',
        destination: '/services/packages/pakej-pemeriksaan-kanker-payudara-pink-care-ecard-agent',
        permanent: true,
      },
      {
        source: '/myheart-campaign',
        destination: '/services/packages/myheart-focus-package',
        permanent: true,
      },
      {
        source: '/ms/myheart-campaign-bm',
        destination: '/services/packages/pakej-myheart-fokus',
        permanent: true,
      },
      {
        source: '/zh/myheart-campaign-zh',
        destination: '/services/packages/myheart-focus-package-zh',
        permanent: true,
      },
      {
        source: '/teleconsultation',
        destination: '/services/virtual-consultation',
        permanent: true,
      },
      {
        source: '/id/cancer-centre-id',
        destination: '/services/centres-of-excellence/cancer-centre',
        permanent: true,
      },
      {
        source: '/id/diabetes-centre-id',
        destination: '/services/centres-of-excellence/diabetes-centre',
        permanent: true,
      },
      {
        source: '/id/mens-health-centre-id',
        destination: '/services/specialised-focus/mens-health-centre',
        permanent: true,
      },
      {
        source: '/id/woman-child-centre-id',
        destination: '/services/specialised-focus/woman-child-centre',
        permanent: true,
      },
      {
        source: '/id/estimasi-biaya-riil',
        destination: '/cost/treatment-cost-estimation',
        permanent: true,
      },
      {
        source: '/ms/tulang-dan-sendi-apa-yang-perlu-anda-ketahui',
        destination: '/services/specialised-focus/bone-joint-replacement-centre',
        permanent: true,
      },
      {
        source: encodeURI('/zh/寻找医生'),
        destination: '/our-doctors',
        permanent: true,
      },
      {
        source: '/air-asia-ride-promotion-form',
        destination: '/airasia-membership',
        permanent: true,
      },
    ]
  },
}
