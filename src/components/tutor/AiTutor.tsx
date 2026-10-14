import React, { useState, useRef, useEffect } from 'react';
import { Language, ChatMessage } from '../../types';
import { getTranslation } from '../../data/translations';
import { findTutorAnswer, welcomeMessages, starterQuestions } from '../../data/tutorKnowledge';
import { 
  Bot, 
  Send, 
  User, 
  RotateCcw, 
  Copy, 
  Check 
} from 'lucide-react';

interface AiTutorProps {
  lang: Language;
}

export const AiTutor: React.FC<AiTutorProps> = ({ lang }) => {
  const t = getTranslation(lang);

  const getInitialMessages = (currentLang: Language): ChatMessage[] => [
    {
      id: 'msg-welcome',
      sender: 'tutor',
      text: welcomeMessages[currentLang] || welcomeMessages.en,
      timestamp: 'Just now',
      category: 'ArthMitra Welcome',
      followUps: starterQuestions[currentLang] || starterQuestions.en,
    }
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(() => getInitialMessages(lang));
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // When language changes, update welcome message if chat was fresh
  useEffect(() => {
    setMessages(prev => {
      if (prev.length <= 1) {
        return getInitialMessages(lang);
      }
      return prev;
    });
  }, [lang]);

  // Auto-scroll chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText.trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    setTimeout(() => {
      const result = findTutorAnswer(query, lang);
      const tutorMsg: ChatMessage = {
        id: `tut-${Date.now()}`,
        sender: 'tutor',
        text: result.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        category: result.category,
        followUps: result.followUps
      };
      setMessages(prev => [...prev, tutorMsg]);
      setIsLoading(false);
    }, 600);
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages(getInitialMessages(lang));
  };

  const activeStarters = starterQuestions[lang] || starterQuestions.en;

  return (
    <div className="py-10 md:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="border-b border-[#E8E3D9] pb-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#153E2B] bg-[#153E2B]/5 px-3 py-1 rounded-full border border-[#153E2B]/10">
              <Bot className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.tutorName} · AI Financial Tutor</span>
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl font-bold text-[#153E2B]">
              {t.tutorName}
            </h1>
            <p className="text-xs sm:text-sm text-[#4E5E56]">
              {t.tutorSubtitle} — Ask questions in your native language. Free, friendly, and jargon-free.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetChat}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DCD5C9] bg-white text-xs font-semibold text-[#5C6B63] hover:text-[#153E2B] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Chat</span>
            </button>
          </div>
        </div>

        {/* Educational Trust Badge */}
        <div className="mt-4 p-3 bg-white rounded-xl border border-[#E5DFD3] flex items-center justify-between gap-3 text-xs text-[#52635B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#206945] animate-pulse" />
            <span className="font-medium text-[#192620]">
              Verified Educational Mentor:
            </span>
            <span className="hidden sm:inline text-[#5C6B63]">
              Grounded in SEBI Investor Charter. Multilingual learning across 13 Indian languages.
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[#8C7A52] uppercase shrink-0">
            100% Unbiased
          </span>
        </div>
      </div>

      {/* Suggested Starter Chips */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-[#7A8A82]">
          Suggested:
        </span>
        {activeStarters.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(chip)}
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-[#DDD7CB] text-[#34423B] hover:border-[#153E2B] hover:text-[#153E2B] transition-all shadow-xs"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Main Chat Container */}
      <div className="bg-white rounded-2xl border border-[#E5DFD3] shadow-xs flex flex-col h-[580px] overflow-hidden">
        
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-[#FCFBF9]">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';

            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isUser 
                    ? 'bg-[#153E2B] text-white' 
                    : 'bg-[#C5A059] text-[#0E281C]'
                }`}>
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Body */}
                <div className={`space-y-2 max-w-[85%] ${isUser ? 'items-end' : ''}`}>
                  <div className={`p-4 sm:p-5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-[#153E2B] text-white rounded-tr-xs'
                      : 'bg-white border border-[#E5DFD3] text-[#192620] shadow-xs rounded-tl-xs'
                  }`}>
                    {/* Render message lines */}
                    <div className="space-y-2 whitespace-pre-line font-normal">
                      {msg.text}
                    </div>

                    {/* Category tag & Copy action */}
                    {!isUser && (
                      <div className="pt-3 mt-3 border-t border-[#F0ECE2] flex items-center justify-between text-[11px] text-[#718078]">
                        <span>{msg.category || 'ArthMitra Guidance'}</span>
                        <button
                          onClick={() => handleCopyText(msg.id, msg.text)}
                          className="inline-flex items-center gap-1 hover:text-[#153E2B] transition-colors"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#206945]" />
                              <span className="text-[#206945]">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Follow up prompt suggestions */}
                  {!isUser && msg.followUps && msg.followUps.length > 0 && (
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {msg.followUps.map((fu, fIdx) => (
                        <button
                          key={fIdx}
                          onClick={() => handleSendMessage(fu)}
                          className="text-[11px] text-[#153E2B] font-medium bg-[#FAF8F5] hover:bg-[#EFECE5] border border-[#E0DBD0] px-2.5 py-1 rounded-md transition-colors"
                        >
                          → {fu}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className={`text-[10px] text-[#8C9C93] px-1 ${isUser ? 'text-right' : ''}`}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing state */}
          {isLoading && (
            <div className="flex gap-3 max-w-xl">
              <div className="w-8 h-8 rounded-lg bg-[#C5A059] flex items-center justify-center shrink-0 text-[#0E281C]">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-[#E5DFD3] p-4 rounded-2xl shadow-xs rounded-tl-xs flex items-center gap-2 text-xs text-[#5C6B63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#153E2B] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#153E2B] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#153E2B] animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 font-medium">
                  {t.tutorName} is preparing a simple explanation...
                </span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#E8E3D9]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Ask ${t.tutorName} anything in your language...`}
              className="flex-1 bg-[#FAF8F5] border border-[#DDD7CB] focus:border-[#153E2B] focus:ring-1 focus:ring-[#153E2B] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#192620] placeholder-[#87968E] outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="bg-[#153E2B] hover:bg-[#0E2C1E] disabled:bg-[#CCC6BA] disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors shadow-xs shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[11px] text-[#7A8A82] px-1 pt-2">
            <span>Friendly Educational Companion</span>
            <span>Non-Commercial Mentoring</span>
          </div>
        </div>

      </div>

    </div>
  );
};
