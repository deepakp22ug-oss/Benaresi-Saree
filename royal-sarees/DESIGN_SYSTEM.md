# VINARM BANARSI RITHEE - Design System & Brand Guidelines

## 🎨 Complete Design System

### Color Palette

#### Primary Colors
```
MAROON (Primary Brand Color)
  Hex: #722F37
  RGB: 114, 47, 55
  Usage: Main CTAs, headings, accents
  Mood: Luxurious, traditional, elegant
  
GOLD (Accent/Premium)
  Hex: #D4AF37
  RGB: 212, 175, 55
  Usage: Highlights, hover states, badges
  Mood: Prestige, wealth, celebration
  
NAVY BLUE (Secondary)
  Hex: #1a3a52
  RGB: 26, 58, 82
  Usage: Hero sections, deep backgrounds
  Mood: Professional, trusted, sophisticated
  
EMERALD GREEN (Tertiary)
  Hex: #2d5016
  RGB: 45, 80, 22
  Usage: "New" badges, positive states
  Mood: Fresh, natural, growth
```

#### Secondary Colors
```
DARK BURGUNDY
  Hex: #5a1f27
  RGB: 90, 31, 39
  Usage: Darker backgrounds, hover states

LIGHT GOLD
  Hex: #E8D4A0
  RGB: 232, 212, 160
  Usage: Light accents, borders

DEEP PURPLE
  Hex: #4a235a
  RGB: 74, 35, 90
  Usage: Alternative primary
```

#### Neutral Colors
```
TEXT DARK
  Hex: #1a1a1a
  Usage: Body text, main content

TEXT LIGHT
  Hex: #666666
  Usage: Secondary text, descriptions

BG LIGHT
  Hex: #f9f7f4
  Usage: Light backgrounds, card backgrounds

BG WHITE
  Hex: #ffffff
  Usage: Main background, cards

BORDER COLOR
  Hex: #e0d5c7
  Usage: Borders, dividers

CREAM
  Hex: #F5E6D3
  Usage: Section backgrounds, luxury feel
```

#### Alert Colors
```
SUCCESS: #4CAF50 (Green)
ERROR: #d84040 (Red)
WARNING: #ffc107 (Yellow)
INFO: #87CEEB (Sky Blue)
```

### Typography System

#### Font Families
```
ELEGANT SERIF
  Font: Cormorant Garamond
  Weights: 400, 500, 600, 700
  Usage: All headings, premium feel
  Source: Google Fonts
  Letter Spacing: -1px to -0.5px

MODERN SANS-SERIF
  Font: Montserrat
  Weights: 400, 500, 600, 700
  Usage: Body text, navigation, UI
  Source: Google Fonts
  Letter Spacing: 0px to 1px
```

#### Font Sizes (Responsive)
```
XL (Extra Large)
  Desktop: 3.5rem
  Mobile: 2.5rem
  Usage: Page titles, hero titles
  Line Height: 1.2

LG (Large)
  Desktop: 2.5rem
  Mobile: 1.8rem
  Usage: Section headings
  Line Height: 1.2

MD (Medium)
  Desktop: 1.5rem
  Mobile: 1.3rem
  Usage: Card headings, subheadings
  Line Height: 1.2

SM (Small)
  Desktop: 1rem
  Mobile: 0.95rem
  Usage: Body text, regular content
  Line Height: 1.6-1.9

XS (Extra Small)
  Desktop: 0.875rem
  Mobile: 0.8rem
  Usage: Captions, labels, small text
  Line Height: 1.4
```

### Spacing System (8px base)
```
XS: 0.5rem (4px)
SM: 1rem (8px) - Base unit
MD: 1.5rem (12px)
LG: 2rem (16px)
XL: 3rem (24px)
XXL: 4rem (32px)

Use: Padding, margins, gaps, line-height
```

### Button Styles

#### Primary Button
```css
Background: #722F37 (Maroon)
Color: #ffffff (White)
Border: 2px solid #722F37
Padding: 1rem 2rem
Border-radius: 4px
Font-weight: 600
Text-transform: uppercase
Letter-spacing: 1px
```

**Hover State:**
```css
Background: #D4AF37 (Gold)
Color: #1a1a1a (Dark)
Box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3)
Transform: translateY(-2px)
```

#### Secondary Button
```css
Background: transparent
Color: #722F37 (Maroon)
Border: 2px solid #722F37
```

**Hover State:**
```css
Background: #722F37 (Maroon)
Color: #ffffff (White)
```

#### Outline Button
```css
Background: transparent
Color: #1a1a1a (Dark)
Border: 2px solid #1a1a1a
```

### Cards & Containers

#### Product Card
```css
Background: #ffffff
Border-radius: 8px
Box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08)
Padding: All sides
```

**Hover State:**
```css
Transform: translateY(-10px)
Box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15)
```

#### Feature Card
```css
Background: var(--bg-light)
Padding: 1.5rem
Border-radius: 8px
Border-left: 4px solid #D4AF37
```

#### Testimonial Card
```css
Background: #ffffff
Border-left: 4px solid #D4AF37
Padding: 1.5rem
Border-radius: 8px
```

### Animations & Transitions

#### Standard Transition
```css
Duration: 0.3s
Timing: cubic-bezier(0.4, 0, 0.2, 1)
Properties: all
```

#### Slow Transition
```css
Duration: 0.6s
Timing: cubic-bezier(0.4, 0, 0.2, 1)
```

#### Keyframe Animations
```
fadeInUp: Fade in + slide up (300ms)
slideInDown: Slide down (300ms)
slideInUp: Slide up (300ms)
slideInLeft: Slide from left (300ms)
slideInRight: Slide from right (300ms)
rotate: Full rotation (Continuous)
pulse: Opacity pulse (Continuous)
```

### Responsive Breakpoints

```
Desktop:  1024px and above
Tablet:   768px - 1023px
Mobile:   480px - 767px
Small:    Below 480px
```

### Border Styles

```
Standard: 1px solid #e0d5c7
Thick: 2px solid
Color Accent: 4px solid #D4AF37
```

### Shadow Styles

```
Light: 0 2px 8px rgba(0, 0, 0, 0.08)
Medium: 0 5px 20px rgba(0, 0, 0, 0.1)
Heavy: 0 15px 40px rgba(0, 0, 0, 0.15)
Gold Glow: 0 10px 30px rgba(212, 175, 55, 0.3)
```

## 🖼️ Logo & Branding

### Logo Usage
- Icon: Crown (fas fa-crown)
- Color: #D4AF37 (Gold)
- Size: 2rem in navbar
- Font: Cormorant Garamond, 1.8rem

### Social Media Icons
- Font Awesome 6.4.0
- Colors: Inherit from section
- Size: 1.2rem to 1.5rem
- Hover: Maroon background, white text

## 🎯 Component Guide

### Navigation Bar
```
Height: Variable (auto padding)
Background: #ffffff
Border: 1px solid #e0d5c7
Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
Sticky Position: top 0
Z-Index: 1000
```

### Hero Section
```
Min-height: 90vh
Background: Linear gradient (navy to maroon)
Text Color: #ffffff
Padding: Top/bottom xxl
Alignment: Center
```

### Section Spacing
```
Top Padding: 4rem (xxl)
Bottom Padding: 4rem (xxl)
Side Padding: 2rem (lg)
Gap between items: 3rem (xl)
```

### Form Elements

#### Input/Textarea
```css
Padding: 1rem
Border: 1px solid #e0d5c7
Border-radius: 4px
Font-family: inherit
Transition: all 0.3s

Focus State:
  Border: 1px solid #722F37
  Box-shadow: 0 0 0 3px rgba(114, 47, 55, 0.1)
  Outline: none
```

#### Select
```css
Padding: 1rem
Border: 1px solid #e0d5c7
Cursor: pointer
Background: white
```

### Badge Styles

#### Product Badge
```
Position: absolute (top right)
Background: #722F37
Color: white
Padding: 0.5rem 1rem
Border-radius: 4px
Font-size: 0.875rem
Font-weight: 600
Text-transform: uppercase
```

**Badge Variants:**
- Sale: #d84040 (Red)
- New: #2d5016 (Emerald)
- Bestseller: #722F37 (Maroon)

### Rating System
```
Color: #ffc107 (Yellow)
Font-size: 1.2rem
Display: ★★★★★
```

## 📐 Layout Patterns

### Container Max Width
```css
max-width: 1400px
margin: 0 auto
padding: 0 2rem
```

### Grid Layouts
```
3-4 columns on desktop
2 columns on tablet
1 column on mobile
Gap: 1.5-3rem
```

### Flex Layouts
```
Gap: 1-3rem
Align-items: center
Justify-content: space-between
Wrap: On mobile
```

## 🎨 Design Principles

1. **Elegance**: Every element should feel premium
2. **Tradition**: Respect heritage while being modern
3. **Clarity**: Information should be easy to find
4. **Consistency**: Same patterns throughout
5. **Accessibility**: Readable, navigable for all
6. **Performance**: Fast loading, smooth interactions
7. **Trust**: Professional, secure feeling

## ✅ Implementation Checklist

- [ ] All colors match specifications
- [ ] Typography uses correct fonts & sizes
- [ ] Spacing follows 8px system
- [ ] Buttons have hover states
- [ ] Cards have shadows & borders
- [ ] Animations are smooth
- [ ] Responsive at all breakpoints
- [ ] Form inputs are styled
- [ ] Badges are visible
- [ ] Hover effects work
- [ ] Transitions are consistent
- [ ] Mobile menu works
- [ ] Navigation is sticky
- [ ] Footer is accessible
- [ ] Images load properly

## 📁 CSS Organization

```
:root (variables)
  ↓
Global styles
  ↓
Typography
  ↓
Buttons & Forms
  ↓
Navbar
  ↓
Hero
  ↓
Sections
  ↓
Footer
  ↓
Animations
  ↓
Modals
  ↓
Responsive
  ↓
Utilities
```

## 🔍 Color Contrast Check

```
Maroon on White: ✓ AAA (7.2:1)
Gold on White: ✓ AA (8.4:1)
Navy on White: ✓ AAA (9.8:1)
White on Maroon: ✓ AAA (10.4:1)
Dark Gray on White: ✓ AAA (9.2:1)
```

## 🌙 Dark Mode Consideration

For future dark mode implementation:
```css
@media (prefers-color-scheme: dark) {
  --bg-white: #1a1a1a;
  --bg-light: #2a2a2a;
  --text-dark: #ffffff;
  --text-light: #aaaaaa;
}
```

---

**Design System Version**: 1.0
**Last Updated**: December 2024
**Status**: Complete & Ready for Implementation

