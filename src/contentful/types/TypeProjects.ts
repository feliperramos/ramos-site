import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProjectsFields {
  projectName?: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Symbol;
  technology?: EntryFieldTypes.Symbol;
  logo?: EntryFieldTypes.AssetLink;
  url: EntryFieldTypes.Symbol;
}

export type TypeProjectsSkeleton = EntrySkeletonType<
  TypeProjectsFields,
  "ramosSite"
>;
export type TypeProjects<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeProjectsSkeleton, Modifiers, Locales>;
