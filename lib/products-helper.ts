import { createClient } from '../lib/supabase/server';
import { Product } from '../types/products';

export async function getActiveProducts(): Promise<Product[]> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('ranking', { ascending: true })
    .order('product_name', { ascending: true });
  
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  
  return data || [];
}

export async function getMRRProducts(): Promise<Product[]> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('tag', 'mrr')
    .order('ranking', { ascending: true })
    .order('product_name', { ascending: true });
  
  if (error) {
    console.error('Error fetching MRR products:', error);
    return [];
  }
  
  return data || [];
}

export async function getAffiliateProducts(): Promise<Product[]> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('tag', 'affiliate')
    .order('ranking', { ascending: true })
    .order('product_name', { ascending: true });
  
  if (error) {
    console.error('Error fetching affiliate products:', error);
    return [];
  }
  
  return data || [];
}

export async function getProductById(productId: string): Promise<Product | null> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('product_id', productId)
    .eq('is_active', true)
    .single();
  
  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }
  
  return data;
}