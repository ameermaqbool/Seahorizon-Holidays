import { notFound } from "next/navigation";
import { islands } from "@/lib/data/islands";

interface IslandPageProps {
  params: {
    slug: string;
  };
}

// Required for static export
export function generateStaticParams() {
  return islands.map((island) => ({
    slug: island.slug,
  }));
}

export default function IslandPage({ params }: IslandPageProps) {
  const island = islands.find((i) => i.slug === params.slug);

  if (!island) {
    notFound();
  }

  return (
    <main className="pt-24 px-8 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
        {island.name}
      </h1>
      <p className="text-lg text-gray-600 mb-8">{island.description}</p>

      <img
        src={island.image}
        alt={island.name}
        className="w-full h-80 object-cover rounded-lg mb-8 shadow-md"
      />

      <h2 className="text-2xl font-semibold mb-2">Highlights</h2>
      <ul className="list-disc ml-6 mb-8 text-gray-700">
        {island.highlights.map((h, idx) => (
          <li key={idx}>{h}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">About {island.name}</h2>
      <p className="mb-8 text-gray-700 leading-relaxed">
        {island.detailedDescription}
      </p>

      <h2 className="text-2xl font-semibold mb-2">Activities</h2>
      <ul className="list-disc ml-6 mb-8 text-gray-700">
        {island.activities.map((a, idx) => (
          <li key={idx}>{a}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Best Time to Visit</h2>
      <p className="mb-8 text-gray-700">{island.bestTimeToVisit}</p>

      <h2 className="text-2xl font-semibold mb-2">How to Reach</h2>
      <p className="mb-8 text-gray-700">{island.howToReach}</p>

      <h2 className="text-2xl font-semibold mb-2">Accommodation Options</h2>
      <ul className="list-disc ml-6 mb-8 text-gray-700">
        {island.accommodation.map((acc, idx) => (
          <li key={idx}>{acc}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Local Culture</h2>
      <p className="mb-8 text-gray-700">{island.localCulture}</p>

      <h2 className="text-2xl font-semibold mb-2">Important Notes</h2>
      <ul className="list-disc ml-6 mb-8 text-gray-700">
        {island.importantNotes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </main>
  );
}
