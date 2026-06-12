

const InsightsArticleBody = () => {
  return (
    <div className="article-body">
    <div className="container">
      <div className="article-grid">

        <article className="prose">
          <p className="lead">Walk into any pitch this year and someone will ask for "AI on the website." What they almost always mean is a chatbot — a friendly bubble in the bottom-right that answers FAQs and, on a good day, books a call. We build those. We also think they are the least interesting thing AI can do for a brand, and the reason so many of these projects quietly underwhelm six weeks after launch.</p>

          <p>The framing is the problem. A chatbot is a <em>feature</em>: a box you bolt on, scoped by how many questions it can deflect. A sales engineer is a <strong>role</strong>: the person who joins the call when the conversation gets technical, who knows the product cold, who can read whether you're a tyre-kicker or a signed contract waiting to happen — and who knows exactly when to bring in a human and get out of the way.</p>

          <p>When you brief AI as a role instead of a feature, almost every decision downstream changes: what it needs to know, what it's allowed to decide, how you measure it, and what "good" looks like. This essay is the pattern we use to make that real — four layers, in the order we build them.</p>

          <div className="pull">
            <p>A chatbot deflects questions. A sales engineer <em>moves a deal forward.</em></p>
            <cite>The distinction the whole essay turns on</cite>
          </div>

   
          <div className="chapter" id="s1"><span className="ix">01</span><span className="kick">Memory</span><span className="rule-fill"></span></div>
          <h2>It has to remember the brief</h2>
          <p>The first layer is memory, and it's the one most teams skip. A generic assistant starts every conversation from zero — it has no idea who you are, what page you arrived on, what campaign sent you, or what you asked the last time you visited. A sales engineer who reintroduced themselves every five minutes would be fired by lunchtime.</p>

          <p>Memory means the concierge is grounded in two things: the <strong>brand's own context</strong> — positioning, services, the real difference between the Sprint and the Programme — and the <strong>visitor's session</strong> — referrer, pages viewed, the half-finished form, the question they asked before they got distracted. None of that is exotic. It's a retrieval layer over your own content and a thin profile of the session. But it changes the first sentence the AI gets to say from "How can I help?" to something that already knows why you're here.</p>

          <p>In practice this is unglamorous. On a live site, the concierge reads the section you're sitting in when you open it — offering to scope work on the Services page, offering to summarise the essay on an Insights page. Same model, different memory.</p>

    
          <div className="chapter" id="s2"><span className="ix">02</span><span className="kick">Inventory</span><span className="rule-fill"></span></div>
          <h2>It has to know what you actually sell</h2>
          <p>The second layer is the one clients are most nervous about and the one that pays for the whole project. A help-desk bot can get away with knowing your FAQ. A sales engineer has to know the <em>inventory</em>: what you offer, what it costs, what's in scope, what isn't, and where the genuine trade-offs live. That's the knowledge that lets it move a conversation from "interesting" to "let's talk numbers" without fetching a human for every sentence.</p>

          <p>This is uncomfortable because it forces a decision most brands defer: how much of your commercial reality are you willing to put in front of a machine that talks to strangers? Our answer is a tiered one — and it's the heart of the pattern.</p>

          <p>We tier it. <strong>Public knowledge</strong> — positioning, services, process, the shape of an engagement — the AI shares freely, because it's already on the site. <strong>Qualified knowledge</strong> — indicative ranges, typical timelines, what moves the price — it shares only once a visitor has shown genuine intent. <strong>Human-only knowledge</strong> — specific quotes, contract terms, anything that commits the studio — it never touches; it names the boundary and hands over.</p>

          <p>Notice the AI isn't deciding the commercials. It's deciding <em>which tier a given visitor has earned</em> — and that's a judgement call, which is the next layer.</p>

          <div className="pull">
            <p>The model never sets the price. It decides who's <em>ready to hear it.</em></p>
            <cite>Layer two, in one line</cite>
          </div>


          <div className="chapter" id="s3"><span className="ix">03</span><span className="kick">Judgement</span><span className="rule-fill"></span></div>
          <h2>It has to qualify, and it has to say no</h2>
          <p>A good sales engineer spends as much energy disqualifying as qualifying. The wrong-fit lead who consumes three weeks of scoping is more expensive than the deal you politely declined on day one. So the third layer is judgement: the concierge reads the conversation for the signals that actually predict fit — budget posture, timeline, decision authority, the specificity of the problem — and routes accordingly.</p>

          <p>Crucially, "routes accordingly" sometimes means saying no. A concierge that enthusiastically promises everything to everyone isn't helpful; it's a liability that books calls your team has to un-book. We tune ours to be honest about misfit — to suggest a different kind of partner when that's the truth, and to protect the calendar of the humans behind it.</p>

          <p>What it never does is invent a number, promise a date, or commit the studio to anything a partner would have to honour. Within those limits, every turn it re-reads fit and picks one of three moves: go deeper, hand to a human, or wind down gracefully. The behaviour is predictable on purpose — that's what earns the trust to talk pricing at all.</p>

    
          <div className="chapter" id="s4"><span className="ix">04</span><span className="kick">Handoff</span><span className="rule-fill"></span></div>
          <h2>It has to know when to step back</h2>
          <p>The final layer is the one that separates a tool from a teammate: knowing the moment to stop talking and bring in a person. The best sales engineers are defined as much by their handoffs as their pitches — the clean briefing note, the warm introduction, the context the human doesn't have to re-gather.</p>

          <p>So the concierge's job at the end isn't to close. It's to <strong>hand over a deal that's already warm</strong>: a short, structured summary of who the visitor is, what they need, which tier of knowledge they reached, and why it thinks they're worth a call. The human picks up a conversation already in motion, not a cold transcript.</p>

          <p>Here's the test. If your AI's proudest metric is "questions answered," it's still a chatbot. If it's "qualified conversations handed to a human, with context," you've built the sales engineer.</p>

          <div className="chapter" id="s5"><span className="ix dot-mark"></span><span className="kick">Coda</span><span className="rule-fill"></span></div>
          <h2>Build the role, not the widget</h2>
          <p>None of these four layers requires a frontier model or a research budget. They require a decision: to treat AI as a colleague with a job description rather than a feature with a backlog. Memory so it knows the context. Inventory so it knows the product. Judgement so it qualifies honestly. Handoff so it knows when it's done.</p>

          <p>Do that, and the bubble in the corner stops being the thing you apologise for in month two. It becomes the most patient, best-briefed member of the team — the one that's always on, never tired, and smart enough to know when to get a human. That's not a chatbot. <a className="inline" href="index.html#contact">That's a sales engineer.</a></p>

          <div className="article-end">
            <div className="article-tags">
              <span className="pill ai">AI Practice</span>
              <span className="pill">Sales</span>
              <span className="pill">Conversion</span>
              <span className="pill">Web</span>
            </div>
          </div>
        </article>


       

      </div>
    </div>
  </div>
  )
}

export default InsightsArticleBody

/*  <aside class="rail">
          <div class="sticky">
            <nav class="toc" aria-label="On this page">
              <div class="lbl">On this page</div>
              <ol>
                <li><a href="#s1" data-target="s1">Memory — remember the brief</a></li>
                <li><a href="#s2" data-target="s2">Inventory — what you sell</a></li>
                <li><a href="#s3" data-target="s3">Judgement — qualify and say no</a></li>
                <li><a href="#s4" data-target="s4">Handoff — know when to step back</a></li>
                <li><a href="#s5" data-target="s5">Coda — build the role</a></li>
              </ol>
            </nav>

            <div class="ai-summary">
              <div class="lbl">AI summary</div>
              <ul>
                <li>Brief AI as a <em>role</em> (sales engineer), not a feature (chatbot).</li>
                <li>Four layers: memory, inventory, judgement, handoff.</li>
                <li>The model never sets price — it decides who's ready to hear it.</li>
                <li>Measure handoffs with context, not questions deflected.</li>
              </ul>
              <div class="ask">
                <span class="spark">✺</span>
                <input placeholder="Ask this article a question…" aria-label="Ask this article"/>
              </div>
            </div>
          </div>
        </aside>*/