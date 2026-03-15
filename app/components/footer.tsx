export default function Footer() {
  return (
    <div className="w-full bg-sky-500 h-70 pb-4 text-white flex items-center justify-center">
      <p className="font-semibold text-center text-white mt-2">
        Copy rights {new Date().getFullYear()}
      </p>
    </div>
  );
}
