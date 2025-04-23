import {
  IconCircuitCellPlus,
  IconCloud,
  IconDna,
  IconGitBranch,
  IconLock,
  IconMeteor,
  IconMicrophone,
  IconMusic,
  IconPlugConnected,
  IconRefresh,
  IconWorld,
  IconBrandInstagram,
  IconHeart,
  IconMessage,
  IconCross,
  IconFlame,
  IconMoodHappy,
  IconPlant,
  IconArrowUp,
  IconRuler,
  IconGrowth,
  IconSend,
  IconHierarchy,
  IconBabyCarriage,
  IconColorPicker,
  IconMoodSmile,
  IconLetterSpacing,
  IconGhost,
  IconReceipt,
  IconLayoutGrid,
  IconShield,
  IconBrain,
  IconGitMerge,
  IconBooks,
  IconTerminal2,
  IconSearch,
  IconCopy,
  IconClock,
  IconChartHistogram,
  IconRocket,
  IconCoin,
  IconStars,
  IconChartArcs,
  IconHeadset,
  IconHourglass,
  IconCrystalBall,
  IconYinYang,
  IconPencil,
  IconLamp,
  IconHandStop,
  IconCoffee,
  IconLanguage,
} from "@tabler/icons-react";

export const services = {
  Digital: [
    {
      title: "Cloud-Native Infrastructure",
      description:
        "Deploy globally in seconds with auto-scaling that laughs at traffic spikes.",
      icon: <IconCloud />,
    },
    {
      title: "API Ecosystem",
      description:
        "Connect to 500+ APIs out-of-the-box - because no app is an island.",
      icon: <IconPlugConnected />,
    },
    {
      title: "Zero-Downtime Updates",
      description:
        "Update your stack while users keep working - magic, but real.",
      icon: <IconRefresh />,
    },
    {
      title: "Edge Computing",
      description:
        "Serve content faster than your users can blink (tested empirically).",
      icon: <IconCircuitCellPlus />,
    },
    {
      title: "Data Fort Knox",
      description: "Encryption so strong, even we can't peek at your data.",
      icon: <IconLock />,
    },
    {
      title: "Multi-Region Magic",
      description:
        "Deploy identical environments across continents with one click.",
      icon: <IconWorld />,
    },
    {
      title: "DevOps Orchestra",
      description:
        "CI/CD pipelines that compose themselves like a digital symphony.",
      icon: <IconMusic />,
    },
    {
      title: "Serverless Sorcery",
      description: "Pay only when your code runs, not when it naps.",
      icon: <IconMeteor />,
    },
  ],

  Branding: [
    {
      title: "Brand DNA Analyzer",
      description:
        "AI that critiques your branding harder than a design school professor.",
      icon: <IconDna />,
    },
    {
      title: "Logo Version Control",
      description:
        "Track logo changes like code commits - revert to 2012 hipster versions anytime.",
      icon: <IconGitBranch />,
    },
    {
      title: "Voice & Tone Guardian",
      description:
        "Ensure your brand never accidentally says 'yeet' in a press release.",
      icon: <IconMicrophone />,
    },
    {
      title: "Social Media Cloner",
      description:
        "One-click brand consistency across 20+ platforms (even Myspace, if you insist).",
      icon: <IconBrandInstagram />,
    },
    {
      title: "Pantone Predictor",
      description:
        "Next year's color trends revealed before Pantone's coffee cools.",
      icon: <IconColorPicker />,
    },
    {
      title: "Meme-to-Brand Translator",
      description:
        "Convert viral memes into brand-safe campaigns automatically.",
      icon: <IconMoodSmile />,
    },
    {
      title: "Font Marriage Counselor",
      description:
        "Helps Comic Sans and Helvetica resolve their differences amicably.",
      icon: <IconLetterSpacing />,
    },
    {
      title: "Brand Crisis Simulator",
      description:
        "Stress-test your branding against imaginary Twitter storms.",
      icon: <IconGrowth />,
    },
  ],

  Design: [
    {
      title: "Pixel Police",
      description:
        "Auto-corrects designers who still think 1px offsets are acceptable.",
      icon: <IconRuler />,
    },
    {
      title: "Accessibility Enforcer",
      description:
        "Makes your designs ADA-compliant before you finish your coffee.",
      icon: <IconGrowth />,
    },
    {
      title: "UI Necromancer",
      description: "Resurrect dead Figma files into living React components.",
      icon: <IconGhost />,
    },
    {
      title: "Design Debt Collector",
      description:
        "Automatically invoices for every inconsistent button in your system.",
      icon: <IconReceipt />,
    },
    {
      title: "Grid Psychic",
      description:
        "Predicts layout breakpoints before you resize the viewport.",
      icon: <IconLayoutGrid />,
    },
    {
      title: "Animation Exorcist",
      description: "Removes unnecessary ",
      icon: <IconHierarchy />,
    },
    {
      title: "Prototype Teleporter",
      description: "Instantly share clickable prototypes across time zones.",
      icon: <IconSend />,
    },
    {
      title: "Design System Midwife",
      description: "Helps birth new components without the messy paperwork.",
      icon: <IconBabyCarriage />,
    },
  ],

  Development: [
    {
      title: "Code Whisperer",
      description:
        "AI pair programmer that actually understands your spaghetti code.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Dependency Bouncer",
      description:
        "Keeps rogue npm packages from crashing your production party.",
      icon: <IconShield />,
    },
    {
      title: "Tech Debt Therapist",
      description: "Helps you talk through that jQuery dependency from 2015.",
      icon: <IconBrain />,
    },
    {
      title: "Merge Conflict Referee",
      description: "Settles Git disputes with the wisdom of Solomon.",
      icon: <IconGitMerge />,
    },
    {
      title: "Documentation Gardener",
      description: "Auto-grows API docs that stay fresher than your herbs.",
      icon: <IconBooks />,
    },
    {
      title: "Error Message Poet",
      description: "Turns ",
      icon: <IconMessage />,
    },
    {
      title: "Benchmark Bullhorn",
      description:
        "Shouts performance metrics louder than your product manager.",
      icon: <IconChartHistogram />,
    },
    {
      title: "Stack Overflow Butler",
      description: "Answers questions before you finish typing them.",
      icon: <IconSearch />,
    },
  ],

  Marketing: [
    {
      title: "Campaign Cloner",
      description: "A/B test 50 variations while you take a lunch break.",
      icon: <IconCopy />,
    },
    {
      title: "SEO Time Machine",
      description:
        "Optimize content for search algorithms that don't exist yet.",
      icon: <IconClock />,
    },
    {
      title: "Viral Velocity",
      description:
        "Predict which content will trend before your intern hits 'post'.",
      icon: <IconRocket />,
    },
    {
      title: "ROI Alchemist",
      description: "Turn mediocre campaigns into lead-generating gold.",
      icon: <IconCoin />,
    },
    {
      title: "Hashtag Horoscope",
      description: "Daily trending tags delivered like cosmic wisdom.",
      icon: <IconStars />,
    },
    {
      title: "Influencer Matchmaker",
      description:
        "Find creators who'll rep your brand for exposure (and free merch).",
      icon: <IconHeart />,
    },
    {
      title: "Analytics Soothsayer",
      description:
        "See next quarter's metrics today - crystal ball not included.",
      icon: <IconChartArcs />,
    },
    {
      title: "Spam Shield",
      description: "Keep campaigns out of junk folders and dignity intact.",
      icon: <IconShield />,
    },
  ],

  Support: [
    {
      title: "24/7 Truth Serum",
      description: "Support bots that can't lie about outage durations.",
      icon: <IconHeadset />,
    },
    {
      title: "Ticket Time Turner",
      description: "Solve issues before users realize they have them.",
      icon: <IconHourglass />,
    },
    {
      title: "Rage Detoxifier",
      description:
        "Auto-calm frustrated users with cat GIFs and discount codes.",
      icon: <IconMoodHappy />,
    },
    {
      title: "Knowledge Base Gardener",
      description: "Articles that grow answers like weeds in fertile soil.",
      icon: <IconPlant />,
    },
    {
      title: "Escalation Preventer",
      description: "Stop issues from reaching your CEO's inbox. Guaranteed.",
      icon: <IconArrowUp />,
    },
    {
      title: "SLA Ninja",
      description: "Beat response time guarantees without breaking a sweat.",
      icon: <IconClock />,
    },
    {
      title: "User Feedback Forge",
      description: "Melt complaints into feature gold.",
      icon: <IconFlame />,
    },
    {
      title: "Churn Exorcist",
      description: "Banish cancellation requests with renewal spells.",
      icon: <IconCross />,
    },
  ],

  Consulting: [
    {
      title: "Roadmap Medium",
      description: "Channel your product's future through mystical alignment.",
      icon: <IconCrystalBall />,
    },
    {
      title: "Tech Debt Exorcism",
      description: "Purge legacy code demons from your codebase.",
      icon: <IconGhost />,
    },
    {
      title: "Architecture Feng Shui",
      description: "Balance your microservices for optimal developer chi.",
      icon: <IconYinYang />,
    },
    {
      title: "Buzzword Translator",
      description: "Convert “blockchain-enabled AI” to actual product specs.",
      icon: <IconLanguage />,
    },
    {
      title: "Meeting Alchemist",
      description: "Transform circular debates into actionable gold.",
      icon: <IconHandStop />,
    },
    {
      title: "KPI Illuminator",
      description: "Find metrics that matter in your data haystack.",
      icon: <IconLamp />,
    },
    {
      title: "Process Ghostwriter",
      description: "Create workflows so smooth they feel fictional.",
      icon: <IconPencil />,
    },
    {
      title: "Exit Strategy Oracle",
      description: "Plan acquisitions before your startup finishes its latte.",
      icon: <IconCoffee />,
    },
  ],
};
