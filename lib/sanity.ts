import ImageUrlBuilder from '@sanity/image-url';
import client from '../client';
import { Url } from 'url';
import { createPreviewSubscriptionHook } from 'next-sanity';

export const imageBuilder = ImageUrlBuilder(client);

export const urlForImage = (source: string) => {
  return imageBuilder.image(source).auto('format').fit('max');
};
