// Haim Galata 206450397 || Netanel Rada 209409036

let fromBase = null;
let toBase = null;

document.querySelectorAll("#from-base .base-button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#from-base .base-button").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    fromBase = parseInt(btn.dataset.base);
  });
});

document.querySelectorAll("#to-base .base-button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#to-base .base-button").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    toBase = parseInt(btn.dataset.base);
  });
});

document.getElementById("convertBtn").addEventListener("click", () => {
  const input = document.getElementById("numberInput").value.trim();
  const output = document.getElementById("output");

  if (!fromBase || !toBase) {
    alert("Please select both FROM and TO bases.");
    return;
  }

  const validChars = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9a-fA-F]+$/
  };

  if (!validChars[fromBase].test(input)) {
    alert("Invalid input for base " + fromBase);
    return;
  }

  const decimal = parseInt(input, fromBase);
  const converted = decimal.toString(toBase).toUpperCase();
  output.textContent = `(${fromBase}) ${input} = (${toBase}) ${converted}`;
  document.getElementById("numberInput").value = "";
});
