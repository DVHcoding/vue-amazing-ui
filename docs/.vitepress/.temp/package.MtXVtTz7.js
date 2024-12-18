const name = "vue-amazing-ui";
const version = "1.10.2";
const type = "module";
const files = [
  "dist/components",
  "dist/*.css",
  "dist/*.d.ts",
  "dist/*.js",
  "dist/*.cjs",
  "package.json",
  "README.md",
  "README.zh-CN.md"
];
const main = "./dist/vue-amazing-ui.umd.cjs";
const module = "./dist/vue-amazing-ui.js";
const browser = "./dist/vue-amazing-ui.js";
const unpkg = "./dist/vue-amazing-ui.iife.js";
const types = "./dist/vue-amazing-ui.d.ts";
const exports = {
  "./dist/vue-amazing-ui.css": "./dist/vue-amazing-ui.css",
  "./css": "./dist/vue-amazing-ui.css",
  ".": {
    "import": "./dist/vue-amazing-ui.js",
    require: "./dist/vue-amazing-ui.umd.cjs"
  }
};
const scripts = {
  "docs:dev": "vitepress dev docs --port 8000 --open",
  "docs:build": "vitepress build docs",
  "docs:deploy": "sh scripts/deploy.sh",
  dev: "vite",
  pub: "sh scripts/publish.sh",
  push: "sh scripts/push.sh",
  build: "run-s format clean build:lib",
  format: "prettier --write src/ components/",
  clean: "rimraf ./dist",
  "build:lib": "run-p type-check build:es build:browser",
  "type-check": "vue-tsc --build --force",
  "build:es": "vite build",
  "build:browser": "vite -f iife build",
  preview: "vite preview",
  lint: "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
};
const dependencies = {
  "@vuepic/vue-datepicker": "^10.0.0",
  "@vueuse/core": "^12.0.0",
  "@vueuse/integrations": "^12.0.0",
  qrcode: "^1.5.4",
  swiper: "^11.1.15",
  vue: "^3.5.13"
};
const devDependencies = {
  "@ant-design/icons-vue": "^7.0.1",
  "@rollup/plugin-terser": "^0.4.4",
  "@tsconfig/node22": "^22.0.0",
  "@types/minimist": "^1.2.5",
  "@types/node": "^22.10.1",
  "@vitejs/plugin-vue": "^5.2.1",
  "@vue/eslint-config-prettier": "^10.1.0",
  "@vue/eslint-config-typescript": "^14.1.4",
  "@vue/tsconfig": "^0.7.0",
  "ant-design-vue": "^4.2.6",
  "date-fns": "^4.1.0",
  eslint: "^9.16.0",
  "eslint-plugin-vue": "^9.32.0",
  less: "^4.2.1",
  minimist: "^1.2.8",
  "naive-ui": "^2.40.3",
  "npm-run-all2": "^7.0.1",
  prettier: "^3.4.1",
  rimraf: "^6.0.1",
  "rollup-plugin-visualizer": "^5.12.0",
  typescript: "^5.6.3",
  "unplugin-auto-import": "^0.18.6",
  "unplugin-vue-components": "^0.27.5",
  vite: "^6.0.2",
  "vite-plugin-dts": "^4.3.0",
  vitepress: "^1.5.0",
  "vue-amazing-ui": "1.10.2",
  "vue-router": "^4.5.0",
  "vue-tsc": "^2.1.10"
};
const sideEffects = [
  "dist/*"
];
const description = "An Amazing Vue3 UI Components Library, Uses TypeScript.";
const repository = {
  type: "git",
  url: "git+https://github.com/themusecatcher/vue-amazing-ui.git"
};
const keywords = [
  "Vue3",
  "TypeScript",
  "Vite",
  "Less",
  "SFC",
  "Amazing",
  "UI",
  "Components",
  "Tools",
  "Functions"
];
const author = "theMuseCatcher";
const license = "MIT";
const bugs = {
  url: "https://github.com/themusecatcher/vue-amazing-ui/issues"
};
const homepage = "https://themusecatcher.github.io/vue-amazing-ui";
const browserslist = [
  "> 1%",
  "last 2 versions",
  "not dead"
];
const pkg = {
  name,
  version,
  "private": false,
  type,
  files,
  main,
  module,
  browser,
  unpkg,
  types,
  exports,
  scripts,
  dependencies,
  devDependencies,
  sideEffects,
  description,
  repository,
  keywords,
  author,
  license,
  bugs,
  homepage,
  browserslist
};
export {
  pkg as p
};
