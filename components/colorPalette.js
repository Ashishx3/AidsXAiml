
const colors = [
  { name: "Primary - Romantic Raspberry", hex: "#B93160" },
  { name: "Secondary - Lavender Blush", hex: "#FFF0F5" },
  { name: "Dark Base - Tech Midnight", hex: "#1B1B2F" },
  { name: "Light Base - Blush White", hex: "#FAF0F6" },
  { name: "Heading Text - Blushed Pink", hex: "#F7D6E0" },
  { name: "Body Text - Warm Grey", hex: "#E5E5E5" },
  { name: "Accent - Love Pulse Pink", hex: "#FF5C8D" },
  { name: "Button Hover - Deep Romance", hex: "#9E2A45" },
];

export default function ColorPalette() {
  return (
    <div className="min-h-screen bg-[#1B1B2F] text-white py-10 px-6 font-poppins">
      <h2 className="text-3xl font-semibold text-center text-[#F7D6E0] mb-10">
        🎨 Romantic Tech Color Palette
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {colors.map((color, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-xl bg-white text-[#1B1B2F]"
          >
            <div
              className="h-24"
              style={{ backgroundColor: color.hex }}
            />
            <div className="p-4">
              <p className="font-semibold">{color.name}</p>
              <p className="text-sm font-mono text-gray-600">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
