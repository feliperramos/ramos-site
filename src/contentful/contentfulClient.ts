import { createClient } from "contentful";
import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} from "../constants";

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});

export default function contentfulClient({ preview = false }) {
  if (preview) return previewClient;

  return client;
}
