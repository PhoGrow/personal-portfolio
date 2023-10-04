# Personal portfolio (CV)

## 🚀 Project Structure

Inside of your project, you'll see at least the following folders and files:

```
/
├── public/
│   ├── illustrations/
│   │   └── *.svg
│   └── favicon.png
├── src/
│   ├── assets/
│   │   └── *.scss
│   ├── components/
│   │   └── *.vue
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── stores/
│       └── *.ts
└── package.json
```

## ⚒️ Modifications

- Customize *colors* and other Sass variables in the `assets` folder
  - `Bulma` takes care of styling
- Enter your *data* (CV) in the `stores` folder
  - `Pinia` takes care of state management
- Set your own *logo* for `favicon.png` and *illustrations* in the `public` folder 😉

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
