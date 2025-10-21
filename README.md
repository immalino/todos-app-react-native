# React Native Todo App with Expo & Convex

A simple cross-platform todo list application built using React Native, Expo Router, and Convex as the backend.

## Features

- **Create, Read, Update, Delete (CRUD) Tasks:** Add, view, edit, mark complete, and delete tasks.
- **Realtime Backend:** Uses Convex for realtime data synchronization across devices.
- **Tab-Based Navigation:** Uses Expo Router for tab navigation between Todos and Settings screens.
- **State Management:** Uses `useState` hook and `useQuery`/`useMutation` from Convex to manage application state and data.
- **Dynamic Styling:** Uses React Native StyleSheet and custom hooks (`useTheme`) for dynamic light/dark themes.
- **Custom UI Components:** Includes components such as Header, TodoInput, EmptyState, ProgressStats, Preferences, and DangerZone.
- **Settings:**
  - Progress Statistics (Total, Completed, Active).
  - Preferences (Dark Mode, Notifications [Placeholder], Auto Sync [Placeholder]).
  - Danger Zone (Reset App - Delete all tasks).
- **Loading & Empty State Handling:** Displays loading indicators and informative empty states.

## Tech Stack

- **Frontend:**
  - React Native
  - Expo & Expo Router
  - TypeScript
  - Expo Vector Icons (@expo/vector-icons)
  - Expo Linear Gradient
- **Backend:**
  - Convex (Realtime Backend Platform)
- **Local Storage:**
  - AsyncStorage (for theme preferences)

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or pnpm (pnpm is used in the lockfile)
- Convex account ([https://convex.dev](https://convex.dev))
- Expo Go app on your mobile device or an installed simulator/emulator.

### Installation & Setup

1.  **Clone the Repository:**

```bash
    git clone https://github.com/immalino/todos-app-react-native
    cd todos-app-react-native
```

2.  **Install Dependencies:**
    If using pnpm (based on `pnpm-lock.yaml`):

```bash
    pnpm install
```

    Or if using npm:

```bash
    npm install
```

3.  **Setup Convex:**
    - Install Convex CLI: `npm install -g convex` or `pnpm add -g convex`
    - Run and follow the prompts to initialize the project: `npx convex dev`

4.  **Configure Environment Variables:**
    - After running `npx convex dev`, `.env.local` will be generated in the project root.
    - It should look like this:

```env
      CONVEX_DEPLOYMENT=<AUTO_GENERATED>

      EXPO_PUBLIC_CONVEX_URL=<AUTO_GENERATED>
```

5.  **Run the Application:**

```bash
    npx expo start
```

    Follow the instructions in the terminal to open the app:
    - In Expo Go app (scan QR code)
    - In iOS simulator (`i`)
    - In Android emulator (`a`)
    - In web browser (`w`)
