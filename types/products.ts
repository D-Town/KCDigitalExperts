export type ProductTag = 'mrr' | 'affiliate';

export type Currency = 'Euro' | 'USD' | 'CHF';

export interface Product {
  id: string;
  created_at: string;
  updated_at: string;
  product_id: string;
  product_name: string;
  tag: ProductTag;
  image: string;
  sales_page: string;
  thank_you_page: string | null;
  price: number;
  rrp: number;
  currency: Currency;
  language: string[];
  ranking: number;
  is_active: boolean;
  description: string | null;
  short_description: string | null;
  features: string[] | null;
}

export interface ProductInsert {
  product_id: string;
  product_name: string;
  tag: ProductTag;
  image: string;
  sales_page: string;
  thank_you_page?: string | null;
  price: number;
  rrp: number;
  currency?: Currency;
  language?: string[];
  ranking?: number;
  is_active?: boolean;
  description?: string | null;
  short_description?: string | null;
  features?: string[] | null;
}

export interface ProductUpdate {
  product_name?: string;
  tag?: ProductTag;
  image?: string;
  sales_page?: string;
  thank_you_page?: string | null;
  price?: number;
  rrp?: number;
  currency?: Currency;
  language?: string[];
  ranking?: number;
  is_active?: boolean;
  description?: string | null;
  short_description?: string | null;
  features?: string[] | null;
}