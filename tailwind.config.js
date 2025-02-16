/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'amiri': ['Amiri', 'serif'],
        'lora': ['Lora', 'serif'],
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-5px, -10px) scale(0)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(5px, -8px) scale(0)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-2px, -12px) scale(0)' },
        },
      },
      animation: {
        'float1': 'float1 2s ease-in-out infinite',
        'float2': 'float2 2.5s ease-in-out infinite',
        'float3': 'float3 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}