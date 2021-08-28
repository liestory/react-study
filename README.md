##Схема сборки по каталогам простого Реакт прилодения

```
@startuml packaging
component "Create-project-app" as project  {

    folder "/node_modues" {
        artifact "/..." as node_modules
    }
    folder "/src" {
        artifact "/..." as src
    }
    folder "/public/..." as public {
        file "/index.html" as public_index
        file "/favicon.ico" as public_favicon
        file "/manifest.json" as public_manifest
    }
}

cloud {
    card "localhost:3000" {
        file "manifest.json" as manifest
        file "main.chunk.js" as main
        file "favicon.ico" as favicon
        file "vendor~main.chunk.js" as vendor
        file "bundle.js" as bundle

        node_modules --> vendor
        src --> main
        public_favicon --> favicon
        public_manifest --> manifest

        artifact "index.html" as index {
            public_index --> index
            manifest --> index
            main --> index
            favicon --> index
            vendor --> index
            bundle -r-> index
        }
    }
}
@enduml
```