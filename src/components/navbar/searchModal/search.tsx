import React, { useEffect } from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { useQuery } from 'react-query';
import SearchModal from './searchModal';

const SearchPage = ({ isOpen, onClose }: any) => {
  const { data: searchData, isLoading, isError, refetch } = useQuery(
    ['searchData', isOpen],
    handleSearchQuery,
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    // You can add any additional logic here to handle changes related to isOpen
  }, [isOpen]);

  async function handleSearchQuery() {
    try {
      const query = groq`
        *[_type == "search"][0] {
          ...,
          sections[] {
            ...
          }
        }
      `;
      const result = await sanityClient('anonymous').fetch(query, {
        locale: 'en',
        defaultLocale: 'en',
      });
      return result;
    } catch (error) {
      throw new Error('Failed to fetch search data: ' + "error.message");
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {"isError.message"}</div>;

  return (
    <main className=''>
      <SearchModal isOpen={isOpen} onClose={onClose} searchData={searchData.sections[0]} />
    </main>
  );
};

export default SearchPage;