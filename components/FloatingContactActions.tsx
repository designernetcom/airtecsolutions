function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3Zm-8.4 18.1h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.3a9.8 9.8 0 0 1-1.5-5.2C2.4 6.4 6.8 2 12.1 2c2.6 0 5.1 1 7 2.9s2.9 4.4 2.9 7c0 5.3-4.4 9.7-9.9 9.7Zm5.3-7.2c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 2.2 9.1 1c.7-.3 1.5 0 1.8.7l1.5 3.6c.3.6.1 1.3-.4 1.7L10.4 8.5c.8 1.8 2.2 3.4 4 4.2l1.5-1.6c.4-.5 1.1-.6 1.7-.4l3.6 1.5c.7.3 1 1.1.7 1.8l-1.2 2.5c-.4.8-1.2 1.3-2.1 1.3C10.4 17.8 6.2 13.6 6.2 5.4c0-.9.5-1.7 1.3-2.1Z" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 1.5h8.2L20 7.3v15.2H6V1.5Zm7.5 1.8v5h5M8.5 16.6h1.2c1.2 0 1.9-.6 1.9-1.7s-.7-1.7-1.9-1.7H8.5v5.5m0-3.8h1c.5 0 .8.1.8.6s-.3.6-.8.6h-1m4.3 2.6h1.1c1.8 0 2.8-1 2.8-2.7s-1-2.7-2.8-2.7h-1.1v5.4Zm1.1-4.1h.1c.9 0 1.4.5 1.4 1.4s-.5 1.4-1.4 1.4h-.1v-2.8Z" />
    </svg>
  );
}

export default function FloatingContactActions() {
  return (
    <nav className="floating-contact-actions" aria-label="Quick contact actions">
      <a
        className="floating-contact-action floating-whatsapp"
        href="https://wa.me/918600321115?text=I'm%20interested%20in%20your%20products"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Airtec Solutions on WhatsApp"
      >
        <span className="floating-contact-icon"><WhatsappIcon /></span>
      </a>
      <a
        className="floating-contact-action floating-phone"
        href="tel:+918600321114"
        aria-label="Call Airtec Solutions at +91 8600321114"
      >
        <span className="floating-contact-icon"><PhoneIcon /></span>
      </a>
      <a
        className="floating-contact-action floating-brochure"
        href="/airtec-new.pdf"
        download="airtec-solutions-brochure.pdf"
        aria-label="Download the Airtec Solutions brochure PDF"
      >
        <span className="floating-contact-icon"><PdfIcon /></span>
      </a>
    </nav>
  );
}
