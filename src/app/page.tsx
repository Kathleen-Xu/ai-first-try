import Image from "next/image";

// AI应用数据
const aiApps = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Advanced conversational AI by OpenAI, capable of natural language processing, writing, and programming tasks",
    category: "Conversational AI",
    url: "https://chat.openai.com",
    icon: "🤖"
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI-powered image generation tool that creates high-quality artwork and illustrations from text descriptions",
    category: "Image Generation",
    url: "https://www.midjourney.com",
    icon: "🎨"
  },
  {
    id: 3,
    name: "Claude",
    description: "AI assistant by Anthropic, specializing in writing, analysis, and creative work with enhanced reasoning",
    category: "AI Assistant",
    url: "https://claude.ai",
    icon: "🧠"
  },
  {
    id: 4,
    name: "Notion AI",
    description: "Integrated AI assistant within Notion, helping with writing, summarization, and content organization",
    category: "Productivity",
    url: "https://www.notion.so",
    icon: "📝"
  },
  {
    id: 5,
    name: "GitHub Copilot",
    description: "AI coding assistant providing real-time code suggestions and intelligent autocompletion",
    category: "Programming",
    url: "https://github.com/features/copilot",
    icon: "💻"
  },
  {
    id: 6,
    name: "DALL-E",
    description: "OpenAI's AI image generator that transforms text descriptions into unique and creative visuals",
    category: "Image Generation",
    url: "https://openai.com/dall-e-2",
    icon: "🖼️"
  },
  {
    id: 7,
    name: "Jasper",
    description: "AI writing assistant for creating marketing copy, blog posts, and social media content",
    category: "Content Creation",
    url: "https://www.jasper.ai",
    icon: "✍️"
  },
  {
    id: 8,
    name: "Stable Diffusion",
    description: "Open-source AI image generation model supporting various artistic styles and creative expressions",
    category: "Image Generation",
    url: "https://stability.ai",
    icon: "🎭"
  },
  {
    id: 9,
    name: "Grammarly",
    description: "AI writing assistant providing grammar checking, style suggestions, and writing improvements",
    category: "Writing Tools",
    url: "https://www.grammarly.com",
    icon: "📚"
  },
  {
    id: 10,
    name: "Runway",
    description: "AI video editing and generation platform supporting text-to-video conversion and creative workflows",
    category: "Video Production",
    url: "https://runwayml.com",
    icon: "🎬"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 头部 */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 tracking-tight">
              AI FIRST TRY
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the world's most cutting-edge AI applications and transform your digital experience
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Top AI Applications
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Curated selection of the most powerful and innovative AI tools reshaping the future of technology
          </p>
        </div>

        {/* AI应用网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiApps.map((app) => (
            <div
              key={app.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden hover:scale-105 flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{app.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {app.name}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full">
                      {app.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-8 leading-relaxed flex-grow">
                  {app.description}
                </p>
                
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 mt-auto"
                >
                  Explore Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 底部信息 */}
        <div className="text-center mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              About AI First Try
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              We curate and showcase the most innovative AI applications that are transforming industries and enhancing human capabilities. 
              From conversational AI to creative tools, discover the future of technology at your fingertips.
            </p>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="relative mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              © 2025 AI First Try. Exploring the future of AI, one application at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
