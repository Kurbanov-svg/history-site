"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        {/* ABOUT */}
        <div style={styles.column}>
          <h4 style={styles.title}>ABOUT</h4>
          <ul style={styles.list}>
            <li style={styles.item}>
              The Louvre in France and around the world
            </li>
            <li style={styles.item}>Visitor rules</li>
            <li style={styles.item}>Loans and long-term loans</li>
          </ul>
        </div>

        {/* OUR WEBSITES */}
        <div style={styles.column}>
          <h4 style={styles.title}>OUR WEBSITES</h4>
          <ul style={styles.list}>
            <li style={styles.item}>Online ticketing service</li>
            <li style={styles.item}>Online Boutique</li>
            <li style={styles.item}>Collection</li>
            <li style={styles.item}>Corpus</li>
            <li style={styles.item}>Donate</li>
            <li style={styles.item}>Press</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div style={styles.column}>
          <h4 style={styles.title}>CONTACT</h4>
          <ul style={styles.list}>
            <li style={styles.item}>FAQ</li>
            <li style={styles.item}>Contact us</li>
            <li style={styles.item}>Give us your feedback!</li>
            <li style={styles.item}>Jobs (in French)</li>
            <li style={styles.item}>Private event and film shoots</li>
          </ul>
        </div>

        {/* SOCIAL + MEMBERSHIP */}
        <div style={{ ...styles.column, gap: 24 }}>
          <h4 style={styles.title}>FOLLOW US</h4>
          <div style={styles.socials}>
            <Icon>
              <FaFacebookF />
            </Icon>
            <Icon>
              <FaInstagram />
            </Icon>
            <Icon>
              <FaXTwitter />
            </Icon>
            <Icon>
              <FaYoutube />
            </Icon>
            <Icon>
              <FaPinterestP />
            </Icon>
            <Icon>
              <FaLinkedinIn />
            </Icon>
          </div>

          <h4 style={{ ...styles.title, marginTop: 24 }}>MEMBERSHIP</h4>
          <strong>AMIS DU LOUVRE</strong>
          <a href="#" style={styles.link}>
            Become a Friend of the Louvre (in French) →
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div style={styles.bottom}>
        <span>Legal Notice</span>
        <span>Privacy policy</span>
        <span>Cookies</span>
        <span>Credits (in French)</span>
        <span>Copyrights</span>
      </div>
    </footer>
  );
};

/* ICON WRAPPER */
const Icon = ({ children }: { children: React.ReactNode }) => (
  <div style={styles.icon}>{children}</div>
);

/* STYLES */
const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: "#000",
    color: "#fff",
    padding: "60px 80px 30px",
    fontFamily: "Inter, sans-serif",
  },
  top: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 60,
    paddingBottom: 40,
    borderBottom: "1px solid #222",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  title: {
    fontSize: 12,
    letterSpacing: "1.5px",
    marginBottom: 12,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    fontSize: 14,
    color: "#bbb",
    cursor: "pointer",
  },
  socials: {
    display: "flex",
    gap: 14,
  },
  icon: {
    width: 34,
    height: 34,
    border: "1px solid #333",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  link: {
    color: "#fff",
    fontSize: 14,
    textDecoration: "underline",
    marginTop: 6,
  },
  bottom: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    gap: 24,
    fontSize: 13,
    color: "#888",
    flexWrap: "wrap",
  },
};

export default Footer;
