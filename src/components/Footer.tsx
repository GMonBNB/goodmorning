import { Button } from "@/components/ui/button"
import { Heart, Twitter, MessageSquare, Github } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gm-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-gm flex items-center justify-center font-bubble text-xl text-gm-black">
                GM
              </div>
              <span className="font-meme text-2xl text-gm-yellow">$GM</span>
            </div>
            <p className="text-white/70">
              Where Memes Meet Meaning - Building a positive Web3 community for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-meme text-gm-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-gm-yellow transition-colors">Home</a></li>
              <li><a href="#education" className="text-white/70 hover:text-gm-yellow transition-colors">Learn</a></li>
              <li><a href="#how-to-buy" className="text-white/70 hover:text-gm-yellow transition-colors">How to Buy</a></li>
              <li><a href="#community" className="text-white/70 hover:text-gm-yellow transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-meme text-gm-yellow">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-gm-yellow transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-white/70 hover:text-gm-yellow transition-colors">Tokenomics</a></li>
              <li><a href="#" className="text-white/70 hover:text-gm-yellow transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-white/70 hover:text-gm-yellow transition-colors">Education Hub</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-meme text-gm-yellow">Follow Us</h4>
            <div className="flex gap-3">
              <Button 
                variant="gmGhost" 
                size="sm" 
                className="text-white hover:text-gm-yellow"
                onClick={() => window.open('https://x.com/GMonBNB', '_blank')}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                variant="gmGhost" 
                size="sm" 
                className="text-white hover:text-gm-yellow"
                onClick={() => window.open('https://t.me/GMonBNB', '_blank')}
              >
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Button variant="gmGhost" size="sm" className="text-white hover:text-gm-yellow">
                <Github className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-white/50">
              Join our community and spread the GM energy! 🌞
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/50 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-gm-yellow" /> by the $GM community
          </p>
          <p className="text-xs text-white/30 mt-2">
            © 2024 $GM. All rights reserved. DYOR - Do Your Own Research.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer