import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ExternalLink, Wallet, ArrowRight, DollarSign } from "lucide-react"

const HowToBuySection = () => {
  const steps = [
    {
      step: 1,
      title: "Get a Wallet 👛",
      description: "Download MetaMask or Trust Wallet - your crypto home!",
      icon: <Wallet className="w-8 h-8" />
    },
    {
      step: 2,
      title: "Add BNB 💰",
      description: "Buy BNB on Binance and send it to your wallet.",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      step: 3,
      title: "Visit PancakeSwap 🥞",
      description: "Connect your wallet and swap BNB for $GM tokens!",
      icon: <ArrowRight className="w-8 h-8" />
    }
  ]

  return (
    <section id="how-to-buy" className="py-20 bg-gradient-to-br from-gm-yellow-light/30 via-background to-gm-yellow-light/30">
      <div className="container mx-auto px-4">

        <div className="text-center space-y-8">
          <Card className="inline-block border-4 border-gm-yellow bg-gradient-gm p-8 max-w-2xl">
            <h3 className="font-bubble text-3xl text-gm-black mb-4">
              🥞 Ready to Buy $GM?
            </h3>
            <p className="text-gm-black mb-6 text-lg">
              Click the button below to go to PancakeSwap and swap your BNB for $GM tokens!
            </p>
            <Button 
              variant="gmOutline" 
              size="lg"
              className="bg-white hover:bg-gm-black hover:text-white text-xl px-8 py-6"
              onClick={() => window.open('https://pancakeswap.finance/swap?outputCurrency=0x97d81fC125d414f8d70bedb47d8E7F7256224444', '_blank')}
            >
              <ExternalLink className="w-6 h-6" />
              Buy on PancakeSwap
            </Button>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              ⚠️ Always do your own research and never invest more than you can afford to lose. 
              Crypto investments are risky but can be rewarding!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToBuySection