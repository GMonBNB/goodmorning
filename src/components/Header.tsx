import { Button } from "@/components/ui/button";
import logo from "@/assets/LOGO_01.png";
const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gm-black via-gm-yellow/10 to-gm-black backdrop-blur-xl border-b border-gm-yellow shadow-lg shadow-gm-yellow/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo with meme style */}
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-gm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gm-yellow/30 overflow-hidden">
              <img src={logo} alt="GM Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gm-yellow rounded-full animate-pulse"></div>
          </div>
          <span className="font-meme text-2xl bg-gradient-to-r from-gm-yellow to-gm-yellow-light bg-clip-text text-transparent">
            $GM
          </span>
          
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('education')} className="font-meme text-sm text-gm-yellow hover:text-gm-yellow-light transition-colors duration-200 hover:scale-105 transform">
            LEARN 📚
          </button>
          <button onClick={() => scrollToSection('how-to-buy')} className="font-meme text-sm text-gm-yellow hover:text-gm-yellow-light transition-colors duration-200 hover:scale-105 transform">
            HOW TO BUY 💰
          </button>
          <button onClick={() => scrollToSection('community')} className="font-meme text-sm text-gm-yellow hover:text-gm-yellow-light transition-colors duration-200 hover:scale-105 transform">
            COMMUNITY 🌟
          </button>
        </nav>

        {/* Buy Button with meme style */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block text-xs font-bold text-gm-yellow animate-pulse">
            WAGMI! 💎🙌
          </div>
          <Button 
            variant="gm" 
            size="lg" 
            className="font-meme text-lg px-8 py-3 shadow-lg shadow-gm-yellow/30 hover:shadow-xl hover:shadow-gm-yellow/40 transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://pancakeswap.finance/swap?outputCurrency=0x...', '_blank')}
          >
            BUY $GM 🔥
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;