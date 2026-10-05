# CATprep

A concept-by-concept practice platform for the CAT (Common Admission Test), in the spirit of GregMat for the GRE:
every topic in the syllabus is taught from zero, and previous-year-style questions are drilled by the exact concept they test.

**Learn → Drill → Mock → Fix weak spots.**

## What it does

- **Learning path.** 52 concepts across QA, VARC and DILR in the order a beginner should learn them, with prerequisites.
  Each concept has a lesson (built from zero, with worked examples, traps and a checklist) and a bank of tagged questions.
- **Concept drills.** Practice mode checks each answer immediately and shows a step-by-step solution. Unseen questions come first,
  then the ones you got wrong.
- **Timed sets and sectional mocks.** Exam conditions: 40 minutes, CAT marking (+3, −1 for wrong MCQ, 0 for wrong TITA), palette, mark-for-review, result breakdown.
- **Progress.** Accuracy per concept, weak concepts (below 60%), revision reminders after 7 days, recent misses, bookmarks, notes.
  Everything is stored in the browser; export/import JSON to move devices.
- **Content as files.** Lessons are markdown, questions are JSON, validated at build time. Adding questions from a book is editing a file.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # validates content, type-checks, builds to dist/
npm run validate   # content checks only
```

The build is a static site (`dist/`). Pushing to `main` deploys it to GitHub Pages via `.github/workflows/deploy.yml`
(enable Pages → Source: GitHub Actions in the repo settings once). It also runs anywhere that serves static files.

## Adding content

See [`content/README.md`](content/README.md). In short:

- `content/syllabus.json` is the learning path.
- `content/lessons/<concept-id>.md` is the lesson.
- `content/questions/*.json` holds questions tagged with `section`, `topic`, `concepts`, `difficulty` and `source`.
- `content/sets/*.json` holds RC passages and DILR sets shared by several questions.

A note on sources: questions marked `CAT <year>` are reconstructed from memory of the official papers and should be checked
against the official question paper before being trusted word-for-word (`"verified": true` once checked). Everything marked
`CAT-style` is original material written to match the pattern of a given year.

## Project layout

```
content/      syllabus, lessons, questions, sets   (the only place you edit to add material)
scripts/      validate-content.mjs                 (schema + cross-reference checks)
src/          Vite + React + TypeScript app
  content.ts  loads everything under content/ at build time
  store.ts    localStorage progress store
  lib/        answer checking, session state, planning (next concept, weak, due)
  pages/      Dashboard, Learn, Concept, Practice, Session, Mocks, Progress, QuestionPage
```
