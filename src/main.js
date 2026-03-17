// Entry point for Vite dev server.
// The primary way to view components is via Storybook (npm run storybook).
// This file exists so `npm run dev` doesn't error.

const app = document.getElementById('app');
if (app) {
  app.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: system-ui; color: #666;">
      <p>Run <code style="background: #f0f0f0; padding: 2px 8px; border-radius: 4px;">npm run storybook</code> to view components.</p>
    </div>
  `;
}
