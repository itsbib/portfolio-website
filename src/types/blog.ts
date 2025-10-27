export type BlogContentBlock =
  | { type: "heading"; level: 1 | 2; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt?: string };

export interface IBlogs {
  title: string;
  description: string;
  writtenDate: string;
  readTime?: string;
  slug?: string;
  content?: BlogContentBlock[];
}

export const blogs: IBlogs[] = [
  {
    title: "Is Using AI Cheating?",
    slug: "use-of-ai",
    readTime: "5 minutes",
    writtenDate: "1 Oct, 2025",
    description:
      "We use AI for almost everything these days: from coding and writing reports to upscaling photos, generating videos, or even crafting flirt texts and breakup statuses.",
    content: [
      {
        type: "heading",
        level: 1,
        text: "But here’s the question: is AI restricting our learning curve?",
      },
      {
        type: "paragraph",
        text: "We often trust AI tools like ChatGPT or DeepSeek so much that we hardly dive into the content ourselves. So, is AI really helping us, or are we unknowingly creating a new kind of dependency?",
      },
      { type: "heading", level: 1, text: "My Take on This" },
      {
        type: "paragraph",
        text: "Honestly, using AI is both productive and effective. But I do have a few suggestions based on my own experience.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Use AI, But Don’t Let It Think for You",
      },
      {
        type: "paragraph",
        text: "As a developer, I use AI all the time for debugging and fixing errors, it’s insanely fast. But rather than just copying and pasting the solution, I always try to understand what went wrong and why the fix works.Sure, it might take a few minutes (or even hours), but it’s worth it. That’s where real learning happens. Plus, let’s be honest AI-generated code isn’t always the most optimal.",
      },
      {
        type: "paragraph",
        text: "And then there’s vibe coding. It took me years to learn solid skills, but one of my juniors can create stunning websites in minutes with AI. Impressive, right? But is the UI/UX truly better? Maybe, but something feels missing. That human touch.Sometimes I think, “Should I just stop coding from scratch and vibe-code like everyone else?” At least I wouldn’t have to bother my seniors for bug fixes! ",
      },
      {
        type: "heading",
        level: 2,
        text: "2. Writing Reports Has Never Been Easier (But…)",
      },
      {
        type: "paragraph",
        text: "Writing theses or reports used to take ages. Now? It’s like one-tenth the time, all thanks to AI tools like ChatGPT (yes, I said it twice for a reason ).During my engineering days, I used AI tools too. But I could still feel the difference between something fully written by AI and something refined by a human. That’s why refactoring is key. Let AI help, but make sure your voice and thought process shine through.",
      },
      {
        type: "heading",
        level: 2,
        text: "3. AI in Creativity: From Upscaling to Object Removal",
      },
      {
        type: "paragraph",
        text: "“I love this photo, but I wish it was higher quality.” Boom, AI upscalers to the rescue. Or maybe you want to remove that one random guy in the background (Samsung’s object remover? Still unmatched). And yeah, you could even add a missing friend into a group photo. But let’s be honest, that doesn’t add them to your memories. AI helps, no doubt. But for me, it’s a tool  not a substitute. Especially for photos and videos, I feel the same way: AI can enhance a moment, not create one.",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Everyday AI: Helpful but Homogenized",
      },
      {
        type: "paragraph",
        text: "Outside of work, we use AI for practically everything: finding new cafes, getting movie suggestions, or even asking it for text ideas when we don’t know what to say. It’s great, but it also generalizes us. Everyone starts to sound the same: similar texts, similar tones. Humans are unique; our styles, emotions, and quirks are what make us us. Finding a new hangout spot with friends on our own gives us memories AI simply can’t replicate. At this rate, by 2030 we might all be speaking like chatbots!",
      },
      {
        type: "heading",
        level: 2,
        text: "5. Learning with AI: Smart, But Shallow",
      },
      {
        type: "paragraph",
        text: "AI is awesome for exploring new topics or verifying facts. But when it comes to real learning, it’s a different story. For example, if I’m learning a new framework like NestJS, I prefer reading the official docs instead of relying solely on AI. The understanding you gain from raw documentation is deeper and more fundamental. AI knows everything from the internet, but sometimes it still misses the essence. It can summarize, explain, and teach, but the learning experience it offers isn’t always complete. And with AI advancing so fast from writing books to prescribing medicines, we have to ask: what happens to the professionals? What about the doctors?",
      },
      { type: "heading", level: 2, text: "" },
      { type: "heading", level: 2, text: "Final Thoughts" },

      {
        type: "paragraph",
        text: "AI is not cheating. It’s evolving how we work, learn, and create. But it’s up to us to use it wisely. Relying on it blindly might make us efficient, but not necessarily smarter. So, let AI assist you, not replace you.",
      },
      {
        type: "paragraph",
        text: "\n \n P.S. Yeah… this post was refactored using ChatGPT too. \n ",
      },
    ],
  },
];
