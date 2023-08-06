import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Electro Emporium | Products Page',
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
