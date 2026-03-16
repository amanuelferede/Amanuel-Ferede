export default function Footer() {
  return (
    <div className="w-full bg-sky-600 h-70 pb-4 text-white flex items-center justify-center">
      <div className="fle flex-col space-y-1.5">
        <p className="font-semibold text-center text-white mt-2">
          Copy rights {new Date().getFullYear()}
        </p>
        <p className="font-semibold text-center text-white mt-2">
          Amanuel Ferede CEO at spider technologies
        </p>
      </div>
    </div>
  );
}
