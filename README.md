# AI Career Coach

AI Career Coach is a comprehensive platform designed to help professionals accelerate their career growth. It combines AI-powered tools for resume building, cover letter generation, interview preparation, and industry insights to provide personalized guidance tailored to your industry and expertise.

## Features

- **AI-Powered Career Guidance**: Get personalized career advice and insights powered by advanced AI technology.
- **Smart Resume Creation**: Generate ATS-optimized resumes with AI assistance.
- **Cover Letter Generator**: Create compelling, tailored cover letters for job applications.
- **Interview Preparation**: Practice with role-specific questions and get instant feedback to improve your performance.
- **Industry Insights**: Stay ahead with real-time industry trends, salary data, and market analysis.
- **Progress Tracking**: Monitor improvements with detailed performance analytics.

## Project Structure

The project is structured as follows:


### Key Directories

- **`actions/`**: Contains server-side logic for handling user data, generating AI insights, and managing resources like resumes and cover letters.
- **`app/`**: Houses the Next.js application, including pages, components, and layouts.
- **`components/`**: Reusable UI components such as buttons, cards, and forms.
- **`data/`**: Static data like testimonials, FAQs, and feature descriptions.
- **`hooks/`**: Custom React hooks for managing state and fetching data.
- **`lib/`**: Utility functions and configurations, including Prisma and AI integrations.
- **`prisma/`**: Database schema and Prisma client configuration.
- **`public/`**: Static assets like images and icons.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ai-career-coach.git
   cd ai-career-coach

2. Install dependencies:
    npm install

3. Set up environment variables:
    Create a .env file in the root directory.
    Add the required environment variables (e.g., GEMINI_API_KEY, database credentials).

4. Run the development server:
    npm run dev

5. Technologies Used

    Framework: Next.js
    Styling: Tailwind CSS
    Database: Prisma with PostgreSQL
    Authentication: Clerk
    AI Integration: Google Generative AI (Gemini API)
    State Management: React Hooks
    PDF Generation: html2pdf.js

6. Features in Detail
    Resume Builder
    Create ATS-optimized resumes with AI assistance.
    Edit and preview resumes in Markdown format.
    Download resumes as PDFs.
    Cover Letter Generator
    Generate tailored cover letters based on job descriptions.
    Edit and preview cover letters in Markdown format.
    Interview Preparation
    Practice with AI-generated technical interview questions.
    Receive instant feedback and improvement tips.
    Industry Insights
    Get real-time insights into industry trends, salary ranges, and in-demand skills.
    Weekly updates to ensure relevance.

7. Acknowledgments
    Clerk for authentication.
    Google Generative AI for AI-powered insights.
    Tailwind CSS for styling.
    Prisma for database management.