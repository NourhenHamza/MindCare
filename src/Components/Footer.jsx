/* Footer.jsx */
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-8 text-center">
        <p className="text-lg font-semibold">🎨 Art Therapy Hub</p>
        <p className="text-sm opacity-75">Healing through creativity and self-expression.</p>
        
        <div className="flex justify-center space-x-6 mt-3">
          <a href="#" className="hover:text-gray-400 text-xl">🌍</a>
          <a href="#" className="hover:text-gray-400 text-xl">📷</a>
          <a href="#" className="hover:text-gray-400 text-xl">🐦</a>
          <a href="#" className="hover:text-gray-400 text-xl">📘</a>
        </div>
  
        <p className="text-xs opacity-60 mt-4">© {new Date().getFullYear()} Art Therapy Hub. All rights reserved.</p>
      </footer>
    );
  }
  