# Content authoring guide

Everything the app shows lives in this folder as plain files. No database, no CMS.
Run `npm run validate` after editing; the build refuses invalid content.

```
content/
  syllabus.json         sections → topics → concepts (the learning path)
  lessons/<concept>.md  one lesson per concept id (markdown + LaTeX)
  questions/*.json      arrays of questions, any grouping you like
  sets/*.json           shared passages / DILR sets that several questions belong to
```

## Lesson files

File name is the concept id from `syllabus.json`, e.g. `lessons/percentages.md`.
Markdown with GitHub tables, `$inline$` and `$$display$$` LaTeX. Suggested structure:

```
# Title
> One-line "why CAT asks this"
## Core ideas          (build from zero, no assumed knowledge)
## Worked examples     (3–6, each a mini CAT question with a full solution)
## Traps & speed tips
## Checklist           (what you should be able to do before practising)
```

## Question objects

```jsonc
{
  "id": "qa-pct-003",               // unique, lowercase, stable
  "section": "QA",                  // QA | VARC | DILR
  "topic": "arithmetic",            // topic id from syllabus
  "concepts": ["percentages"],      // one or more concept ids; first one is primary
  "type": "mcq",                    // mcq | tita
  "stem": "markdown + $latex$",
  "options": ["a", "b", "c", "d"],  // mcq only, exactly 4
  "answer": 2,                      // mcq: 0-based index. tita: string or array of accepted strings
  "solution": "markdown explanation, step by step",
  "difficulty": "medium",           // easy | medium | hard
  "source": { "exam": "CAT", "year": 2019, "slot": 2 },   // or { "exam": "CAT-style", "note": "..." }
  "setId": "rc-2023-1-a",           // optional: links to sets/*.json for RC passages / DILR sets
  "timeSec": 120                    // optional: suggested time
}
```

* TITA numeric answers are compared numerically (so "0.5" matches ".50"); give a tolerance with
  `"tolerance": 0.01` if needed. Non-numeric TITA answers are compared case-insensitively after trimming.
* `source.exam` is `"CAT"` only when the question is a real previous-year question. Reconstructed
  wording must still be checked against the official paper; use `"verified": true` once you have.
* Use `"CAT-style"` for original questions written to mimic a PYQ pattern.

## Set objects (`sets/*.json`, an array)

```jsonc
{
  "id": "rc-2023-1-a",
  "section": "VARC",
  "topic": "reading-comprehension",
  "title": "RC: The economics of attention",
  "passage": "markdown (RC text, or the DILR set description + tables)",
  "source": { "exam": "CAT-style" }
}
```

Questions with `setId` are shown together with the passage, in the order they appear in the file.

## Importing from books / official papers

1. Create a new file `questions/<book-or-year>.json`.
2. Copy each question into an object; tag `concepts` carefully — the tag is what makes
   concept-wise practice work. Prefer the most specific concept.
3. Write the solution as you would explain it to a beginner: name the concept, then the steps.
4. `npm run validate`.
