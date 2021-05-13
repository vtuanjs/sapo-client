export interface ISapoCollection {
  id: number;
  name: string;
  description: string;
  alias: string;
  meta_title: string;
  meta_description: string;
  created_on: string;
  modified_on: string;
  template_layout: string;
  sort_order: string;
  published_on: string;
  image: {
    created_on: string;
    src: string;
  };
  disjunctive: boolean;
  type: string;
}
