# ARIA Cheat Sheet: Quick Reference

---

## 🌐 Common ARIA Roles

| Role           | Purpose                                                |
|----------------|--------------------------------------------------------|
| `button`       | Identifies a clickable button                          |
| `checkbox`     | Identifies a checkbox                                  |
| `dialog`       | Marks a modal or pop-up dialog                         |
| `alert`        | Announces an urgent message (interrupts screen reader) |
| `tooltip`      | Provides extra info on hover/focus                     |
| `tab`, `tabpanel` | Used in tabbed interfaces                          |
| `navigation`   | Marks a navigation landmark                            |
| `region`       | Defines a significant section of the page              |

---

## ⚙️ ARIA Attributes & What They Do

| Attribute            | Purpose                                                                 |
|----------------------|-------------------------------------------------------------------------|
| `aria-label`         | Adds an invisible label (text read by screen readers)                   |
| `aria-labelledby`    | Associates label by referencing another element's id                    |
| `aria-hidden`        | Hides element from screen readers (used for decorative content)         |
| `aria-live`          | Announces changes in dynamic content (`polite`, `assertive`)            |
| `aria-disabled`      | Marks an element as disabled (even if not using native HTML `disabled`) |
| `aria-checked`       | Describes the checked state of a checkbox or toggle                     |
| `aria-expanded`      | Indicates whether a collapsible element is expanded or collapsed        |
| `aria-required`      | Marks a field as required                                                |
| `aria-invalid`       | Indicates that a field has failed validation                            |
| `aria-controls`      | Identifies the element(s) controlled by the current element             |
| `aria-describedby`   | Links to another element that describes this one in more detail         |

---

## 🔁 Live Regions (Dynamic Content Announcements)

| Attribute              | Description                                                  |
|------------------------|--------------------------------------------------------------|
| `aria-live="polite"`   | Announces changes non-interruptively                         |
| `aria-live="assertive"`| Announces changes immediately                                |
| `aria-atomic="true"`   | Announces entire region, not just changed part               |
| `aria-relevant`        | What kind of changes should be announced (text, additions, removals) |

---

## ✅ Best Practices

- Use **semantic HTML** first (like `<button>`, `<label>`, `<nav>`) before reaching for ARIA.
- Use `aria-label` when no visible label exists.
- Use `aria-labelledby` when there's already visible text.
- Don’t use `aria-hidden="true"` on important content or interactive elements.
- Don’t add ARIA roles that conflict with native HTML semantics (e.g., don’t put `role="button"` on a `<button>`).

---

This cheat sheet helps ensure accessible, inclusive web content and is a great reference for developers, designers, and QA testers alike.
