import packageJSON from './package.json'

function remoteConfig(name, url) {
  return {
    type: 'module',
    name,
    entry: url,
    entryGlobalName: 'remote',
    shareScope: 'default',
  }
}

export default {
  filename: 'remoteEntry.js',
  name: 'ReactModuleFederationTwo',
  exposes: {
    "./CounterLauncher": "./src/CounterLauncher.tsx",
    "./counterStore": "./src/counterStore.ts",
  },
  remotes: {},
  shared: {
    react: {
      singleton: true,
      requiredVersion: packageJSON.dependencies.react,
      eager: true, // Add this
    },
    "react-dom": {
      singleton: true,
      requiredVersion: packageJSON.dependencies["react-dom"],
      eager: true, // Add this
    },
    "@tanstack/react-store": {
      singleton: true,
      requiredVersion: packageJSON.dependencies["@tanstack/react-store"],
    },
  },
}
