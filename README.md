# Safe Home Landing Page

A modern, responsive React landing page for Safe Home smart security services, built to match the design shown in the reference image.

## Features

- **Modern Design**: Clean, minimalist design with a light color palette
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Hover effects and smooth transitions
- **SVG Icons**: Custom SVG icons for features and steps
- **Gradient Backgrounds**: Beautiful gradient backgrounds for hero and testimonials sections

## Sections

1. **Header**: Navigation with logo and menu items
2. **Hero**: Main banner with call-to-action and illustration
3. **Features**: Six key features with icons and descriptions
4. **Steps**: Three-step process with yellow accent icons
5. **Testimonials**: Customer testimonials with avatars
6. **Footer**: Comprehensive footer with links and contact information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── Features.js & Features.css
│   ├── Steps.js & Steps.css
│   ├── Testimonials.js & Testimonials.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js
└── index.css
```

## Customization

- **Colors**: Modify the CSS variables in each component's CSS file
- **Content**: Update text content in the respective component files
- **Icons**: Replace SVG icons with your preferred icon library
- **Images**: Add actual images to replace the SVG illustrations

## Technologies Used

- React 18
- CSS3 with Flexbox and Grid
- SVG for icons and illustrations
- Responsive design principles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
