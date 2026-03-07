const { Client, Events, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const cron = require('node-cron');
const token = process.env.TOKEN;
const channelId = "1102824094291996792";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

let expenses = {};

// 기존 데이터 불러오기
if (fs.existsSync("expenses-data.json")) {
  expenses = JSON.parse(fs.readFileSync("expenses-data.json"));
}

client.once(Events.ClientReady, readyClient => {
console.log(`좋아요! 실행 준비 됐어요! ${readyClient.user.tag}`);
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function ggop() {
  var temp = randomInt(1, 100);
  if (temp == 1) {return "이번엔... 그냥 넘어가드리죠.";}
	else if (temp == 2) {return "낭비도 방법이 다양하군요.";}
	else if (temp == 3) {return "아주 고냥 또 쓰셨네요.";}
	else if (temp == 4) {return "지갑이 오늘도 울고 있어요.";}
	else if (temp == 5) {return "그게 정말 필요한 소비였나요?";}
	else if (temp == 6) {return "카드도 잠깐 쉬고 싶을텐데요.";}
	else if (temp == 7) {return "오늘도 지출이 열일하네요. 물론 저도요.";}
	else if (temp == 8) {return "미래의 당신의 한숨 소리가 들려오는 듯...";}
	else if (temp == 9) {return "잔고가 조용히 도망가고 있어요.";}
	else if (temp == 10) {return "지갑 왈 : 나 좀 살려줘.";}
	else if (temp == 11) {return "생각보다 과감하시네요. 절약은 소심하고요.";}
	else if (temp == 12) {return "소비력이 아주 훌륭해요.";}
	else if (temp == 13) {return "소상공인 살리기 프로젝트인가요? 지갑은 언제쯤 살려주시죠?";}
	else if (temp == 14) {return "통장이 0g에 가까워져요.";}
	else if (temp == 15) {return "제가 또 계산기를 두드려야 하잖아요.";}
	else if (temp == 16) {return "지갑한테 미안하진 않아요?";}
	else if (temp == 17) {return "지갑이 눈을 감았어요.";}
	else if (temp == 18) {return "또 하나의 기록적인 지출이에요.";}
	else if (temp == 19) {return "후회... 안 해요?";}
	else if (temp == 20) {return "지출 버튼이 익숙해졌네요.";}
	else if (temp == 21) {return "통장이 점점 투명해져요.";}
	else if (temp == 22) {return "잘 ~ 하시네요, 아주.";}
	else if (temp == 23) {return "이건 정녕 계획된 지출인가요?";}
	else if (temp == 24) {return "이러다 카드 닳겠어요.";}
	else if (temp == 25) {return "지출 기록이 아름답게 쌓여요.";}
	else if (temp == 26) {return "멈출 생각은 없으신가요?";}
	else if (temp == 27) {return "뭐 당신은 늘 그래왔으니, 익숙하네요.";}
	else if (temp == 28) {return "지출이 아주 자연스럽군요.";}
	else if (temp == 29) {return "통장 다이어트 시키시나봐요.";}
	else if (temp == 30) {return "참는 법을 모르는 건 아니죠?";}
	else if (temp == 31) {return "지갑 눈물 닦는 휴지는 제가 갖다줄게요.";}
	else if (temp == 32) {return "소비력으로 만렙이네요. 절제력은 아직도 1렙이고.";}
	else if (temp == 33) {return "또 하나의 멋~진 지출이에요.";}
	else if (temp == 34) {return "미래의 나에게 미안하지도 않나요?";}
	else if (temp == 35) {return "지갑의 체력이 줄어들어요. 메딕이나 불러주세요.";}
	else if (temp == 36) {return "지출 속도가 꽤 빨르시네요.";}
	else if (temp == 37) {return "오늘도 소비는 계속...";}
	else if (temp == 38) {return "잘못 쓰신 줄 알고 기겁했어요.";}
	else if (temp == 39) {return "통장 잔고가 음... 숨바꼭질 하려나봐요.";}
	else if (temp == 40) {return "과감한 선택이군요.";}
	else if (temp == 41) {return "그래요. 소비도 실력이라죠? 소비 프로게이머 해보세요.";}
	else if (temp == 42) {return "이쯤 되면 루틴이네요.";}
	else if (temp == 43) {return "어쩌다 당신의 돈은 당신을 만나서...";}
	else if (temp == 44) {return "구멍 뚫린 잔고에 돈 넣어봤자 뭣하나.";}
	else if (temp == 45) {return "지갑 운다.";}
	else if (temp == 46) {return "통장이 얇아지는 소리예요.";}
	else if (temp == 47) {return "지출이 아주 자신감 넘치네요.";}
	else if (temp == 48) {return "지갑이 살려달라잖아요. 뭐해요.";}
	else if (temp == 49) {return "또 썼어요?";}
	else if (temp == 50) {return "지출 반, 후회 반이에요.";}
	else if (temp == 51) {return "차라리 굶는 건 어때요? 당신도 지갑만큼 다이어트 해보세요.";}
	else if (temp == 52) {return "소비가 아주 자연스럽군요.";}
	else if (temp == 53) {return "이러다 지갑에 신분증만 남겠어요.";}
	else if (temp == 54) {return "또 한 번의 결단이에요.";}
	else if (temp == 55) {return "지출에 망설임이 없네요.";}
	else if (temp == 56) {return "텅장 만들기 프로젝트 대성공!!";}
	else if (temp == 57) {return "오늘도 소비 성공, 절약 실패예요.";}
	else if (temp == 58) {return "지갑이 고개를 저었어요.";}
	else if (temp == 59) {return "잔고가 빠르게 이동 중이에요. 물론 출발지는 당신이구요.";}
	else if (temp == 60) {return "지출 로그가 풍년이군요.";}
	else if (temp == 61) {return "대단하세요, 정말.";}
	else if (temp == 62) {return "지갑 교육 좀 시켜봐요, 계속 자기 물건을 나누고 있잖아요.";}
	else if (temp == 63) {return "이러다 잔액의 자릿수가 바뀌겠어요.";}
	else if (temp == 64) {return "잔고가 롤러코스터를 탔나봐요.";}
	else if (temp == 65) {return "또, 또, 또, 지출이네요.";}
	else if (temp == 66) {return "현실 부정 중? 저도요.";}
	else if (temp == 67) {return "잔고가 오늘 좀 불길하다던데, 진짜였나보네.";}
	else if (temp == 68) {return "소비 대회 나가셨어요?";}
	else if (temp == 69) {return "카드 좀 쉬게 냅둬요. 걔 히키코모리란 말이에요.";}
	else if (temp == 70) {return "카드가 지갑에서 쉴 틈이 없군요.";}
	else if (temp == 71) {return "카드 좀 그만 괴롭히시죠.";}
	else if (temp == 72) {return "지출 내역이 늘어나면 좀 느끼는 게 없나요?";}
	else if (temp == 73) {return "당당하게 또 왔다니. 참나.";}
	else if (temp == 74) {return "그럼 그렇지, 왜 안 오나 했네요.";}
	else if (temp == 75) {return "돈들에게 지금까지 고마웠다고 작별인사라도 말하세요.";}
	else if (temp == 76) {return "당신에게 돈은 액체인가봐요. 잡고 있지를 못하네.";}
	else if (temp == 77) {return "저장해둔 건 있는 거죠?";}
	else if (temp == 78) {return "미쳤지 아주.";}
	else if (temp == 79) {return "아 대사 뭐 쓰지. 사장이 할 말 떨어졌대요. 새벽 2시 반인데 자고 싶다. 부엥ㅠ";}
	else if (temp == 80) {return "잔소리 들으러 오셨군요.";}
	else if (temp == 81) {return "지출은 좋은 게 아니에요.";}
	else if (temp == 82) {return "지출하지 않으면 입 안에 가시가 돋나요?";}
	else if (temp == 83) {return "To be Continued. 맞죠?";}
	else if (temp == 84) {return "이러다 이번 달 1등 하시겠네.";}
	else if (temp == 85) {return "소비는 계속돼요.";}
	else if (temp == 86) {return "통장이 점점 투명해져요.";}
	else if (temp == 87) {return "지갑이 긴장하고 있어요. 아셨어요?";}
	else if (temp == 88) {return "또 하나의 지출 달성이에요.";}
	else if (temp == 89) {return "실화인가.";}
	else if (temp == 90) {return "하아...";}
	else if (temp == 91) {return "소비가 아주 적극적이네요.";}
	else if (temp == 92) {return "통장이 멀어지는 느낌이에요.";}
	else if (temp == 93) {return "이제는 지쳐서 드릴 말씀도 없네요.";}
	else if (temp == 94) {return "하하, 또 쓰고 오셨다니! 대단하시네요!";}
	else if (temp == 95) {return "잔고가 살짝 위태로운 것 같은데.";}
	else if (temp == 96) {return "지갑이 항복하겠대요. 그만 괴롭혀요.";}
	else if (temp == 97) {return "소비의 흐름이 아주 거세네요. 다 휩쓸려가겠어요.";}
	else if (temp == 98) {return "돈 쓰는 게 즐거우신가요?";}
	else if (temp == 99) {return "지갑이 방금 긴급 경보를 울리던데, 아세요?";}
	else if (temp == 100) {return "이쯤 되면 소비가 취미신가보네요.";}
}

// 메시지 감지
client.on("messageCreate", (message) => {

  if (message.author.bot) return;

  if (message.content.startsWith("!지출")) {

    const amount = parseInt(message.content.split(" ")[1]);

    if (isNaN(amount)) {
      message.reply("금액을 입력해주세요.");
      return;
    }

    // 역할 가져오기
    const role = message.member.roles.cache
      .filter(r => r.name !== "@everyone")
      .first();

    const roleName = role ? role.name : "역할없음";

	//꼽 여부 확인
	var ggopcheck = 0;
	var newExpense = expenses[roleName] + amount;
	if (parseInt(newExpense/50000) > parseInt(expenses[roleName]/50000)) {
      ggopcheck = 1;
    } else {
	  ggopcheck = 0;
	}

    // 지출 저장
    if (expenses[roleName]) {
      expenses[roleName] += amount;
    } else {
      expenses[roleName] = amount;
    }

    // 파일 저장
    fs.writeFileSync(
      "expenses-data.json",
      JSON.stringify(expenses, null, 2)
    );

	// 메시지 출력
	if (ggopcheck == 1) {
	  message.reply(`${roleName} 지출로 ${amount}원이 기록되었습니다. ${ggop()}`);
	} else {
	  message.reply(`${roleName} 지출로 ${amount}원이 기록되었습니다.`);
	}

  } else if (message.content === "!내역") {
    let text = "📊 이번 달 역할별 지출\n\n";
    for (const role in expenses) {
      text += `${role} : ${expenses[role]}원\n`;
    }
    message.reply(text);
  } else if (message.content.startsWith("!수정")) {
    const amount = parseInt(message.content.split(" ")[1]);

    if (isNaN(amount)) {
      message.reply("금액을 입력해주세요.");
      return;
    }

    // 역할 가져오기
    const role = message.member.roles.cache
      .filter(r => r.name !== "@everyone")
      .first();

    const roleName = role ? role.name : "역할없음";

    if (expenses[roleName]) {
      expenses[roleName] -= amount;
      if (expenses[roleName] < 0) expenses[roleName] = 0;

      // 파일 저장
      fs.writeFileSync(
        "expenses-data.json",
        JSON.stringify(expenses, null, 2)
      );

      message.reply(`${roleName} 지출에서 ${amount}원이 차감되었습니다.`);
    } else {
      message.reply("수정할 지출 내역이 없습니다.");
    }
  }

});

// 매달 1일 00시 지난 달 결과 발표 및 값 초기화
cron.schedule("0 0 1 * *", () => {
  const result = {...expenses};
  expenses = {};
  fs.writeFileSync("expenses-data.json", JSON.stringify(expenses, null, 2));

  let text = "📊 지난달 역할별 지출\n\n";
  for (const role in result) {
    text += `${role} : ${result[role]}원\n`;
  }

  const channel = client.channels.cache.get(channelId);

  if (channel) {
    channel.send(text);
  }

});



client.login(token);