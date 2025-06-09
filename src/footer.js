export default function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = ` <p>
        Built by
        <a href="https://github.com/brrrrdy/Sign-up-Form" target="_blank"
          >Tom Alvarez as part of the Odin Project 2025</a
        >
      </p>`;
  return footer;
}
