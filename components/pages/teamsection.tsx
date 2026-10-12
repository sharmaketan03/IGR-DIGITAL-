'use client';

const TEAM = [
  { name: 'Dnyanesh Pansal', role: 'Marketing Executive', img: 'https://i.pravatar.cc/300?img=12' },
  { name: 'Lakshay Dua', role: 'Marketing Executive', img: 'https://i.pravatar.cc/300?img=13' },
  { name: 'Muskan Sharma', role: 'Marketing Executive', img: 'https://i.pravatar.cc/300?img=45' },
  { name: 'Jitendra Kumre', role: 'Sr. Developer', img: 'https://i.pravatar.cc/300?img=51' },
  { name: 'Pooja Jangir', role: 'HR Executive', img: 'https://i.pravatar.cc/300?img=47' },
];

export default function MeetTheExperts() {
  return (
    <section className="experts-section">
      <button className="arrow-btn arrow-left" aria-label="Previous team members">
        &#8249;
      </button>
      <button className="arrow-btn arrow-right" aria-label="Next team members">
        &#8250;
      </button>

      <div className="eyebrow">
        <span className="dot" /> MEET THE EXPERTS <span className="dot" />
      </div>

      <h1>
        Know the Team Behind <span className="accent">Our Success</span>
      </h1>

      <div className="divider">
        <span />
        <span className="active" />
        <span />
      </div>

      <p className="desc">
        Great results come from a great team. The W3era family includes digital strategists, SEO
        experts, PPC specialists, content creators, and web developers passionate about driving
        meaningful growth for clients worldwide.
      </p>
      <p className="subhead">Meet the experts who make it happen!</p>

      <div className="team-grid">
        {TEAM.slice(0, 3).map((member) => (
          <div className="member" key={member.name}>
            <div className="avatar-wrap">
              <img src={member.img} alt={member.name} loading="lazy" decoding="async" />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
        <div className="row2">
          {TEAM.slice(3).map((member) => (
            <div className="member" key={member.name}>
              <div className="avatar-wrap">
                <img src={member.img} alt={member.name} loading="lazy" decoding="async" />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" style={{ marginTop: 50 }}>
        <span />
        <span className="active" />
        <span />
        <span />
      </div>

      <div className="scroll-hint">
        <div className="icon">
          &#8592; <span className="mouse-icon" /> &#8594;
        </div>
        Scroll to see more team members
      </div>

      <style jsx>{`
        .experts-section {
          --google-red: #ea4335;
          --ink: #14171f;
          --muted: #6b7280;
          --line: #e5e7eb;
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 60px 50px;
          text-align: center;
          position: relative;
          font-family: 'Segoe UI', Arial, sans-serif;
          color: var(--ink);
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--google-red);
          font-weight: 700;
          letter-spacing: 1.5px;
          font-size: 14px;
          margin-bottom: 18px;
        }
        .eyebrow .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--google-red);
          display: inline-block;
        }
        h1 {
          font-size: 46px;
          font-weight: 800;
          margin: 0 0 18px;
          line-height: 1.15;
          color: var(--ink);
        }
        h1 .accent {
          color: var(--ink);
        }
        .divider {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 24px;
        }
        .divider span {
          width: 26px;
          height: 4px;
          border-radius: 4px;
          background: var(--line);
          transition: all 0.25s ease;
        }
        .divider span.active {
          background: var(--google-red);
          width: 34px;
        }
        p.desc {
          max-width: 700px;
          margin: 0 auto 22px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
        }
        p.subhead {
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 44px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 44px 30px;
          max-width: 900px;
          margin: 0 auto;
        }
        .row2 {
          grid-column: span 3;
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 4px;
        }
        .row2 .member {
          width: calc(38.33% - 20px);
        }
        .member {
          text-align: center;
        }
        .avatar-wrap {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 3px solid var(--google-red);
          padding: 6px;
          margin: 0 auto 18px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .avatar-wrap:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(234, 67, 53, 0.25);
        }
        .avatar-wrap :global(img) {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }
        .member h3 {
          font-size: 19px;
          margin: 0 0 4px;
          font-weight: 700;
        }
        .member p {
          margin: 0;
          color: var(--google-red);
          font-weight: 600;
          font-size: 14px;
        }
        .arrow-btn {
          position: absolute;
          top: 420px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid var(--line);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--google-red);
          font-size: 20px;
          user-select: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .arrow-btn:hover {
          background: var(--google-red);
          color: #fff;
        }
        .arrow-left {
          left: 0;
        }
        .arrow-right {
          right: 0;
        }
        .scroll-hint {
          margin-top: 50px;
          color: var(--muted);
          font-size: 14px;
        }
        .scroll-hint .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          color: var(--google-red);
          font-weight: 700;
          margin-bottom: 8px;
        }
        .mouse-icon {
          width: 22px;
          height: 34px;
          border: 2px solid var(--google-red);
          border-radius: 12px;
          position: relative;
          display: inline-block;
        }
        .mouse-icon::after {
          content: '';
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 8px;
          background: var(--google-red);
          border-radius: 2px;
        }
        @media (max-width: 800px) {
          .experts-section {
            padding: 50px 20px;
          }
          h1 {
            font-size: 32px;
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px 16px;
          }
          .row2 {
            grid-column: span 2;
          }
          .row2 .member {
            width: calc(50% - 8px);
          }
          .avatar-wrap {
            width: 110px;
            height: 110px;
          }
          .arrow-btn {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          .row2 {
            grid-column: span 1;
            flex-direction: column;
            align-items: center;
          }
          .row2 .member {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}