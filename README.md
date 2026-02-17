                                       Component Library

A reusable React component library built with TypeScript and Vite, demonstrating type-safe, flexible, and composable UI components.

Setup:

# Clone the repository
git clone https://github.com/jayanthibs/component-library-lab-9.1.git
cd component-library-lab-9.1/component-library

# Install Dependencies
npm install

# Run development server
npm run dev

Components:
1. AlertBox
Displays a styled alert with optional close button and nested content.
2. UserProfileCard
Displays user information with optional sections.
3. ProductDisplay
Shows product information with optional description, stock status, add-to-cart button, and children.


Reflections:

How did you handle optional props in your components?

Optional props are props we don’t have to provide. In the code, we check if they exist before showing something, like {onClose && <button onClick={onClose}>×</button>}. This way, the component works safely whether or not the optional props are given.

What considerations did you make when designing the component interfaces?

Required props are for essential data, and optional props are for extra features. TypeScript types ensure correct values, and optional props are rendered only when provided. This makes the components easy to use, safe, and reusable.

How did you ensure type safety across your components?

Type safety was ensured by using TypeScript interfaces and types, marking optional props with ?, and restricting values with union types so only valid data can be passed to components.

What challenges did you face when implementing component composition?

It was challenging to handle optional props and make components work together, but the example code from the lesson helped guide the implementation.