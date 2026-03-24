```markdown
# Design System Strategy: The Luminous Ledger

## 1. Overview & Creative North Star: "The Obsidian Lens"
This design system moves away from the sterile, "spreadsheet-style" fintech defaults. Our Creative North Star is **The Obsidian Lens**—a concept that treats the interface not as a flat screen, but as a deep, multi-layered physical environment. 

By leveraging intentional asymmetry and high-contrast typography scales, we create an editorial feel that commands authority. We break the rigid grid by allowing vibrant data visualizations to "glow" through layers of charcoal and navy, using glassmorphism to suggest sophisticated transparency. This is a system where information isn't just displayed; it is curated.

## 2. Colors: Depth through Tonal Transitions
Our palette is rooted in a "Deep Space" hierarchy. We avoid flat blacks in favor of rich, desaturated navies and charcoals to provide a premium, velvety canvas for our vibrant accents.

*   **Primary (#69daff):** Used for critical paths and focus. This is our "Active" state.
*   **Secondary (#af88ff):** Reserved for growth metrics and secondary actions.
*   **Tertiary (#ffb148):** Our "Warning" or "Attention" accent, used sparingly to highlight market shifts or alerts.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to section off content. Boundaries must be defined solely through background color shifts. To separate a sidebar from a main feed, transition from `surface` (#060e20) to `surface-container-low` (#091328). This creates a seamless, high-end feel that feels carved rather than outlined.

### Surface Hierarchy & Nesting
Treat the UI as a stack of frosted obsidian. Use the `surface-container` tiers to create "nested" depth:
1.  **Base:** `surface` (#060e20)
2.  **Sectioning:** `surface-container-low` (#091328)
3.  **Primary Cards:** `surface-container-high` (#141f38)
4.  **Floating Modals:** `surface-container-highest` (#192540)

### The "Glass & Gradient" Rule
To achieve the signature fintech look, main CTAs should use a subtle linear gradient from `primary` (#69daff) to `primary_container` (#00cffc). For floating elements, utilize `surface_bright` (#1f2b49) at 60% opacity with a `20px` backdrop-blur to allow underlying data visualizations to bleed through the UI layers.

## 3. Typography: Editorial Authority
We use **Inter** as our typographic backbone. Its neutral, high-legibility architecture allows our dramatic scale shifts to do the heavy lifting.

*   **Display Scale:** Use `display-lg` (3.5rem) for hero balance figures. This creates a focal point that feels "magazine-quality."
*   **Headline Scale:** `headline-sm` (1.5rem) should be used for section headers, paired with significant tracking (-0.02em) to feel tighter and more "custom."
*   **Body & Label:** Use `body-md` (0.875rem) for general data. Use `label-sm` (0.6875rem) in `on_surface_variant` (#a3aac4) for metadata.

The hierarchy is simple: Huge numbers for impact, tiny labels for context. Avoid the "middle ground" of font sizes to maintain a distinct editorial look.

## 4. Elevation & Depth: Tonal Layering
In this system, light doesn't come from above; it glows from within.

*   **The Layering Principle:** Instead of shadows, place a `surface_container_lowest` (#000000) card inside a `surface_container_high` (#141f38) container to create "recessed" depth.
*   **Ambient Shadows:** When a float is required (e.g., a dropdown), use a shadow with a `40px` blur at 8% opacity. The shadow color must be a tinted navy (derived from `inverse_on_surface`), never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline_variant` (#40485d) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Apply a `1px` inner-stroke using `outline` (#6d758c) at 10% opacity on glass elements to catch the "light" at the edge of the frosted pane.

## 5. Components: Built for Precision

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `xl` (1.5rem) rounded corners. No border.
*   **Secondary:** `surface_variant` (#192540) background with `on_surface` text. 
*   **Tertiary:** Ghost style. No background, `primary` text. Use for low-emphasis actions like "Cancel" or "View All."

### Cards & Data Lists
*   **Forbid Dividers:** Do not use lines between list items. Use a `12` (3rem) vertical gap or a subtle hover state shift to `surface_bright`.
*   **Rounding:** All cards must use `xl` (1.5rem) rounded corners to soften the "tech" feel and make the dashboard more approachable.

### Input Fields
*   **Default State:** `surface_container_highest` (#192540) fill. No border.
*   **Focus State:** `1px` Ghost Border using `primary`. 
*   **Error State:** Background shift to a very subtle tint of `error_container` (#9f0519).

### Signature Component: The "Glow Metric"
A custom component for this system: A data point where the text color (`primary` or `secondary`) has a soft `text-shadow` of the same color (20% opacity) to simulate a glowing cathode-ray tube or premium neon indicator.

## 6. Do's and Don'ts

### Do:
*   **Use White Space as a Tool:** Use the `16` (4rem) spacing token between major dashboard sections to let the "Obsidian" background breathe.
*   **Asymmetric Layouts:** Place a large display balance on the left, and a smaller, glassmorphic "Recent Activity" card overlapping the right edge to create visual interest.
*   **Intentional Color:** Use `tertiary` (#ffb148) *only* for items requiring immediate action.

### Don't:
*   **No "Boxy" Grids:** Avoid perfectly even columns. Offset elements by the `spacing-4` token to create a bespoke, organic flow.
*   **No High-Contrast Borders:** Never use `outline` at 100% opacity. It shatters the "Lens" illusion.
*   **No Default Grays:** Always use our navy-tinted neutrals (`on_surface_variant`). Pure gray is for legacy systems; we are building the future of finance.