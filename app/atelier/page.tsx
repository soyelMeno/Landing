import { getAllProducts } from "../../data/products";
import AtelierHero from "../../components/atelier/AtelierHero";
import AtelierCollection from "../../components/atelier/AtelierCollection";

export const metadata = {
  title: "MC Atelier — MC Auto Sound Design",
  description:
    "Piezas diseñadas y fabricadas por MC Auto Sound. Una colección de manufactura propietaria para vehículos de alto calibre.",
};

export default function AtelierPage() {
  const products = getAllProducts();

  return (
    <main className="w-full overflow-x-hidden bg-background">
      <AtelierHero />
      <AtelierCollection products={products} />
    </main>
  );
}
