-- ============================================
-- KC Digital Experts - Products Table Setup
-- ============================================
-- Führe diese SQL im Supabase SQL Editor aus

-- 1. Products Tabelle erstellen
-- ============================================
CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Product Identifiers
  product_id TEXT NOT NULL UNIQUE,
  product_name TEXT NOT NULL,
  tag TEXT NOT NULL CHECK (tag IN ('mrr', 'affiliate')),
  
  -- Media
  image TEXT NOT NULL,
  
  -- URLs
  sales_page TEXT NOT NULL,
  thank_you_page TEXT, -- Nur der Pfad: /vrsthw45grewr3
  
  -- Pricing
  price DECIMAL(10,2) NOT NULL,
  rrp DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'Euro',
  
  -- Localization
  language TEXT[] NOT NULL DEFAULT '{de}',
  
  -- Sorting & Display
  ranking INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  
  -- Metadata (optional für später)
  description TEXT,
  short_description TEXT,
  features TEXT[],
  
  CONSTRAINT products_product_id_key UNIQUE (product_id)
);

-- 2. Indexes für Performance
-- ============================================
CREATE INDEX IF NOT EXISTS products_tag_idx ON public.products(tag);
CREATE INDEX IF NOT EXISTS products_ranking_idx ON public.products(ranking);
CREATE INDEX IF NOT EXISTS products_is_active_idx ON public.products(is_active);
CREATE INDEX IF NOT EXISTS products_language_idx ON public.products USING GIN(language);

-- 3. Row Level Security (RLS) aktivieren
-- ============================================
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies - Alle können Produkte lesen
-- ============================================
CREATE POLICY "Public products are viewable by everyone"
  ON public.products
  FOR SELECT
  USING (is_active = true);

-- 5. Admin Policy (nur für authentifizierte Admins)
-- ============================================
-- Später wenn du Admins hast, kannst du das erweitern:
-- CREATE POLICY "Admins can manage products"
--   ON public.products
--   FOR ALL
--   USING (
--     auth.uid() IN (
--       SELECT id FROM public.profiles WHERE role = 'admin'
--     )
--   );

-- 6. Trigger für updated_at
-- ============================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS products_updated_at ON public.products;
CREATE TRIGGER products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 7. Comments für Dokumentation
-- ============================================
COMMENT ON TABLE public.products IS 'Digital products available for sale';
COMMENT ON COLUMN public.products.product_id IS 'External product ID (z.B. Digistore24 ID)';
COMMENT ON COLUMN public.products.tag IS 'Product type: mrr or affiliate';
COMMENT ON COLUMN public.products.thank_you_page IS 'Thank you page path (without domain): /vrsthw45grewr3';
COMMENT ON COLUMN public.products.ranking IS 'Display order (lower = higher priority)';
COMMENT ON COLUMN public.products.is_active IS 'Whether product is visible to public';

-- 8. View für aktive Produkte (sortiert)
-- ============================================
CREATE OR REPLACE VIEW public.active_products AS
SELECT 
  *
FROM public.products
WHERE is_active = true
ORDER BY ranking ASC, product_name ASC;

-- Grant SELECT auf die View
GRANT SELECT ON public.active_products TO anon, authenticated;

-- ============================================
-- Fertig! 🎉
-- ============================================
-- Nächster Schritt: Daten importieren (siehe import-products.sql)
-- ============================================
