const room = HBInit({
  roomName: "Haxball Bot Odası",
  maxPlayers: 10,
  public: true
});

room.onPlayerJoin = (player) => {
  room.sendChat(`👋 Hoş geldin ${player.name}!`);
};

room.onPlayerChat = (player, message) => {
  if (message === "!ping") {
    room.sendChat(`🏓 Pong!`);
  }
};
