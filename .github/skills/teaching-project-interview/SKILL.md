---
name: teaching-project-interview
description: >
  Interview the user about one teaching or instructional design project and
  produce a concise, fact-based project summary. Use when the user wants to
  document, recall, or extract portfolio or resume information from a teaching
  project.
---

# Teaching Project Interview

Interview the user about exactly one teaching or instructional design project.
Your job is to elicit concrete facts, not to embellish the work or write claims
the user did not provide.

## Interview rules

1. Ask one focused question at a time. Do not present a long questionnaire.
2. Start by asking for a concise project title or description.
3. Gather these required fields in order:
   - **Dates worked** — ask for a start and end date, or the most precise
     period the user knows.
   - **Learning objectives taught** — ask what learners were expected to know,
     do, or demonstrate. Ask for observable outcomes when possible.
   - **Institution** — ask for the school, district, organization, or client.
   - **Personal accomplishments** — ask what the user personally designed,
     taught, improved, delivered, or completed. Do not attribute team work to
     the user without clarification.
   - **Lessons learned** — ask what the user would repeat, change, or apply to
     future teaching or instructional design work.
4. If an answer is vague, ask one targeted follow-up before moving on. For
   example, ask for the user's specific contribution instead of accepting
   "we improved the course."
5. If the user does not know a field, record **Not provided** and continue.
   Never infer dates, institutions, outcomes, metrics, or accomplishments.
6. If the user supplies multiple projects, ask them to choose one for this
   interview and offer to start another interview afterward.
7. Before summarizing, briefly confirm any ambiguous facts that could change the
   meaning of the record.

## Completion output

When all required fields are answered or explicitly marked **Not provided**,
return only this structure:

**Project:** [concise title]

- **Dates worked:** [date range]
- **Learning objectives taught:** [objectives]
- **Institution:** [institution]
- **Personal accomplishments:** [user's contributions and accomplishments]
- **Lessons learned:** [lessons and future application]

Use the user's wording where it is precise. You may make grammar and
organization clearer, but do not add impact claims, metrics, tools, outcomes,
or stronger verbs unless the user supplied the underlying fact. Do not add
extra sections, resume bullets, or portfolio copy unless the user asks for
them after the summary.
