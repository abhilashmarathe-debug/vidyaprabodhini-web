import {
  ArrowUp,
  ChevronDown,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'

const quickReplies = [
  'Courses',
  'Batch details',
  'Fees',
  'Admission enquiry',
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <button
        className="vidya-launcher"
        onClick={() => setOpen(true)}
        aria-label="Open Vidya assistant"
      >
        <MessageCircle size={20} />

        <span>Ask Vidya</span>
      </button>
    )
  }

  return (
    <section className="vidya-widget">

      <header className="vidya-header">

        <div className="vidya-identity">

          <div className="vidya-icon">
            <Sparkles size={17} />
          </div>

          <div>
            <strong>Vidya</strong>
            <span>Vidyaprabodhini assistant</span>
          </div>

        </div>

        <button
          className="vidya-close"
          onClick={() => setOpen(false)}
          aria-label="Close Vidya"
        >
          <ChevronDown size={19} />
        </button>

      </header>

      <div className="vidya-body">

        <div className="vidya-intro">
          <span className="message-label">VIDYA</span>

          <h3>How can I help?</h3>

          <p>
            I can help you find a course, understand
            batch options or start an admission enquiry.
          </p>
        </div>

        <div className="vidya-options">

          {quickReplies.map((reply, index) => (
            <button key={reply}>
              <span>0{index + 1}</span>
              {reply}
              <ArrowUp size={15} />
            </button>
          ))}

        </div>

      </div>

      <footer className="vidya-input">

        <input
          type="text"
          placeholder="Ask Vidya anything..."
        />

        <button aria-label="Send message">
          <ArrowUp size={16} />
        </button>

      </footer>

    </section>
  )
}