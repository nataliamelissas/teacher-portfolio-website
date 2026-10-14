const copyButtons = document.querySelectorAll("[data-copy-session]");

function getText(element, selector) {
  const match = element.querySelector(selector);
  return match ? match.textContent.trim() : "";
}

function getSessionText(sessionCard) {
  const weekCard = sessionCard.closest(".week-card");
  const lines = [
    getText(weekCard, ".week-kicker"),
    getText(weekCard, "h3"),
    getText(sessionCard, ".session-label"),
    getText(sessionCard, "h4"),
  ];

  sessionCard.querySelectorAll(".session-points li").forEach((point) => {
    lines.push(`- ${point.textContent.trim()}`);
  });

  return lines.filter(Boolean).join("\n");
}

function copyWithTextArea(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();

  try {
    return document.execCommand("copy");
  } catch (error) {
    console.error("The fallback copy action failed.", error);
    return false;
  } finally {
    textArea.remove();
  }
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error("The browser clipboard action failed.", error);
    }
  }

  return copyWithTextArea(text);
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const sessionCard = button.closest(".session-card");
    const status = button.parentElement.querySelector(".copy-status");
    const copied = await copyText(getSessionText(sessionCard));

    button.textContent = copied ? "Copied" : "Copy failed";
    status.textContent = copied
      ? "Session text copied."
      : "Copy failed. Select the text manually.";

    window.setTimeout(() => {
      button.textContent = "Copy session";
      status.textContent = "";
    }, 2500);
  });
});
