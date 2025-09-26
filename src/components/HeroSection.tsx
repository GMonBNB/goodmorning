import gmCharacter from "@/assets/LOGO_01.png"
import { Button } from "@/components/ui/button"
import { MessageCircle, ShoppingCart } from "lucide-react"

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const openChat = () => {
    // Try to find and click the Elfsight chatbot widget button
    const chatWidget = document.querySelector('.elfsight-app-3983bae8-17c2-4cfb-8412-9cd648fda7ef') as HTMLElement;

    if (chatWidget) {
      // Look for clickable elements within the widget
      const clickableElements = chatWidget.querySelectorAll('button, [role="button"], .chat-trigger, [data-trigger]');

      if (clickableElements.length > 0) {
        (clickableElements[0] as HTMLElement).click();
      } else {
        // Fallback: scroll to widget and try to trigger it with a delay
        chatWidget.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const triggers = document.querySelectorAll('[class*="chat"], [class*="trigger"], [class*="open"]');
          if (triggers.length > 0) {
            (triggers[0] as HTMLElement).click();
          }
        }, 500);
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gm-yellow-light via-background to-gm-yellow-light pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bubble text-gm-black">
                🌞 Welcome to{" "}
                <span className="text-gm-yellow-dark">$GM</span>
              </h1>
              
              {/* International Greetings with Animation */}
              <div className="relative h-12 overflow-hidden">
                <div className="animate-scroll-greetings">
                  <div className="flex flex-col space-y-2 text-lg sm:text-xl font-medium text-gm-yellow-dark">
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🌅</span> GM
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇪🇸</span> Buenos días
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇫🇷</span> Bonjour
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇨🇳</span> 早上好
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇰🇷</span> 좋은 아침
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇯🇵</span> おはよう
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇸🇦</span> صباح الخير
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇹🇷</span> Günaydın
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇻🇳</span> Chào buổi sáng
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇷🇺</span> Доброе утро
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇸🇮</span> Dobro jutro
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <span>🇺🇿</span> Xayrli tong
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-meme text-gm-yellow-dark">
                "GM — Where Memes Meet Meaning"
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
                Every morning is more than just a greeting — it's a positive spark to connect, learn, and build together.
                $GM blends memes, education, and AI into a friendly experience for all ages.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="gm"
                size="lg"
                onClick={openChat}
                className="text-xl px-8 py-6 animate-glow"
              >
                <MessageCircle className="w-6 h-6" />
                Talk to GM
              </Button>
              <Button
                variant="gmOutline"
                size="lg"
                onClick={() => scrollToSection('how-to-buy')}
                className="text-xl px-8 py-6"
              >
                <ShoppingCart className="w-6 h-6" />
                How to Buy
              </Button>
            </div>
          </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gm-yellow-dark shadow-2xl">
                  <img
                    src={gmCharacter}
                    alt="GM Character - A friendly sun mascot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-gm-yellow text-gm-black px-4 py-2 rounded-full font-meme text-lg animate-pulse">
                  GM! ☀️
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
