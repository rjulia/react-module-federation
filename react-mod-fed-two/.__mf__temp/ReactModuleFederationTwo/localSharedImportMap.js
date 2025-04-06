
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "react": async () => {
          let pkg = await import("__mf__virtual/ReactModuleFederationTwo__prebuild__react__prebuild__.js")
          return pkg
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/ReactModuleFederationTwo__prebuild__react_mf_2_dom__prebuild__.js")
          return pkg
        }
      ,
        "@tanstack/react-store": async () => {
          let pkg = await import("__mf__virtual/ReactModuleFederationTwo__prebuild___mf_0_tanstack_mf_1_react_mf_2_store__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "react": {
            name: "react",
            version: "19.1.0",
            scope: ["default"],
            loaded: false,
            from: "ReactModuleFederationTwo",
            async get () {
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.0.0"
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.1.0",
            scope: ["default"],
            loaded: false,
            from: "ReactModuleFederationTwo",
            async get () {
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.0.0"
            }
          }
        ,
          "@tanstack/react-store": {
            name: "@tanstack/react-store",
            version: "0.7.0",
            scope: ["default"],
            loaded: false,
            from: "ReactModuleFederationTwo",
            async get () {
              usedShared["@tanstack/react-store"].loaded = true
              const {"@tanstack/react-store": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.7.0"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      