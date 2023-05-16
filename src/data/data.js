const db = {
  users: [
    {
      _id: "5a934e000102030405000000",
      name: "João",
      email: "joao@mail.com",
    },
    {
      _id: "5a934e000102030405060700",
      name: "Maria",
      email: "maria@mail.com",
    },
  ],
  teams: [
    {
      _id: "5a934e000102030405ad456f",
      name: "Palmeiras",
    },
    {
      _id: "5a934e000102030405ad4560",
      name: "Fortaleza",
    },
  ],
  leagues: [
    {
      _id: "5a934e000102030405000001",
      name: "Copa do Brasil",
      country: "Brasil",
    },
  ],
  betslips: [
    {
      _id: "5a987e100102030405ad456f",
      user_id: "5a934e000102030405000000",
      bets: [
        {
          live: true,
          sport: "futebol",
          fixture: {
            scheduledAt: "2023-05-17 21:00:00TZ",
            league: "Copa do Brasil - BR",
            teams: ["Palmeiras", "Fortaleza"],
          },
          market: "escanteios asiáticos",
          marketOption: "total de escanteios",
          match_fixed: "partida",
          team: "ambos",
          value: "+10",
          odd: 1.95,
          stake: 100,
          return: 195.0,
        },
        {
          live: true,
          fixture: {
            sport: "futebol",
            scheduledAt: "2023-05-17 21:00:00TZ",
            league: "Copa do Brasil - Brasil",
            teams: ["Cruzeiro", "Gremio"],
          },
          market: "escanteios asiáticos",
          marketOption: "total de escanteios",
          match_fixed: "partida",
          team: "ambos",
          value: "+10",
          odd: 1.95,
          stake: 100,
          return: 195.0,
        },
      ],
      bettedAt: "2023-05-17 21:00:00TZ",
      multiple: true,
    },
    {
      _id: "5a987e1be802030405ad456f",
      user_id: "5a934e000102030405060700",
      bets: [
        {
          live: true,
          fixture: {
            sport: "futebol",
            scheduledAt: "2023-05-17 21:00:00TZ",
            league: "Série A - Brasil",
            teams: ["Internacional", "Grêmio"],
          },
          market: "resultado",
          match_fixed: "partida",
          marketOption: "casa ou empate",
          team: "Internacional",
          value: null,
          odd: 1.95,
          stake: 100,
          return: 195.0,
        },
      ],
    },
  ],
};

module.exports = db;
