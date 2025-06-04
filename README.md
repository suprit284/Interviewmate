This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

for better understanding of the project workflow refer to the image: 


![Architecture Diagram](assets/Interviewmate%20project%20workflow.png)


## 🛠️ Technologies & Features Used

- **User Authentication:** Implemented using **Firebase Authentication** for secure and seamless login/signup experiences.
- **AI Interview Generation & Interaction:** Integrated with **Vapi AI** models to power:
  - An AI assistant for generating personalized interview questions.
  - A real-time AI interviewer that conducts voice-based mock interviews.
- **Interview Analysis & Feedback:** After the interview, user performance data is analyzed by AI to generate a detailed performance report, helping users identify strengths and areas for improvement.

---

## 🔄 Application Flow

1. **User Authentication:** Users sign in or register via Firebase.
2. **Interview Session:** Users initiate an AI-driven interview where the AI interviewer interacts vocally, simulating a real interview environment.
3. **Transcript Capture:** The conversation is transcribed and stored for analysis.
4. **AI Feedback Generation:** Post-interview, AI analyzes the transcript and performance metrics to produce a comprehensive feedback report.
5. **Results & Improvement:** Users can review their feedback to prepare better for real interviews.

## Environment Setup

This project requires Firebase Authentication and VAPI AI integration to function properly.  
To run the project locally, you need to create your own environment variables.

### Steps to configure:

1. Create a `.env` file in the root directory of the project (this file should **not** be committed).

2. Add the following variables with your own credentials:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# VAPI AI
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key

Obtain your Firebase config values from your Firebase Console project settings.

Obtain your VAPI AI API key by signing up at vapi.ai and generating an API key.

Restart the development server after creating the .env file to load the variables.

Note: Without these environment variables, the authentication and AI interview features will not work.
