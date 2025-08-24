export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r flex items-center justify-center from-[#0F0F1E] via-[#1B1B2F] to-[#0c0c14] text-white">
      {children}
    </div>
  );
}
