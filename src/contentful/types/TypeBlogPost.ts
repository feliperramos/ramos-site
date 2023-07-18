import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBlogPostFields {
  title?: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  body?: EntryFieldTypes.RichText;
  image?: EntryFieldTypes.AssetLink;
  publishDate?: EntryFieldTypes.Date;
  author?: EntryFieldTypes.Symbol;
  category?: EntryFieldTypes.Symbol;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
