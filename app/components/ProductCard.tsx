import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="hover-zoom"
      style={{ display: "block", textDecoration: "none", flexShrink: 0, borderRadius: 0, overflow: "hidden", background: "#fff" }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "3 / 4",
          borderRadius: 0,
          overflow: "hidden",
          background: "#EDE5DA",
          marginBottom: 14          
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 280px"
          style={{ objectFit: "cover"}}
        />
        {product.badge && (
          <span className="badge-sale" style={{ position: "absolute", top: 12, left: 12}}>
            {product.badge}
          </span>
        )}
      </div>
      <div>
        <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", fontWeight: 400, color: "#3B2F2F", lineHeight: 1.5, marginBottom: 6 }}>
          {product.name}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 500, color: "#3B2F2F" }}>
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice && (
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "#9A8A7A", textDecoration: "line-through" }}>
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
