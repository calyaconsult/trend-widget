# 📊 Search Volume Trends

A small React dashboard widget that shows keyword search trends as cards. Each card shows a trend arrow, the percentage change, the monthly search volume and a progress bar. It is built with **React**, **Tailwind CSS** and **lucide-react**.

<!-- Add a screenshot here:
![Search Volume Trends screenshot](./docs/screenshot.png)
-->

## ✨ Features

- Responsive card grid: 1 column on mobile, 2 on tablets, 3 on desktop
- Green up arrow for positive trends, red down arrow for negative trends
- Percentage change shown per keyword
- Monthly search volume in a compact format (e.g. `250K`)
- Progress bar showing the size of the change (doubled and capped at 100%)
- Dark theme with hover effects

## 🧰 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (v4)
- [lucide-react](https://lucide.dev/)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) **20.19+ or 22.12+**
- npm (included with Node.js)

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

### Set up from scratch

If you want to add the component to a new project instead:

```bash
npm create vite@latest search-trends -- --template react
cd search-trends
npm install
npm install lucide-react tailwindcss @tailwindcss/vite
```

**1. Add the Tailwind plugin in `vite.config.js`:**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**2. Import Tailwind in `src/index.css`:**

```css
@import "tailwindcss";
```

**3. Copy the component to `src/SearchVolumeTrend.jsx`** and use it in `src/App.jsx`:

```jsx
import SearchVolumeTrend from './SearchVolumeTrend'

export default function App() {
  return <SearchVolumeTrend />
}
```

**4. Start the dev server:**

```bash
npm run dev
```

> 💡 Delete the default `App.css` and remove its import. The Vite template styles can interfere with the layout.

## 🗂️ Project Structure

```
.
├── src/
│   ├── App.jsx                # Renders the widget
│   ├── SearchVolumeTrend.jsx  # The dashboard component
│   ├── index.css              # Tailwind import
│   └── main.jsx               # App entry point
├── index.html
├── vite.config.js
└── package.json
```

## ⚙️ How It Works

Each keyword is an object with three fields:

| Field    | Type     | Description                                      |
|----------|----------|--------------------------------------------------|
| `name`   | `string` | Keyword or topic label                           |
| `change` | `number` | Percentage change in search interest (+/-)       |
| `volume` | `number` | Monthly search volume                            |

```js
{ name: 'Christmas', change: 45, volume: 250000 }
```

Display rules:

- **Trend icon and color:** `change > 0` is green with `TrendingUp`. Anything else is red with `TrendingDown`.
- **Volume:** `volume / 1000` is rounded and shown with a `K` suffix.
- **Progress bar:** the width is `min(|change| × 2, 100)` percent.

## 🛠️ Customization

### Change the data

Edit the array in the `useState([...])` call in `SearchVolumeTrend.jsx`:

```js
const [keywords] = useState([
  { name: 'Your Keyword', change: 30, volume: 120000 },
])
```

### Use props instead of hard-coded data

To use the widget with your own data, change the signature:

```jsx
export default function SearchVolumeTrend({ keywords }) {
  // remove the useState block and use the `keywords` prop
}
```

Then use it like this:

```jsx
<SearchVolumeTrend keywords={[{ name: 'Christmas', change: 45, volume: 250000 }]} />
```

### Load live data

Replace the static array with data from your API, for example with `useEffect` and `fetch`, or a library like TanStack Query.

## ⚠️ Known Limitations

- The data is **static and hard-coded**. The "Real-time" subtitle is a placeholder until you connect a data source.
- The component does not accept props yet (see *Customization*).
- `to-slate-750` is not a default Tailwind color. Use `to-slate-800` or define a custom color:
  ```css
  @theme {
    --color-slate-750: #283548;
  }
  ```
- A `change` of exactly `0` is shown as a negative (red) trend.
- Cards use the array index as `key`. Use a stable unique value (e.g. `keyword.name`) if the list can change.

## 🧪 Troubleshooting

| Problem | Solution |
|---|---|
| `Failed to resolve import "lucide-react"` | Run `npm install lucide-react` |
| Page is unstyled | Check the Tailwind plugin in `vite.config.js` and `@import "tailwindcss"` in `index.css` |
| Odd margins or centering | Remove the default Vite CSS (`App.css`, extra rules in `index.css`) |
| `npm create vite` fails | Update Node.js to a supported version |

## 🗺️ Roadmap

- [ ] Accept `keywords` as a prop
- [ ] Fetch live data from an API
- [ ] Sorting and filtering
- [ ] Loading and error states
- [ ] Unit tests

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push the branch: `git push origin feature/my-feature`
5. Open a pull request

## 📄 License

Distributed under the **<MIT>** License. See `LICENSE` for details.

## 👤 Author

**<Your Name>** – [@<your-username>](https://github.com/<your-username>)
