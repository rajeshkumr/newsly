This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install the project dependencies

First of all, you will need to install package dependencies.

Choose Node version>= 18.x.x

```bash
# using npm
npm install

# OR using Yarn
yarn install

# OR using Bun (Faster)
bun install
```

## Step 2: Install pod inside ios (Configured this project for ios app)

```bash
cd ios

pod install

cd ..
```

## Step 3: Start the Metro Server

Second, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start

# OR using Bun (Faster)
bun start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android

#OR using Bun
bun android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios

#Or using Bun
bun ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## Basic structure of app

MyApp/
├── app/                     # Expo Router pages
│   ├── (tabs)/              # Tab navigation group
│   │   ├── _layout.tsx      # Tab layout
│   │   ├── index.tsx        # Home tab
│   │   └── profile.tsx      # Profile tab
│   ├── _layout.tsx          # Root layout
│   └── +not-found.tsx       # 404 page
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Basic UI elements
│   │   └── features/        # Feature-specific components
│   ├── services/            # API calls and external services
│   ├── utils/               # Helper functions
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React Context providers
│   ├── types/               # TypeScript type definitions
│   └── theme/               # Design system (colors, fonts)
├── assets/                  # Images, fonts, sounds
│   ├── images/
│   ├── icons/
│   └── fonts/
├── constants/               # App-wide constants
└── .env

## Naming Conventions for files

Components → PascalCase → TaskCard.tsx
Hooks → camelCase + use → useTasks.ts
Utils → camelCase → formatDate.ts
Services → camelCase + Service → taskService.ts
Types → PascalCase → Task.ts

## Naming Conventions for directories

Components → PascalCase → TaskCard
Screens → PascalCase → HomeScreen
Remaining → camelCase
