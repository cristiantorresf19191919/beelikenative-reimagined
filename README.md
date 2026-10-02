# BeeLikeNative

An independent redesign of BeeLikeNative, built with Next.js, TypeScript and Framer Motion. A warm editorial landing page and four original interactive A1 English lessons.

## Run

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
npm run build
```

The production website is exported to `out/`. Netlify settings are included in `netlify.toml`.

## Edit the website

- `app/page.tsx`: landing page and lesson player.
- `app/globals.css`: colors, typography, responsive layouts.
- `app/lessons.ts`: lesson content, conversations, vocabulary, quiz answers.
- `app/layout.tsx`: title, description, favicon metadata.

The four lessons cover introductions, routines, café orders and neighbourhoods. Quizzes provide immediate explanations. Completion is stored on the learner’s device, without accounts or tracking. Audio uses the browser’s built-in speech synthesis; voices differ by device. Written practice is not submitted or saved.

## Add videos later

Add an MP4 to `public/videos/`, then set `videoUrl: '/videos/lesson-1.mp4'` on a lesson in `app/lessons.ts`. Optionally set `captionsUrl` to an English WebVTT file under `public/`. The Listen step will show a native video player. An HTTPS URL from a video host can also be used if it points to a playable media file. No videos are included in this starter.

## Publishing

This is a separate demo deployment; it does not change beelikenative.com. To deploy your fork, import the repository in Netlify using `npm run build` and `out` as the publish folder. A CLI deploy can use `netlify deploy --prod --dir=out --no-build` after building.

Private-lesson and upcoming-course enquiries link to the public address from the original website, hello@beelikenative.com. No payment system, email automation, or course fulfilment is configured. The A2 course is labelled as planned.

## Ownership and licence

Original implementation and lesson material are offered under the MIT licence. BeeLikeNative's name and brand belong to their respective owner; the licence does not grant trademark rights. The owner may fork, adapt, host and use this implementation without paying for the code. Hosting and third-party services retain their own terms.

Accessibility includes semantic structure, visible focus, keyboard-close and focus handling for lessons, reduced-motion support, and responsive layouts. Fonts load from Google Fonts, with local fallbacks.

## Companion and themes

Bibi is an original SVG bee mascot with a phrasebook. Her eyes follow the pointer, clicks cycle encouraging expressions, and a shared pause button suspends all pet movement. Off-screen and hidden-tab movement is suspended. Light/dark theme and pet pause preferences are saved locally. Reduced motion is respected.

The lesson player now includes vocabulary flip cards, per-line listening, a sentence builder, a sequential quiz and a guided speaking/writing exercise. Its completion celebration reports the activities actually explored; learners may choose their own path.

## Creator photos

`public/author-source.png` is the screenshot supplied by the user. CSS frames the existing portrait and video stills without generating or altering the creator’s likeness. These third-party photos and the BeeLikeNative brand are excluded from the MIT licence; their rights remain with their respective owners. Replace the screenshot with original, authorised high-resolution portraits when available.
