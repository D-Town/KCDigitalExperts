'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../types/products';
import { useTranslations } from 'next-intl';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const badgeLabel = product.tag === 'affiliate' ? 'Affiliate Produkt' : 'MRR Produkt';
  const t = useTranslations("Shop.productCard");
  return (
    <article className="kc-card dark-mode-transition flex h-full flex-col gap-6">
      {product.image && (
        <div className="relative w-full overflow-hidden rounded-lg bg-[color:var(--color-header)]">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={`/img/${product.tag}/${product.image}.png`}
              alt={product.product_name}
              fill
              className="object-contain p-6"
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-body-sm text-muted">{badgeLabel}</span>
          <span className="text-body-sm text-muted">•</span>
          <span className="text-body-sm text-muted">{product.language?.join(', ') || 'DE'}</span>
        </div>

        <div className="space-y-2">
          <h3 className="h4">{product.product_name}</h3>
          {product.short_description && (
            <p className="text-body-sm text-muted">{product.short_description}</p>
          )}
        </div>

        <div className="space-y-1">
          <p className="h4">
            {product.price.toFixed(2)} {product.currency}
          </p>
          <p className="text-body-sm text-muted">{t("p")} {product.rrp.toFixed(2)} {product.currency}</p>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <Link
            href={product.sales_page}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
          >
            {t("link")}
          </Link>
        </div>
      </div>
    </article>
  );
}
