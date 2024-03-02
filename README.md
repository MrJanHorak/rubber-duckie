# Virtual Rubber Duckie

This is an attempt to create a GPT-wrapper app that uses speach recognition and speech synthesis to assist a developer in the developer process. The goal is to have a develeoper be able to communicate to the virtual rubber duck, making use of the rubber duck method of working through and explaining code. And then have the rubber duck send that message to a private or public GPT-Api endpoint to generate a response to repeat back to the developer what they have communicated in different words asking clarifying questions.

### Personalisation

For a more personalized feel of the app I have provided a way to change the rubber duck and the background.

Right clicking on the picture of the rubber duck will open up a pop up that allows the user to change the image of the rubber duck.

Right clicking on the background will open a pop up that allows the user to change the background tile pattern.

### Running the App

In order to run this application on your local machine, you need to clone down this repo and then npm i, npm run dev and navigate to the localhost address provided in the terminal.

To run is successfully you will need to either have a local LLM running that is set up to work as a REST API, or have a ChatGPT api key and point towards that endpoint. 

To run an LLM locally you can use LM Studio.

# Assets

All images are created using generative AI
The background tile is made using StableDiffusion running on a local machine. The rubber duckies are all made using Google Gemini.

Rubber Duckie sound from https://www.sfxbuzz.com/download/9-cartoon-sound-effects/133-rubber-duck-sound-effect

# Rubber Duckie Bonus

[Just a bit fun with Ducks.](https://www.youtube.com/watch?v=uYOmtEcZ1lk)

[The Classic Rubber Duck Song](https://www.youtube.com/watch?v=Mh85R-S-dh8)

## About the Rubber Duck Method

[The history of the Rubebr Duck Method](https://www.youtube.com/watch?v=huOPVqztPdc)

[Rubber Duck Debugging](https://www.youtube.com/watch?v=NBgIHOrjSxs)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
