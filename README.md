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
