import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Twitter, MessageSquare, Users, Heart, Share, ExternalLink } from "lucide-react"

const CommunitySection = () => {
  const communityPosts = [
    {
      id: 1,
      author: "@CryptoKid",
      content: "GM everyone! Just learned about DeFi yield farming thanks to $GM education section 🌱",
      time: "2h ago",
      likes: 45
    },
    {
      id: 2,
      author: "@BlockchainMom",
      content: "Teaching my kids about crypto with $GM - they love the friendly explanations! 👨‍👩‍👧‍👦",
      time: "4h ago", 
      likes: 78
    },
    {
      id: 3,
      author: "@DeFiDad",
      content: "Every day has a GM! Spreading positivity and knowledge in Web3 💛",
      time: "6h ago",
      likes: 92
    }
  ]

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gm-yellow-light px-6 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 text-gm-yellow-dark" />
            <span className="font-meme text-gm-yellow-dark">Join Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bubble text-gm-black mb-4">
            👥 Community Section
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            "Every day has a GM" — Connect with our amazing community of learners, builders, and meme enthusiasts!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-meme text-gm-black text-center">
              🌐 Connect with the Community
            </h3>
            
            <div className="grid gap-6">
              <Card className="border-2 border-gm-yellow/20 hover:border-gm-yellow hover:shadow-gm transition-all duration-300 hover-bounce">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Twitter className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-meme text-lg text-gm-black">Follow us on X (Twitter)</h4>
                      <p className="text-muted-foreground">@GMonBNB</p>
                    </div>
                    <Button 
                      variant="gmOutline" 
                      size="sm"
                      onClick={() => window.open('https://x.com/GMonBNB', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gm-yellow/20 hover:border-gm-yellow hover:shadow-gm transition-all duration-300 hover-bounce">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-meme text-lg text-gm-black">Join our Telegram</h4>
                      <p className="text-muted-foreground">t.me/GMonBNB</p>
                    </div>
                    <Button 
                      variant="gmOutline" 
                      size="sm"
                      onClick={() => window.open('https://t.me/GMonBNB', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CommunitySection