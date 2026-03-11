import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Headphones, Apple, MapPin, CreditCard, RefreshCcw, Info, CheckCircle, ArrowRight, ArrowDown, DollarSign, Zap, Store } from 'lucide-react';

export default function AssessmentSite() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Brands & Products', icon: Headphones },
    { id: 'refunds', label: 'Refund Process', icon: RefreshCcw },
    { id: 'guide', label: 'Buying Guide', icon: MapPin },
    { id: 'verdict', label: 'Verdict & Payment', icon: CheckCircle },
    { id: 'references', label: 'References', icon: Info },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans pb-20">
      <AuroraBackground className="h-[40vh] md:h-[50vh] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 backdrop-blur-md text-sm font-medium tracking-wide border border-zinc-300 dark:border-zinc-700">
            Year 9 Commerce 2026 • Assessment Task 1
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
            Consumer Choice
          </h1>
          <p className="text-lg md:text-2xl font-light text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            A comparative analysis of premium noise-cancelling headphones.
          </p>
        </motion.div>
      </AuroraBackground>

      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
        <div className="flex overflow-x-auto bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-lg p-2 mb-8 border border-zinc-200 dark:border-zinc-800 hide-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-6 md:p-10 border border-zinc-200 dark:border-zinc-800 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && <OverviewTab key="overview" />}
            {activeTab === 'refunds' && <RefundsTab key="refunds" />}
            {activeTab === 'guide' && <GuideTab key="guide" />}
            {activeTab === 'verdict' && <VerdictTab key="verdict" />}
            {activeTab === 'references' && <ReferencesTab key="references" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const OverviewTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-10"
  >
    <div className="space-y-6">
      <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
        <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?auto=format&fit=crop&q=80&w=800" alt="Apple AirPods Max" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
          <Apple className="w-4 h-4" /> Apple
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">AirPods Max</h2>
        <p className="text-3xl font-light text-zinc-500 dark:text-zinc-400 mb-6">$899 AUD</p>
        <h3 className="text-lg font-semibold mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">Brand Outline</h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm leading-relaxed">
          Apple is a multinational technology company renowned for its premium, highly integrated consumer electronics. Key features include a closed "ecosystem" that encourages brand loyalty, minimalist design language, and a focus on seamless user experience across all devices.
        </p>
        <h3 className="text-lg font-semibold mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">Product Description</h3>
        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <strong>Function:</strong> High-fidelity over-ear wireless headphones with Active Noise Cancellation (ANC).</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <strong>Features:</strong> Spatial audio with dynamic head tracking, Transparency mode, 20-hour battery life.</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <strong>Design:</strong> Premium aluminum ear cups, knit-mesh canopy headband, Digital Crown for volume control.</li>
        </ul>
      </div>
    </div>

    <div className="space-y-6">
      <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
        <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800" alt="Sony WH-1000XM5" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
          <Headphones className="w-4 h-4" /> Sony
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">WH-1000XM5</h2>
        <p className="text-3xl font-light text-zinc-500 dark:text-zinc-400 mb-6">$549 AUD</p>
        <h3 className="text-lg font-semibold mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">Brand Outline</h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm leading-relaxed">
          Sony is a Japanese multinational conglomerate with a rich heritage in audio and visual electronics. Key features include industry-leading technological innovation (especially in audio engineering), a wide range of consumer electronics, and a focus on customizable user experiences.
        </p>
        <h3 className="text-lg font-semibold mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">Product Description</h3>
        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <strong>Function:</strong> Premium over-ear wireless headphones with industry-leading noise cancellation.</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <strong>Features:</strong> Auto NC Optimizer, Speak-to-Chat, 30-hour battery life, multipoint connection.</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"/> <strong>Design:</strong> Lightweight, noiseless design with soft fit leather and intuitive touch sensor controls.</li>
        </ul>
      </div>
    </div>
  </motion.div>
);

const Flowchart = ({ brand, icon: Icon, steps }: any) => (
  <div className="mb-12 last:mb-0">
    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
      <Icon className="w-6 h-6"/>
      {brand} Refund Process
    </h3>
    <div className="flex flex-col md:flex-row items-center justify-start gap-4">
      {steps.map((step: any, idx: number) => (
        <React.Fragment key={idx}>
          <div className="bg-zinc-50 dark:bg-zinc-800/50 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700 w-full md:w-56 text-center shadow-sm relative flex-1">
            <div className="font-bold text-sm mb-2 text-indigo-600 dark:text-indigo-400">{step.title}</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</div>
          </div>
          {idx < steps.length - 1 && (
            <>
              <ArrowRight className="hidden md:block text-zinc-300 dark:text-zinc-600 w-6 h-6 flex-shrink-0" />
              <ArrowDown className="block md:hidden text-zinc-300 dark:text-zinc-600 w-6 h-6 flex-shrink-0" />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const RefundsTab = () => {
  const appleSteps = [
    { title: "1. Initiate Return", desc: "Start the return process online or visit an Apple Store within 14 days of receiving the product." },
    { title: "2. Prepare Item", desc: "Ensure the AirPods Max are in original condition with all cords, adapters, and documentation." },
    { title: "3. Inspection", desc: "Apple staff inspect the item to ensure it meets return criteria and is not damaged." },
    { title: "4. Full Refund", desc: "Refund is processed immediately to the original payment method (may take a few days to clear)." }
  ];

  const sonySteps = [
    { title: "1. Check Retailer", desc: "Since Sony is often bought via retailers (e.g., JB Hi-Fi), check their specific 30-day return policy." },
    { title: "2. Provide Proof", desc: "Bring the WH-1000XM5 and the original purchase receipt to the store." },
    { title: "3. Assessment", desc: "Staff assess if the item is faulty (Consumer Guarantee) or if it's a 'change of mind' return." },
    { title: "4. Resolution", desc: "If faulty, receive a refund or replacement. Change of mind refunds depend on retailer discretion." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <h2 className="text-2xl font-bold mb-8">Refund & Return Policies</h2>
      <Flowchart brand="Apple" icon={Apple} steps={appleSteps} />
      <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 my-8"></div>
      <Flowchart brand="Sony (via Retailer)" icon={Headphones} steps={sonySteps} />
    </motion.div>
  );
};

const GuideTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-12"
  >
    <section>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Zap className="w-6 h-6 text-yellow-500" /> Factors Affecting Consumer Decisions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
            <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="text-lg font-bold mb-2">Price and Income</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            The $350 price difference between the two products is significant. A consumer's disposable income and budget will heavily influence their decision. Students or budget-conscious buyers are more likely to opt for the Sony headphones, while those with higher disposable income might justify the "Apple Tax" for premium materials.
          </p>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
            <RefreshCcw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-bold mb-2">Technological Ecosystem</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Consumers already invested in the Apple ecosystem (owning an iPhone, Mac, iPad) are strongly incentivized to choose AirPods Max due to seamless device switching and exclusive features like Spatial Audio. Conversely, Android or Windows users will lean towards Sony for better cross-platform compatibility and app support.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Store className="w-6 h-6 text-indigo-500" /> Purchasing Locations Comparison
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="py-4 px-4 font-bold text-zinc-900 dark:text-zinc-100">Location Type</th>
              <th className="py-4 px-4 font-bold text-zinc-900 dark:text-zinc-100">Examples</th>
              <th className="py-4 px-4 font-bold text-zinc-900 dark:text-zinc-100">Advantages</th>
              <th className="py-4 px-4 font-bold text-zinc-900 dark:text-zinc-100">Disadvantages</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="py-4 px-4 font-medium">Official Brand Stores</td>
              <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400">Apple Store, Sony Online</td>
              <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>Direct customer support & warranty</li>
                  <li>Guaranteed authenticity</li>
                  <li>Full range of colours/engraving</li>
                </ul>
              </td>
              <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>Items are rarely discounted</li>
                  <li>Strictly sold at RRP</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-4 font-medium">Electronics Retailers</td>
              <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400">JB Hi-Fi, Harvey Norman</td>
              <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>Frequent sales and discounts</li>
                  <li>Opportunity to price match</li>
                  <li>Can test both brands side-by-side</li>
                </ul>
              </td>
              <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>Return policies dictated by retailer</li>
                  <li>Staff may have divided brand knowledge</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </motion.div>
);

const VerdictTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="space-y-8"
  >
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-1">
      <div className="bg-white dark:bg-zinc-900 rounded-[22px] p-8 md:p-10 h-full">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-indigo-500" /> Final Recommendation
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">Product Preference: Sony WH-1000XM5</h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            After comparing both products, my preference is the <strong>Sony WH-1000XM5</strong>. While the Apple AirPods Max offer premium build quality and seamless ecosystem integration, the Sony headphones provide comparable (and in some areas, superior) Active Noise Cancellation and a significantly longer battery life (30 hours vs 20 hours). Most importantly, at $549 AUD compared to Apple's $899 AUD, the Sony headphones represent far better value for money, making them the more logical consumer choice.
          </p>
        </div>

        <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 my-8"></div>

        <div>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
            <CreditCard className="w-6 h-6 text-emerald-500" /> Preferred Payment Method: Debit Card
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            The best financial option for purchasing this product is using a <strong>Debit Card</strong>. By paying for the $549 headphones outright using accumulated savings, you avoid entering into debt. Unlike Credit Cards, a debit card does not accrue high-interest charges if a balance isn't paid off. Furthermore, avoiding "Buy Now, Pay Later" schemes (like Afterpay) eliminates the risk of late fees and encourages responsible saving habits, which is crucial for a Year 9 student managing their personal finances.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const ReferencesTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
  >
    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
      <Info className="w-6 h-6 text-blue-500" /> Reference List
    </h2>
    <ul className="space-y-4">
      <li className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
        <a href="https://www.apple.com/au/shop/help/returns_refund" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-2">
          Apple Standard Return Policy <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Information regarding the 14-day return period and conditions for Apple products.</p>
      </li>
      <li className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
        <a href="https://www.sony.com.au/microsite/warranty/" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-2">
          Sony Australia Warranty Information <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Details on consumer guarantees and warranty periods for Sony electronics.</p>
      </li>
      <li className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700">
        <a href="https://support.jbhifi.com.au/hc/en-au/articles/360053005194-Refunds-Warranties" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline flex items-center gap-2">
          JB Hi-Fi Refunds & Warranties <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Retailer-specific policies on change of mind and faulty product returns.</p>
      </li>
    </ul>
  </motion.div>
);
