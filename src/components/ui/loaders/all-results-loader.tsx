import ContentLoader from 'react-content-loader'

export const AllResultsLoader = (props: any) => (
  <ContentLoader
    speed={2}
    height={130}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="w-full h-auto bg-white shadow-tight"
    {...props}
  >
    <rect x="32" y="25" rx="4" ry="4" width="300" height="16" />
    <rect x="32" y="48" rx="3" ry="3" width="250" height="16" />
    <rect x="32" y="73" rx="3" ry="3" width="400" height="10" />
    <rect x="32" y="86" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
