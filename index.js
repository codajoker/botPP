import { Telegraf, Markup } from "telegraf";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
function generateRandomString() {
  return uuidv4().replace(/-/g, "").slice(0, 10);
}
function generateUrl(data, pid) {
  const baseUrl = "https://play-partners.online";
  const alias = data.alias;
  const parameters = data.parameters;
  if (parameters.sub_id_3) {
    parameters.sub_id_3.placeholder = pid;
  }
  const queryParams = Object.keys(parameters)
    .map((key) => {
      const param = parameters[key];
      return `${param.name}=${param.placeholder}`;
    })
    .join("&");

  return `${baseUrl}/${alias}?${queryParams}`;
}
//test
const bot = new Telegraf("7228414663:AAGPoaIyvr98mUitGntCrevSVmcEv6A9JaA"); // замените на ваш токен
const urlDB = "https://playpartnersdbbuyer-d20d34f08ec2.herokuapp.com";
function parametersApp(app) {
  switch (app) {
    case "TD":
      return {
        sub_id_2: {
          name: "sub_id_2",
          placeholder: "{sub2}",
        },
        sub_id_3: {
          name: "sub_id_3",
          placeholder: "{sub3}",
        },
        sub_id_4: {
          name: "sub_id_4",
          placeholder: "{sub4}",
        },
        sub_id_5: {
          name: "sub_id_5",
          placeholder: "{sub5}",
        },
        sub_id_6: {
          name: "sub_id_6",
          placeholder: "{sub6}",
        },
        sub_id_7: {
          name: "ad_id",
          placeholder: "{ad_id}",
        },
        sub_id_8: {
          name: "deviceID",
          placeholder: "{deviceID}",
        },
        sub_id_9: {
          name: "app_id",
          placeholder: "{app_id}",
        },
      };

    //   return {
    //     sub_id_1: {
    //       name: "sub_id_1",
    //       placeholder: "{sub1}",
    //     },
    //     sub_id_2: {
    //       name: "sub_id_2",
    //       placeholder: "{sub2}",
    //     },
    //     sub_id_3: {
    //       name: "sub_id_3",
    //       placeholder: "{sub3}",
    //     },
    //     sub_id_4: {
    //       name: "sub_id_4",
    //       placeholder: "{sub4}",
    //     },
    //     sub_id_5: {
    //       name: "sub_id_5",
    //       placeholder: "{sub5}",
    //     },
    //     sub_id_6: {
    //       name: "ad_id",
    //       placeholder: "{ad_id}",
    //     },
    //     sub_id_7: {
    //       name: "deviceID",
    //       placeholder: "{deviceID}",
    //     },
    //     sub_id_8: {
    //       name: "app_id",
    //       placeholder: "{app_id}",
    //     },
    //   };
    // case "WWA":
    //   return {
    //     sub_id_1: {
    //       name: "sub_id_1",
    //       placeholder: "{subid}",
    //     },
    //     sub_id_2: {
    //       name: "sub_id_2",
    //       placeholder: "{sub2}",
    //     },
    //     sub_id_3: {
    //       name: "sub_id_3",
    //       placeholder: "{sub3}",
    //     },
    //     sub_id_4: {
    //       name: "sub_id_4",
    //       placeholder: "{sub4}",
    //     },
    //     sub_id_5: {
    //       name: "sub_id_5",
    //       placeholder: "{sub5}",
    //     },
    //     sub_id_6: {
    //       name: "sub_id_6",
    //       placeholder: "{sub6}",
    //     },
    //     sub_id_7: {
    //       name: "adset_id",
    //       placeholder: "{adset_id}",
    //     },
    //     sub_id_8: {
    //       name: "adset",
    //       placeholder: "{adset}",
    //     },
    //     sub_id_9: {
    //       name: "bundle",
    //       placeholder: "{bundle}",
    //     },
    //   };
    // case "WWAPWA":
    //   return {
    //     sub_id_1: {
    //       name: "sub_id_1",
    //       placeholder: "{tds_clickid}",
    //     },
    //     sub_id_2: {
    //       name: "sub_id_2",
    //       placeholder: "{sub2}",
    //     },
    //     sub_id_3: {
    //       name: "sub_id_3",
    //       placeholder: "{sub3}",
    //     },
    //     sub_id_4: {
    //       name: "sub_id_4",
    //       placeholder: "{sub4}",
    //     },
    //     sub_id_5: {
    //       name: "sub_id_5",
    //       placeholder: "{sub5}",
    //     },
    //     sub_id_6: {
    //       name: "sub_id_6",
    //       placeholder: "{sub6}",
    //     },
    //   };
    case "TRIDENT":
      return {
        external_id: {
          name: "external_id",

          placeholder: "{subid}",
        },
        sub_id_1: {
          name: "sub1",
          placeholder: "{sub1}",
        },
        sub_id_2: {
          name: "sub2",
          placeholder: "{sub2}",
        },
        sub_id_3: {
          name: "sub3",
          placeholder: "{sub3}",
        },
        sub_id_4: {
          name: "sub4",
          placeholder: "{sub4}",
        },
        sub_id_5: {
          name: "sub5",
          placeholder: "{sub5}",
        },
        sub_id_6: {
          name: "sub6",
          placeholder: "{sub6}",
        },
        sub_id_7: {
          alias: "Application Campaign",
          name: "app_campaign",
          placeholder: "{app_campaign}",
        },
        sub_id_8: {
          alias: "Application Name",

          name: "app_name",
          placeholder: "{app_name}",
        },
        sub_id_9: {
          alias: "Bundle",

          name: "bundle",
          placeholder: "{bundle}",
        },
        sub_id_10: {
          alias: "Creo name",

          name: "adgroup",
          placeholder: "{adgroup}",
        },
      };
    // case "MNSTR":
    //   return {
    //     external_id: {
    //       placeholder: "{subid}",
    //     },

    //     sub_id_2: {
    //       name: "sub2",
    //       placeholder: "{sub2}",
    //     },
    //     sub_id_3: {
    //       name: "sub3",
    //       placeholder: "{sub3}",
    //     },
    //     sub_id_4: {
    //       name: "sub4",
    //       placeholder: "{sub4}",
    //     },
    //     sub_id_5: {
    //       name: "sub5",
    //       placeholder: "{sub5}",
    //     },

    //     sub_id_25: {
    //       placeholder: "{offerid}",
    //     },
    //   };
    case "SKYLINE":
      return {
        sub_id_1: {
          name: "sub_id_1",
          placeholder: "{sub1}",
        },
        sub_id_2: {
          name: "sub_id_2",
          placeholder: "{sub2}",
        },
        sub_id_3: {
          name: "sub_id_3",
          placeholder: "{sub3}",
        },
        sub_id_4: {
          name: "sub_id_4",
          placeholder: "{sub4}",
        },
        sub_id_5: {
          name: "sub_id_5",
          placeholder: "{sub5}",
        },
        sub_id_6: {
          name: "sub_id_6",
          placeholder: "{sub6}",
        },
        sub_id_7: {
          name: "sub_id_7",
          placeholder: "{sub7}",
        },
      };
    case "PWAMARKET":
      return {
        sub_id_1: {
          name: "sub1",
          placeholder: "{sub1}",
        },
        sub_id_2: {
          name: "sub2",
          placeholder: "{sub2}",
        },
        sub_id_3: {
          name: "sub3",
          placeholder: "{sub3}",
        },
        sub_id_4: {
          name: "sub4",
          placeholder: "{sub4}",
        },
        sub_id_5: {
          name: "sub5",
          placeholder: "{sub5}",
        },
        sub_id_6: {
          name: "sub6",
          placeholder: "{ad_id}",
        },
        sub_id_7: {
          name: "fb_dynamic_pixel",
          placeholder: "{fb_dynamic_pixel}",
        },
        sub_id_8: {
          name: "sub8",
          placeholder: "{tracking_id}",
        },
      };
    case "WWAIOS":
      return {
        external_id: {
          name: "external_id",
          placeholder: "{tds_clickid}",
        },
        sub_id_1: {
          name: "sub_id_1",
          placeholder: "{sub1}",
        },
        sub_id_2: {
          name: "sub_id_2",
          placeholder: "{sub2}",
        },
        sub_id_3: {
          name: "sub_id_3",
          placeholder: "{sub3}",
        },
        sub_id_4: {
          name: "sub_id_4",
          placeholder: "{sub4}",
        },
        sub_id_5: {
          name: "sub_id_5",
          placeholder: "{sub5}",
        },
        sub_id_6: {
          name: "sub_id_6",
          placeholder: "{sub6}",
        },
      };
    case "BLACKAPP":
      return {
        external_id: {
          name: "external_id",
          placeholder: "{external_id}",
        },
        sub_id_1: {
          name: "sub_id_1",
          placeholder: "{sub_id_1}",
        },
        sub_id_2: {
          name: "sub_id_2",
          placeholder: "{sub_id_2}",
        },
        sub_id_3: {
          name: "sub_id_3",
          placeholder: "{sub_id_3}",
        },
        sub_id_4: {
          name: "sub_id_4",
          placeholder: "{sub_id_4}",
        },
        sub_id_5: {
          name: "sub_id_5",
          placeholder: "{sub_id_5}",
        },
        sub_id_6: {
          name: "sub_id_6",
          placeholder: "{sub_id_6}",
        },
        sub_id_7: {
          name: "sub_id_7",
          placeholder: "{sub_id_7}",
        },
        sub_id_8: {
          name: "sub_id_8",
          placeholder: "{sub_id_8}",
        },
      };
    // case "SPENDY":
    //   return {
    //     external_id: {
    //       placeholder: "{clickid}",
    //     },
    //     sub_id_1: {
    //       name: "sub_id_1",
    //       placeholder: "{t1}",
    //     },
    //     sub_id_2: {
    //       name: "sub_id_2",
    //       placeholder: "{t2}",
    //     },
    //     sub_id_3: {
    //       name: "sub_id_3",
    //       placeholder: "{t3}",
    //     },
    //     sub_id_4: {
    //       name: "sub_id_4",
    //       placeholder: "{t4}",
    //     },
    //     sub_id_5: {
    //       name: "sub_id_5",
    //       placeholder: "{t5}",
    //     },
    //     sub_id_5: {
    //       name: "sub_id_6",
    //       placeholder: "{t6}",
    //     },
    //   };
    case "ZM":
      return {
        external_id: {
          name: "external_id",
          placeholder: "{exid}",
        },
        sub_id_1: {
          name: "sub_id_1",
          placeholder: "{sub_id_1}",
        },
        sub_id_2: {
          name: "sub_id_2",
          placeholder: "{sub_id_2}",
        },
        sub_id_3: {
          name: "sub_id_3",
          placeholder: "{sub_id_3}",
        },
        sub_id_4: {
          name: "sub_id_4",
          placeholder: "{sub_id_4}",
        },
        sub_id_5: {
          name: "sub_id_5",
          placeholder: "{sub_id_5}",
        },
      };
    //   case "IRENT":
    //     return {
    //       sub_id_1: {
    //         name: "sub1",
    //         placeholder: "{sub1}",
    //       },
    //       sub_id_2: {
    //         name: "sub2",
    //         placeholder: "{sub2}",
    //       },
    //       sub_id_3: {
    //         name: "sub3",
    //         placeholder: "{sub3}",
    //       },
    //       sub_id_4: {
    //         name: "sub4",
    //         placeholder: "{sub4}",
    //       },
    //       sub_id_5: {
    //         name: "sub5",
    //         placeholder: "{sub5}",
    //       },
    //       sub_id_6: {
    //         name: "sub6",
    //         placeholder: "{ad_id}",
    //       },
    //       sub_id_7: {
    //         name: "fb_dynamic_pixel",
    //         placeholder: "{fb_dynamic_pixel}",
    //       },
    //       sub_id_8: {
    //         name: "sub8",
    //         placeholder: "{tracking_id}",
    //       },
    //     };
  }
}
function appId(app) {
  switch (app) {
    case "TD":
      return 10;
    // case "WWA":
    //   return 1;
    // case "WWAPWA":
    //   return 33;
    case "TRIDENT":
      return 11;
    case "ZM":
      return 8;
    // case "MNSTR":
    //   return 10;
    // case "PWAGROUP":
    //   return 4;
    case "PWAMARKET":
      return 3;
    case "BLACKAPP":
      return 2;
    case "SKYLINE":
      return 1;
    case "WWAIOS":
      return 4;
    // case "MIRA":
    //   return 9;
  }
}
function appNaming(app, uniqIDCampaign, pid) {
  switch (app) {
    case "TD":
      return `nswdsro&push=playpartners&sub7=${uniqIDCampaign}&sub2={sub2}&sub3=${pid}&sub4={sub4}&sub5={sub5}&sub6={sub6}`;
    //   case "WWA":
    //     return `nhlxdd_panda_${uniqIDCampaign}_${pid}_sub4_sub5_sub6`;
    case "TRIDENT":
      return `playpartners_${uniqIDCampaign}_${pid}_sub4_sub5`;
    //   case "MNSTR":
    //     return `panfshgame_${uniqIDCampaign}_${pid}_sub4_sub5_https://zeusgaze.space`;
    //   case "MIRA":
    //     return `xgffvtst&sub0=${uniqIDCampaign}&sub1={sub_id_1}&sub2={sub_id_2}&sub3=${pid}&sub4={sub_id_4}&sub5={sub_id_5}&sub6={sub_id_6} `;
  }
}

function appDeeplink(app, uniqIDCampaign, pid) {
  switch (app) {
    case "TD":
      return `myapp://nswdsro&push=playpartners&sub7=${uniqIDCampaign}&sub2={sub2}&sub3=${pid}&sub4={sub4}&sub5={sub5}&sub6={sub6}`;
    //   case "WWA":
    //     return `myapp://nhlxdd_panda_${uniqIDCampaign}_${pid}_sub4_sub5_sub6`;
    //   case "TOPTIER":
    //     return `myapp://${uniqIDCampaign}_${pid}_leadpanda_sub2_${pid}_sub4_sub5_sub6`;
    case "TRIDENT":
      return `myapp://playpartners/${uniqIDCampaign}/${pid}/sub4/sub5`;
    //   case "MIRA":
    //     return `myapp://xgffvtst&sub0=${uniqIDCampaign}&sub1={sub1}&sub2={sub2}&sub3=${pid}&sub4={sub4}&sub5={sub5}&sub6={sub6} `;
  }
}

function appNamingAndDeeplink(app, uniqIDCampaign, pid) {
  if (["SKYLINE"].includes(app)) {
    return `https://armaty-mouw.buzz/?app=ИДЕНТИФИКАТОРПРИЛОЖЕНИЯ&campaign=campaign:playpartners!|!${uniqIDCampaign}!|!sub_id_1:vsfbp!|!sub_id_2:test!|!sub_id_3:${pid}!|!sub_id_4:test!|!sub_ud_5:test!|!sub_id_6:test!|!sub_id_7:test&pixel_id=ВАШ_ПИКСЕЛЬ&pid=playpartners`;
  }
  if (["TD", "MIRA", "TRIDENT", "WWA", "MNSTR"].includes(app)) {
    return `Naming \n\n ${appNaming(
      app,
      uniqIDCampaign,
      pid
    )}\n\n Deeplink \n\n${appDeeplink(app, uniqIDCampaign, pid)}`;
  } else {
    return "";
  }
}

bot.start(async (ctx) => {
  await axios.post(`${urlDB}/user`, {
    name: ctx.from.username,
    chatId: ctx.from.id,
  });
  ctx.reply(
    "Привет! Добро пожаловать в бота. Нажмите на кнопку ниже, чтобы начать.",
    Markup.inlineKeyboard([
      Markup.button.callback("Создать компанию", "create_company"),
    ])
  );
});

bot.action("create_company", async (ctx) => {
  const userId = ctx.from.id;

  await axios.patch(`${urlDB}/user/${userId}`, {
    pid: null,
    offerID: null,
    app: null,
    campaignName: null,
  });

  const userDB = await axios.get(`${urlDB}/user/${userId}`);
  console.log(userDB.data);
  if (!userDB.data.verefication) {
    return ctx.reply("Вы не верифицированы обратитесь к тех поддержке");
  }
  ctx.reply("Введите ваш номер баера:");
});

bot.action(
  ["PWAMARKET", "BLACKAPP", "SKYLINE", "WWAIOS", "ZM", "TRIDENT", "TD"],
  async (ctx) => {
    const userId = ctx.from.id;
    await axios.patch(`${urlDB}/user/${userId}`, {
      app: ctx.match[0],
    });
    ctx.reply("Введите ID оффера в кейтаро");
  }
);

bot.on("text", async (ctx) => {
  try {
    const userId = ctx.from.id;
    const userDB = await axios.get(`${urlDB}/user/${userId}`);

    if (!userDB.data.verefication) {
      return ctx.reply("Вы не верифицированы обратитесь к тех поддержке");
    }
    if (!userDB.data.pid) {
      await axios.patch(`${urlDB}/user/${userId}`, {
        pid: ctx.message.text,
      });
      ctx.reply(
        "Выберите приложение:",
        Markup.inlineKeyboard([
          [
            Markup.button.callback("TD", "TD"),
            // Markup.button.callback("WWA", "WWA"),
          ],
          [
            Markup.button.callback("ZM", "ZM"),
            Markup.button.callback("TRIDENT", "TRIDENT"),
          ],
          [
            Markup.button.callback("WWAIOS", "WWAIOS"),
            Markup.button.callback("SKYLINE", "SKYLINE"),
          ],

          [
            Markup.button.callback("PWAMARKET", "PWAMARKET"),
            Markup.button.callback("BLACKAPP", "BLACKAPP"),
          ],
        ])
      );
    } else if (!userDB.data.offerID) {
      await axios.patch(`${urlDB}/user/${userId}`, {
        offerID: ctx.message.text,
      });
      ctx.reply("Напишите названия вашей кампании");

      // Здесь можно сохранять данные в базу данных
      // Например: saveData(userId, userStates[userId].selectedApp, userStates[userId].phone, userStates[userId].offer);
    } else if (!userDB.data.campaignName) {
      await axios.patch(`${urlDB}/user/${userId}`, {
        campaignName: ctx.message.text,
      });
      const aliasCampaign = generateRandomString();

      await axios
        .post(
          "https://play-partners.online/admin_api/v1/campaigns",
          {
            alias: aliasCampaign,
            name: ctx.message.text,
            cookies_ttl: 8760,
            group_id: userDB.data.group_id,
            traffic_source_id: appId(userDB.data.app),
            notes: appNamingAndDeeplink(
              userDB.data.app,
              aliasCampaign,
              userDB.data.pid
            ),
            parameters: parametersApp(userDB.data.app),
          },
          {
            headers: {
              "Api-Key": "5e68cf7ce5c82bb6104cfbfd2212b653",
            },
          }
        )
        .then(async ({ data }) => {
          // Функция для создания URL из данных запроса

          await axios.post(
            "https://play-partners.online/admin_api/v1/streams",
            {
              campaign_id: data.id,
              schema: "landings",
              type: "default",
              name: "Main",
              action_type: "http",
              offers: [
                {
                  offer_id: userDB.data.offerID,
                  share: 100,
                  state: "active",
                },
              ],
            },
            {
              headers: {
                "Api-Key": "5e68cf7ce5c82bb6104cfbfd2212b653",
              },
            }
          );
          await ctx.reply("Спасибо, ваша компания создана.");

          // Генерация URL
          if ("SKYLINE" === userDB.data.app) {
            await ctx.reply(
              `Ваша ссылка для залива НЕ ЗАБУДЬ АЙДИ ПРИЛЫ \n\n https://armaty-mouw.buzz/?app=ИДЕНТИФИКАТОРПРИЛОЖЕНИЯ&campaign=campaign:playpartners!|!${data.alias}!|!sub_id_1:vsfbp!|!sub_id_2:test!|!sub_id_3:${userDB.data.pid}!|!sub_id_4:test!|!sub_ud_5:test!|!sub_id_6:test!|!sub_id_7:test&pixel_id=ВАШ_ПИКСЕЛЬ&pid=playpartners`
            );
          }
          if (
            ["TD", "MIRA", "TRIDENT", "WWA", "MNSTR"].includes(userDB.data.app)
          ) {
            await ctx.reply(`Naming`);
            await ctx.reply(
              `\`${appNaming(
                userDB.data.app,
                aliasCampaign,
                userDB.data.pid
              )}\``,
              { parse_mode: "MarkdownV2" }
            );
            await ctx.reply(`Deeplink`);
            await ctx.reply(
              `\`${appDeeplink(
                userDB.data.app,
                aliasCampaign,
                userDB.data.pid
              )}\``,
              { parse_mode: "MarkdownV2" }
            );
          } else {
            await ctx.reply(
              `Трекинг линк кампании: ${generateUrl(data, userDB.data.pid)}`
            );
          }
        });

      // await ctx.reply("Спасибо, ваша компания создана.");
      // if (["TD", "MIRA", "TRIDENT", "WWA", "MNSTR", "SKYLINE"].includes(userDB.data.app)) {
      //   if ("SKYLINE" === userDB.data.app) {
      //     await ctx.reply(`https://armaty-mouw.buzz/?app=ИДЕНТИФИКАТОРПРИЛОЖЕНИЯ&campaign=campaign:playpartners!|!${uniqIDCampaign}!|!sub_id_1:vsfbp!|!sub_id_2:test!|!sub_id_3:${pid}!|!sub_id_4:test!|!sub_ud_5:test!|!sub_id_6:test!|!sub_id_7:test&pixel_id=ВАШ_ПИКСЕЛЬ&pid=playpartners`)
      //   }
      // await ctx.reply(`Naming`);
      // await ctx.reply(
      //   `\`${appNaming(userDB.data.app, aliasCampaign, userDB.data.pid)}\``,
      //   { parse_mode: "MarkdownV2" }
      // );
      // await ctx.reply(`Deeplink`);
      // await ctx.reply(
      //   `\`${appDeeplink(userDB.data.app, aliasCampaign, userDB.data.pid)}\``,
      //   { parse_mode: "MarkdownV2" }
      // );
      // }

      await axios.patch(`${urlDB}/user/${userId}`, {
        pid: null,
        offerID: null,
        app: null,
        campaignName: null,
      }); // Очистка состояния

      await ctx.reply(
        `Удачного залива с профитами 1000% 🚀🚀🚀`,
        Markup.inlineKeyboard([
          Markup.button.callback("Создать компанию", "create_company"),
        ])
      );
    }
  } catch (error) {
    console.log(error);
    const userId = ctx.from.id;

    await axios.patch(`${urlDB}/user/${userId}`, {
      pid: null,
      offerID: null,
      app: null,
      campaignName: null,
    });
    ctx.reply("УПС что то пошло не так перезапустите бота");
  }
});

bot.launch();
