import tip3Image from "@/assets/tip01.jpeg"
import tip2Image from "@/assets/tip02.jpeg"
import tip1Image from "@/assets/tip03.jpeg"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { GraduationCap } from "lucide-react"

const EducationSection = () => {
  const dailyTips = [
    {
      id: 1,
      title: "What's on-chain communication?",
      content: "Builders Talk dApp lets you chat wallet-to-wallet - all messages stored directly on @BNBCHAIN. ⚡️ Simple. Fun. On-chain.",
      image: tip1Image
    },
    {
      id: 2,
      title: "How to use Web3 messaging dApp \"Builders Talk\"?",
      content: "Simply connect your wallet and enjoy decentralised communication, no registration or KYC. ✨ Messages are stored on-chain, fully transparent & secure.",
      image: tip2Image
    },
    {
      id: 3,
      title: "What BEP-20 on BNB Chain means? ",
      content: "It's built on BNB Chain. It follows the BEP-20 standard, which defines how tokens are interacted with in smart contracts like $GM and $BBOB @_BabyBuilder. Keep learning, keep building. GM ☀️",
      image: tip3Image
    }
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gm-yellow-light px-6 py-2 rounded-full mb-6">
            <GraduationCap className="w-5 h-5 text-gm-yellow-dark" />
            <span className="font-meme text-gm-yellow-dark">Daily Learning</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bubble text-gm-black mb-4">
            📚 Edu Tips Box
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Daily Morning Tips — short, easy-to-understand Web3/BNB lessons, suitable for beginners and kids.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {dailyTips.map((tip) => (
            <Card key={tip.id} className="border border-border bg-card text-card-foreground shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </AspectRatio>
                </div>
                <h3 className="font-meme text-lg text-foreground mb-3">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tip.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default EducationSection
