# $GM - Where Memes Meet Meaning

> A Web3 educational platform that makes cryptocurrency and blockchain learning accessible, fun, and engaging for everyone through memes, AI-powered interactions, and bite-sized educational content.

## About $GM

$GM is more than just a greeting — it's a positive spark that connects, educates, and builds community in the Web3 space. Our platform blends memes, education, and AI into a friendly experience designed for all ages, making complex blockchain concepts simple and enjoyable to learn.

**Token**: BEP-20 on BNB Chain
**Mission**: Democratizing Web3 education through accessible, meme-driven content
**Community**: Building bridges between traditional learning and decentralized technology

## Key Features

### Educational Hub

- **Daily Learning Tips**: Short, easy-to-understand Web3/BNB Chain lessons
- **Beginner-Friendly Content**: Perfect for newcomers to cryptocurrency
- **Kid-Safe Learning**: Age-appropriate blockchain education
- **Visual Learning**: Image-based tips and explanations

### AI-Powered Interaction

- **GM Chatbot**: Interactive AI assistant for real-time learning
- **Personalized Guidance**: Tailored responses based on user level
- **24/7 Support**: Always available for questions and guidance

### Global Community

- **Multilingual Greetings**: Supporting international users
- **Community Building**: Connect with fellow Web3 learners
- **Social Integration**: Share knowledge and experiences

### Token Integration

- **$GM Token**: BEP-20 standard on BNB Chain
- **Easy Purchase Guide**: Step-by-step buying instructions
- **PancakeSwap Integration**: Seamless token acquisition

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom GM theme
- **UI Components**: shadcn/ui with Radix UI primitives
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Icons**: Lucide React
- **Animations**: Custom CSS animations and Tailwind animate
- **Chatbot**: Elfsight AI integration
- **Deployment**: Optimized for modern web deployment

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd goodmorning
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Main landing section
│   ├── EducationSection.tsx # Daily tips section
│   ├── HowToBuySection.tsx  # Token purchase guide
│   ├── CommunitySection.tsx # Community features
│   └── Footer.tsx      # Site footer
├── pages/              # Route components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── assets/             # Static assets (images, icons)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## Design System

The GM project uses a custom design system built on Tailwind CSS:

- **Colors**: Custom GM yellow palette with dark/light variants
- **Typography**: Bubble fonts for headings, meme fonts for special text
- **Components**: Consistent button styles, cards, and layouts
- **Animations**: Smooth scrolling, glowing effects, and greeting rotations

## Deployment Options

### Option 1: Lovable Platform
1. Visit the [Lovable Project](https://lovable.dev/projects/19e18cb6-9bf3-4a3e-bce9-7851e1f9addb)
2. Click Share → Publish
3. Your site will be live instantly

### Option 2: Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred hosting service
3. Configure your domain (if using custom domain)

### Option 3: GitHub Pages / Vercel / Netlify
1. Connect your repository to your preferred platform
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Code formatting (recommended)
- **Component Structure**: Functional components with hooks

## Contributing

We welcome contributions to make Web3 education more accessible! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and structure
- Add educational content that's beginner-friendly
- Test your changes thoroughly
- Update documentation as needed

## Educational Content

Our educational approach focuses on:

- **Simplicity**: Complex concepts explained in simple terms
- **Visual Learning**: Images and diagrams to support text
- **Progressive Learning**: Building from basic to advanced concepts
- **Practical Application**: Real-world examples and use cases

## Links & Resources

- **Website**: [GM Community](https://gmgm.community)
- **Token**: $GM on BNB Chain (BEP-20)
- **DEX**: Available on PancakeSwap
- **Community**: Join our growing Web3 education community

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with ❤️ by the GM Community
- Powered by BNB Chain ecosystem
- Educational content inspired by Web3 builders worldwide
- Special thanks to all contributors making Web3 education accessible

---

**GM! ☀️** Start your Web3 learning journey today!
