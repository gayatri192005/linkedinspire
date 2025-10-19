import { Check, Star } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function PricingSection() {
  const features = [
    'Lifetime access on a one-time payment',
    'Watch anytime, anywhere as per your convenience',
    '100% Refund Policy - Cancel anytime within 14 days',
    'Free upgrades - Gain all future updates and additions',
    'Learn with AI Videos',
    'Live Group Q&A Sessions',
    'Virtual Course Community',
    'Free Access to Upgrades',
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#F8FBFF] to-[#FDFAF5] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0A66C2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#DCE6F1]/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
            Our Promise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] mx-auto rounded-full shadow-lg shadow-[#0A66C2]/30"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Promise Badge - Glossy */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Animated glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2] to-[#004182] rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="relative w-80 h-80 backdrop-blur-xl bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#0A66C2]/40 transform rotate-3 hover:rotate-6 transition-transform duration-500 border border-white/20 overflow-hidden">
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 transform -rotate-3 shadow-xl border border-white/50 relative overflow-hidden">
                  {/* Inner glossy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="text-6xl mb-4">👍</div>
                    <h3 className="text-2xl font-bold text-[#000000] mb-4">OUR PROMISE</h3>
                    <div className="space-y-2 text-left">
                      <p className="text-[#0A66C2] font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#0A66C2] flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </span>
                        No-nonsense Approach
                      </p>
                      <p className="text-[#0A66C2] font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#0A66C2] flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </span>
                        Practical Delivery
                      </p>
                      <p className="text-[#0A66C2] font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#0A66C2] flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </span>
                        Risk-free Investment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h3 className="text-3xl font-bold text-[#000000] mb-8">What You Get:</h3>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 backdrop-blur-xl bg-white/60 rounded-xl p-3 border border-white/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent pointer-events-none"></div>
                  <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mt-0.5 shadow-md relative z-10">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-[#56687A] relative z-10">{feature}</span>
                </div>
              ))}
            </div>

            {/* Pricing Card - Glossy */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-[#DCE6F1]/60 via-white/50 to-[#0A66C2]/20 rounded-3xl p-8 border border-white/40 shadow-2xl relative overflow-hidden">
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0A66C2]/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[#56687A] mb-2 font-medium">Starting From</p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#0A66C2] to-[#004182] bg-clip-text text-transparent">₹1,799</span>
                      <span className="text-xl text-[#56687A] line-through">₹4,999</span>
                    </div>
                    <div className="inline-flex items-center gap-2 mt-3 px-4 py-2 backdrop-blur-xl bg-gradient-to-r from-emerald-100/80 to-green-50/60 rounded-full border border-white/40 shadow-md">
                      <span className="text-sm text-emerald-700 font-bold">Save 64% • Limited Time Offer</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center backdrop-blur-xl bg-white/60 rounded-2xl p-4 border border-white/40 shadow-lg">
                    <Star className="w-12 h-12 text-amber-400 fill-amber-400 drop-shadow-lg" />
                    <span className="text-sm font-semibold text-[#000000] mt-1">Best Value</span>
                  </div>
                </div>

                <Button variant="primary" size="lg" className="w-full text-xl py-6 mb-4 relative overflow-hidden group">
                  <span className="relative z-10">Enroll Now</span>
                </Button>
                
                <div className="flex items-center justify-center gap-4 text-sm text-[#56687A] backdrop-blur-xl bg-white/60 rounded-xl py-3 px-4 border border-white/40">
                  <span className="flex items-center gap-1">
                    <span className="text-lg">🔒</span>
                    Secure Payment
                  </span>
                  <span className="w-1 h-1 bg-[#56687A] rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <span className="text-lg">💯</span>
                    100% Money-Back Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits - Glossy Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-50/80 via-white/70 to-green-50/60 rounded-3xl p-8 text-center border border-white/40 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 backdrop-blur-xl bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                💰
              </div>
              <h4 className="font-bold text-[#000000] mb-2 text-lg">You Pay Only Once</h4>
              <p className="text-[#56687A] text-sm leading-relaxed">
                Get lifetime access on a one-time payment and watch anytime, anywhere
              </p>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-gradient-to-br from-purple-50/80 via-white/70 to-violet-50/60 rounded-3xl p-8 text-center border border-white/40 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 backdrop-blur-xl bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🔄
              </div>
              <h4 className="font-bold text-[#000000] mb-2 text-lg">100% Refund Policy</h4>
              <p className="text-[#56687A] text-sm leading-relaxed">
                Cancel anytime within 14 days of purchase and get a full refund
              </p>
            </div>
          </div>
          
          <div className="backdrop-blur-xl bg-gradient-to-br from-orange-50/80 via-white/70 to-amber-50/60 rounded-3xl p-8 text-center border border-white/40 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-4 backdrop-blur-xl bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🎁
              </div>
              <h4 className="font-bold text-[#000000] mb-2 text-lg">Free Upgrades</h4>
              <p className="text-[#56687A] text-sm leading-relaxed">
                Gain all future updates, additions and changes made to the course
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
