# Babble Web

Babble is a responsive web application built with React, Vite, and Tailwind CSS.

The website supports both English and Arabic, including RTL layouts, Arabic localisation, and dynamic translation using the DeepL Translation API through an Express.js backend server.

## Features

- Responsive React + Vite frontend
- Tailwind CSS styling
- English and Arabic language support
- RTL layout support for Arabic
- DeepL API translation
- Express.js translation server
- Arabic localisation for Babble branding
- Arabic-Indic number formatting
- Animated hero and UI elements
- Live-room inspired interface
- Gifts and coin sections
- VIP membership section
- Host onboarding section
- Download section
- Support and feedback form
- Responsive footer and navigation

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- JavaScript
- CSS animations

### Backend

- Node.js
- Express.js
- CORS
- dotenv
- DeepL Translation API

---

## Arabic Translation

Babble supports both English and Arabic.

The Arabic version uses the DeepL Translation API together with an Express.js backend server.

The React frontend does not call DeepL directly. This keeps the DeepL API key secure and prevents it from being exposed in the browser.

### Translation Flow

```text
React Component
      ↓
LanguageContext
      ↓
translateSection()
      ↓
POST /api/translate
      ↓
Express.js Server
      ↓
DeepL Translation API
      ↓
Arabic Translation
      ↓
React Component
