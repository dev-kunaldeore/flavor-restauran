# Flavor Restaurant - Modern Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS. Features include menu browsing, advanced filtering, favorites, theme toggle, and more.

## 🚀 Features

- **Modern UI/UX** - Beautiful, responsive design with smooth animations
- **Dark/Light Theme** - Toggle between themes (default: dark)
- **Menu Section** - Browse menu items with categories
- **Advanced Filtering** - Filter by price range and dietary restrictions
- **Search Functionality** - Real-time search across menu items
- **Favorites/Wishlist** - Save your favorite items
- **Product Details** - Detailed modal views for menu items
- **Image Lightbox** - Full-screen image gallery
- **Loading States** - Skeleton loaders for better UX
- **Error Boundaries** - Graceful error handling

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation
- **next-themes** - Theme management
- **Lucide React** - Icons

## 📦 Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd KAD

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── ...          # Feature components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── assets/          # Images and static assets
└── index.css        # Global styles
```

## 🎨 Key Components

- **Navbar** - Navigation with theme toggle
- **HeroSection** - Hero banner with animations
- **MenuSection** - Menu browsing with filters
- **LocationSection** - Restaurant locations
- **Footer** - Footer with links and payment methods

## 🌟 Features in Detail

### Menu Section
- Category filtering
- Price range slider
- Dietary restrictions filter (vegetarian, vegan, gluten-free)
- Real-time search
- Favorites functionality
- Product detail modals
- Image lightbox

### Theme System
- Dark mode (default)
- Light mode
- Theme toggle in navbar
- Persistent theme preference

## 📝 License

This project is private and proprietary.

## 👨‍💻 Development

The project uses:
- ESLint for code linting
- TypeScript for type checking
- Vite for fast HMR (Hot Module Replacement)

## 🚀 Deployment

Build the project and deploy the `dist` folder to your hosting provider.

```bash
npm run build
```

The built files will be in the `dist` directory.
