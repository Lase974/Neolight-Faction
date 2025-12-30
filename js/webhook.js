const webhookURL = "COLLE_ICI_TON_WEBHOOK_DISCORD";

document.getElementById("recruitForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    embeds: [{
      title: "📥 Nouvelle candidature",
      color: 5793266,
      fields: [
        { name: "Pseudo", value: pseudo.value, inline: true },
        { name: "Âge", value: age.value, inline: true },
        { name: "Temps de jeu", value: time.value, inline: false },
        { name: "Discord", value: discord.value, inline: false },
        { name: "Motivation", value: motivation.value, inline: false }
      ],
      footer: { text: "Faction La Neolight" }
    }]
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Candidature envoyée !");
  this.reset();
});
