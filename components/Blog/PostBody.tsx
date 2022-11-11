import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../lib/sanity';
import styled from 'styled-components';

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ' '}
          loading='lazy'
          src={urlForImage(value)
            .width(320)
            .height(240)
            .fit('max')
            .auto('format')}
        />
      );
    },
  },
  block: {
    h2: ({ children }: any) => <h3>{children}</h3>,
  },
};
export default function PostBody({ body }: any) {
  return (
    <Wrapper>
      <PortableText value={body} components={ptComponents} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 850px;
  margin: 0 auto;
  max-width: 100%;
`;
