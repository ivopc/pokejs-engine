([
    ["walk", "up"],
    ["walk", "down", { "delay": 5000 }],
    ["delay", 6000],
    ["dialog", [
        {
            "br": "Oi.",
            "en": "Hi."
        },
        {
            "br": "Tudo bem?",
            "en": "How are you?"
        }
    ]],
    ["sceneManager", { "action": "launch", "scene": "MiniGame" }],
    ["givePkm", { "dex": 1, "level": 5 }],
    ["giveItem", { "id": 1, "amount": 5 }]
])