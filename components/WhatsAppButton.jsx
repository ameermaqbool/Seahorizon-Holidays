export default function WhatsAppButton({ label = "WhatsApp", message }) {
  const number = "918075301729"; // your WhatsApp number in international format
  const text = encodeURIComponent(
    message ?? "Hi Sea Horizon! I want to plan a Lakshadweep trip."
  );
  const url = `https://wa.me/${number}?text=${text}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-xl px-4 py-2 bg-green-500 text-white font-medium shadow hover:opacity-90"
    >
      {label}
    </a>
  );
}
