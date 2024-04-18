# Task

This template should help get you started developing with Vue 3 in Vite.

## IDE Setup Used

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Stack Used
Vue3, Vite, TailwindCSS and Pinia (For State Management)

## How to run the project on your machine

```sh
npm install
```
It will install all dependencies needed for the project

### Compile and Hot-Reload for Development

```sh
npm run dev
```

If any problem with tailwindCSS.

Run this in your Terminal
```sh
npx npx tailwindcss init -p
```

### Compile and Minify for Production

```sh
npm run build
```

## Decision Made During the Project

I used computed property to directly reference the users array from the store.
The dataComponent is a reusable component to display data for the items page and student page.