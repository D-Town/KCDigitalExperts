-- ============================================
-- KC Digital Experts - Product Data Import
-- ============================================
-- Führe diese SQL NACH products-schema.sql aus

-- Produkte einfügen
INSERT INTO public.products (
  product_id,
  product_name,
  tag,
  image,
  sales_page,
  thank_you_page,
  price,
  rrp,
  currency,
  language,
  ranking
) VALUES
-- MRR Products
(
  '650177',
  'Algorithmus Mastermind',
  'mrr',
  'algoritmus-mastermind-box-transparent',
  'https://www.digistore24.com/product/650177',
  '/vrsthw45grewr3',
  59.00,
  59.00,
  'Euro',
  ARRAY['de'],
  0
),
(
  '658392',
  'Business Blockaden Lösen',
  'mrr',
  'business-blockaden-loesen-box-transparent',
  'https://www.digistore24.com/product/658392',
  '/vqeirgf087qegbagfe',
  49.00,
  49.00,
  'Euro',
  ARRAY['de'],
  0
),
(
  '658403',
  'Mind Hack Marketing',
  'mrr',
  'mind-hack-marketing-box-transparent',
  'https://www.digistore24.com/product/658403',
  '/cewfq3e4f32ecw',
  59.00,
  59.00,
  'Euro',
  ARRAY['de'],
  0
),
(
  '658427',
  'Digital Business Base',
  'mrr',
  'digital-business-base-box-transparent',
  'https://www.digistore24.com/product/658427',
  '/oq346gfou3breg3g',
  89.00,
  89.00,
  'Euro',
  ARRAY['de'],
  0
),
(
  '658428',
  '7 Days of Success',
  'mrr',
  '7-days-of-success-transparent',
  'https://www.digistore24.com/product/658428',
  '/voq3u4gbvhboerobverevds',
  79.00,
  79.00,
  'Euro',
  ARRAY['de'],
  0
),
(
  '658430',
  'Print on Demand Masterclass',
  'mrr',
  'pod-masterclass-transparent',
  'https://www.digistore24.com/product/658430',
  '/vqeirgf087qegbagfe51742fdf',
  79.00,
  79.00,
  'Euro',
  ARRAY['de'],
  0
),
(
  '658431',
  'Next Level Design',
  'mrr',
  'next-level-transparent',
  'https://www.digistore24.com/product/658431',
  '/vqeirgf087qegbagfee02a9c67',
  79.00,
  79.00,
  'Euro',
  ARRAY['de'],
  0
),
(
  '658432',
  'AI Business Revolution',
  'mrr',
  'AI business-revolution--transparent',
  'https://www.digistore24.com/product/658432',
  '/becac3b0',
  199.00,
  199.00,
  'Euro',
  ARRAY['de'],
  0
),
-- Affiliate Products
(
  '593002',
  'Die 7 Day AI Product Challenge',
  'affiliate',
  '7-tage-ai-challenge-product-image-transparent',
  'https://www.digistore24.com/product/593002?aff=kcdigitalexperts',
  NULL,
  997.00,
  997.00,
  'Euro',
  ARRAY['de'],
  0
),
(
  '2',
  'DSM - Digital Success Mastery',
  'affiliate',
  'digiminds-product-image-transparent',
  'https://www.jenniferzittier.at/p/qaUqgn?aref=14418',
  NULL,
  497.00,
  497.00,
  'Euro',
  ARRAY['de'],
  0
),
(
  '3',
  'DIGIminds',
  'affiliate',
  'dsm-digital-success-mastery-product-image-transparent',
  'https://indepagency.thrivecart.com/digiminds/?affiliate=kcdigitalexperts',
  NULL,
  444.00,
  444.00,
  'Euro',
  ARRAY['de'],
  0
)
ON CONFLICT (product_id) DO UPDATE SET
  product_name = EXCLUDED.product_name,
  tag = EXCLUDED.tag,
  image = EXCLUDED.image,
  sales_page = EXCLUDED.sales_page,
  thank_you_page = EXCLUDED.thank_you_page,
  price = EXCLUDED.price,
  rrp = EXCLUDED.rrp,
  currency = EXCLUDED.currency,
  language = EXCLUDED.language,
  ranking = EXCLUDED.ranking,
  updated_at = timezone('utc'::text, now());

-- ============================================
-- Prüfen ob alles geklappt hat
-- ============================================
SELECT 
  product_id,
  product_name,
  tag,
  price,
  is_active
FROM public.products
ORDER BY tag, ranking, product_name;

-- ============================================
-- Statistik anzeigen
-- ============================================
SELECT 
  tag,
  COUNT(*) as anzahl,
  ROUND(AVG(price), 2) as durchschnittspreis,
  MIN(price) as guenstigster,
  MAX(price) as teuerster
FROM public.products
GROUP BY tag
ORDER BY tag;

-- ============================================
-- Fertig! 🎉
-- Du solltest jetzt 11 Produkte sehen:
-- - 8 MRR Produkte
-- - 3 Affiliate Produkte
-- ============================================
