import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  useCdn: true,
  apiVersion: '2022-10-21',
  dataset: 'production',
});
