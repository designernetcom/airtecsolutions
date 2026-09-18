import Image from "next/image";

export default function BrandLogo({ footer = false }: { footer?: boolean }) {
  return <Image className={`brand-image ${footer ? "brand-image-footer" : ""}`} src="/logo-1.png" alt="Airtec Solutions" width={2001} height={777} priority />;
}
