      
# React E-commerce Project

## Overview
This project is a modern e-commerce application built with React, demonstrating advanced state management patterns and component architecture. It features a product catalog, real-time search, shopping cart functionality, and stock management.

## Technology Stack
- **React**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Context API**: For global state management
- **useReducer**: For complex state logic handling
- **Vite**: Build tool and development server

## Key Features
1. **Product Catalog**
   - Grid layout display of products
   - Product cards with image, title, price, and stock information
   - Rating system implementation

2. **Shopping Cart**
   - Add/Remove products
   - Quantity management
   - Stock validation
   - Real-time price calculation

3. **Search Functionality**
   - Real-time search implementation
   - Product filtering based on search terms

4. **State Management**
   - Centralized state management using Context API
   - Complex state logic handled with useReducer
   - Actions for cart operations:
     - ADD_TO_CART
     - REMOVE_FROM_CART
     - UPDATE_QUANTITY
     - SET_SEARCH_TERM

## Project Structure
```
src/
├── components/         # React components
│   ├── products/       # Product-related components
│   └── ...            # Other components
├── context/           # Global state management
├── data/              # Static data
└── utils/             # Utility functions
```

## Implementation Details

### State Management Evolution
The project demonstrates the evolution of state management in React:
1. Started with simple useState for component-level state
2. Upgraded to Context API for global state sharing
3. Enhanced with useReducer for complex state logic

### Component Architecture
- **Smart Components**: Handle logic and state (ProductsList, Cart)
- **Presentational Components**: Focus on UI (ProductCard, Rating)
- **Context Provider**: Wraps the application for global state access

### Key Learnings
1. **State Management Patterns**
   - When to use useState vs useReducer
   - Effective context organization
   - Action-based state updates

2. **React Best Practices**
   - Component composition
   - Props drilling prevention
   - State lifting and sharing

3. **Performance Considerations**
   - State update optimizations
   - Component re-render management
   - Context value memoization

4. **Code Organization**
   - Modular component structure
   - Separation of concerns
   - Reusable utility functions

## Future Enhancements
- Implement user authentication
- Add product categories and filters
- Integrate with a backend API
- Add product details page
- Implement checkout process

## Running the Project
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Open http://localhost:5173 in your browser

## Contributing
Feel free to submit issues and enhancement requests.

## Copyright
This project is the copyrighted property of the Learn with Sumit platform.
        