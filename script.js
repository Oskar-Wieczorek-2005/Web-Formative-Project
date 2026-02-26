const btn = document.getElementById("btnHello");
const output = document.getElementById("output");
const statusEl = document.getElementById("status");

statusEl.textContent = "Test";

btn.addEventListener("click", () => {
	output.textContent = `Button clicked at ${new Date().toLocaleTimeString()}`;
});
