const btn = document.getElementById("btnHello");
const output = document.getElementById("output");
const statusEl = document.getElementById("status");
const clickTimeTpl = document.getElementById("clickTimeTpl");

statusEl.textContent = "Ready";

btn.addEventListener("click", () => {
	const now = new Date();

	const fragment = clickTimeTpl.content.cloneNode(true);
	const timeEl = fragment.querySelector(".click-time__value");

	timeEl.textContent = now.toLocaleTimeString();
	timeEl.setAttribute("datetime", now.toISOString());

	output.appendChild(fragment);
});
