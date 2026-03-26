# Adotzee Development Conventions

This document outlines the core technical patterns and conventions applied to the Adotzee Student Frontend, based on the project's internal `Skills` library.

## 1. Frontend Design & UX
- **Motion Strategy**: Use `framer-motion` for all layout transitions. Implement **staggered reveals** using `variants` to create a premium, orchestrated entrance feel.
- **Typography**: Adhere to `black` font weights with `tracking-tighter` for main headers to establish a bold visual hierarchy.
- **Visual Depth**: Leverage `backdrop-blur` and high-opacity colored mesh blobs in the background to create a premium, layered aesthetic.
- **Utility**: Use Tailwind 4 syntax (e.g., `bg-linear-to-r`) for all gradients.

## 2. Scalability & Architecture
- **Data Fetching**: All external API calls must use **TanStack Query** (standardized in `services/queries.ts`). Avoid `useEffect` for data fetching to benefit from automatic caching and stale-time management.
- **Logic Abstraction**: Complex component logic (e.g., multi-step forms) should be extracted into custom hooks (e.g., `hooks/useLeadForm.ts`) to keep components clean and testable.
- **API Interceptor**: The `apiClient.ts` handles global timeouts (60s) and structured error response extraction.

## 3. Security Protocols
- **Input Sanitization**: Always `trim()` and normalize user-provided strings before sending them to the API. Use **Zod** for schema validation in hooks.
- **Header Protection**: Standard security headers (X-Frame-Options, CSP-lite principles) are enforced via `next.config.ts`.
- **Malicious Redirects**: Validate all dynamic URLs (like WhatsApp messages) to ensure no protocol injection.

## 4. Maintenance (Self-Healing)
- Keep this document updated when new core patterns are introduced.
- Use the `task.md` and `walkthrough.md` artifacts to track and document large-scale refactors.
