document.addEventListener('DOMContentLoaded', () => {
    // 퀴즈 데이터 (문제 은행) - 총 70문제 전체
    const quizData = [
        // 이차전지 문제 1~50번
        { question: "한번 사용하고 버리는 배터리를 '1차 전지'라고 한다. (O/X)", answer: ["O", "o"], explanation: "1차 전지는 한 번만 사용 가능한 전지를 말하며, 2차 전지는 충전하여 여러 번 사용할 수 있는 전지를 의미합니다." },
        { question: "현재 스마트폰, 노트북 등 대부분의 휴대용 전자기기에 사용되는 이차전지는 무엇일까요?", answer: ["리튬 이온 배터리", "리튬이온배터리"], explanation: "리튬 이온 배터리는 에너지 밀도가 높고 가벼워 휴대용 전자기기에 널리 사용됩니다." },
        { question: "이차전지를 구성하는 4대 주요 요소는 양극재, 음극재, 분리막, 그리고 '이것'입니다. '이것'은 무엇일까요?", answer: ["전해질", "전해액"], explanation: "전해질은 양극과 음극 사이에서 리튬 이온이 이동할 수 있도록 돕는 매개체 역할을 합니다." },
        { question: "배터리가 방전될 때, 리튬 이온은 음극에서 양극으로 이동한다. (O/X)", answer: ["O", "o"], explanation: "방전 시 음극에 있던 리튬 이온이 양극으로 이동하면서 전자가 외부 회로를 통해 흐르게 되어 전기를 사용할 수 있게 됩니다." },
        { question: "충전 시 리튬 이온이 양극에서 이동하여 저장되는 곳은 어디일까요?", answer: ["음극재"], explanation: "충전은 방전의 역반응으로, 양극의 리튬 이온이 음극으로 이동하여 저장됩니다." },
        { question: "배터리의 용량과 전압을 결정하는 핵심 소재는 무엇일까요?", answer: ["양극재"], explanation: "양극재는 리튬 이온의 공급원 역할을 하며, 어떤 활물질을 사용하느냐에 따라 배터리의 용량과 전압이 결정됩니다." },
        { question: "배터리의 수명과 충전 속도에 큰 영향을 미치는 소재는 무엇일까요?", answer: ["음극재"], explanation: "음극재는 양극에서 온 리튬 이온을 저장하고 방출하는 역할을 반복하기 때문에 안정적인 구조가 중요하며, 이는 배터리 수명과 충전 속도에 영향을 줍니다." },
        { question: "양극과 음극이 직접 접촉하여 화재나 폭발이 일어나는 것을 막아주는 안전 장치는 무엇일까요?", answer: ["분리막"], explanation: "분리막은 양극과 음극을 물리적으로 분리시키되, 미세한 구멍을 통해 이온만 이동할 수 있도록 하여 배터리의 안전성을 확보하는 중요한 부품입니다." },
        { question: "기존의 액체 전해질을 고체로 대체하여 안전성을 획기적으로 높인 차세대 배터리는 무엇일까요?", answer: ["전고체 배터리", "전고체배터리"], explanation: "전고체 배터리는 전해질이 고체이기 때문에 외부 충격에 강하고, 화재나 폭발의 위험이 매우 낮아 '꿈의 배터리'라고 불립니다." },
        { question: "코발트와 같은 비싼 희귀 금속 대신 니켈, 망간 등을 사용하여 가격을 낮춘 이차전지는 'NCM 배터리'이다. (O/X)", answer: ["O", "o"], explanation: "NCM은 니켈(N), 코발트(C), 망간(M)을 조합한 양극재를 사용하는 리튬 이온 배터리로, 하이니켈 기술 등을 통해 성능을 높이고 가격 경쟁력을 확보하고 있습니다." },
        { question: "수명이 다한 전기차 배터리를 에너지 저장 장치(ESS) 등으로 재사용하는 것을 '배터리 재활용'이라고 한다. (O/X)", answer: ["X", "x"], explanation: "배터리를 다른 용도로 다시 사용하는 것은 '재사용(Re-use)'이며, 배터리를 분해하여 리튬, 니켈 등의 원료를 추출하는 것을 '재활용(Recycling)'이라고 합니다." },
        { question: "배터리의 에너지 밀도가 높을수록 더 가볍고 오래 사용할 수 있다. (O/X)", answer: ["O", "o"], explanation: "에너지 밀도는 단위 부피 또는 무게당 저장할 수 있는 에너지의 양을 의미하므로, 에너지 밀도가 높을수록 배터리의 성능이 우수하다고 할 수 있습니다." },
        { question: "전기차 배터리에서 주로 음극재의 재료로 사용되는 것은 무엇일까요?", answer: ["흑연"], explanation: "흑연은 구조가 안정적이고 가격이 저렴하며, 리튬 이온을 잘 저장하고 방출할 수 있어 음극재로 널리 사용됩니다." },
        { question: "배터리를 충전하고 방전하는 과정에서 배터리 용량이 점차 줄어드는 현상을 무엇이라고 할까요?", answer: ["열화 현상", "열화현상", "노화 현상", "노화현상"], explanation: "충·방전을 반복하면서 전극 물질의 구조가 변하거나 불순물이 생겨 배터리의 성능이 저하되는 현상입니다." },
        { question: "니켈 대신 '이것'을 사용하여 안정성을 높이고 가격을 낮춘 배터리로, 최근 전기차에 많이 사용되고 있는 배터리는 무엇일까요?", answer: ["LFP", "LFP 배터리", "리튬인산철", "리튬인산철 배터리"], explanation: "LFP 배터리는 코발트를 사용하지 않아 가격이 저렴하고, 화학적으로 안정적이어서 화재 위험이 낮은 장점이 있습니다." },
        { question: "리튬 이온 배터리를 처음 개발하여 노벨 화학상을 수상한 인물 중 한 명은 '존 B. 굿이너프'이다. (O/X)", answer: ["O", "o"], explanation: "존 B. 굿이너프, M. 스탠리 휘팅엄, 요시노 아키라 3인이 2019년 리튬 이온 배터리 개발 공로로 노벨 화학상을 공동 수상했습니다." },
        { question: "배터리가 과도하게 충전되거나 방전되는 것을 막아주는 보호 회로를 무엇이라고 할까요?", answer: ["BMS", "bms"], explanation: "BMS(Battery Management System)는 배터리의 전압, 전류, 온도 등을 실시간으로 모니터링하여 최적의 상태로 유지하고 안전을 관리하는 중요한 시스템입니다." },
        { question: "흑연보다 에너지 저장 용량이 10배가량 높아 차세대 음극재로 주목받고 있는 소재는 무엇일까요?", answer: ["실리콘", "규소"], explanation: "실리콘은 흑연보다 훨씬 많은 리튬 이온을 저장할 수 있어 배터리 용량을 획기적으로 늘릴 수 있지만, 충·방전 시 부피 팽창 문제 등 해결해야 할 과제가 남아있습니다." },
        { question: "배터리 셀(Cell)을 여러 개 묶어 프레임에 넣은 단위를 '모듈(Module)'이라고 하고, 이 모듈들을 모아 만든 최종 형태를 '이것'이라고 합니다. '이것'은 무엇일까요?", answer: ["팩", "Pack", "pack"], explanation: "전기차에는 수많은 배터리 셀이 들어가며, 셀 → 모듈 → 팩 순서로 조립되어 최종적으로 차량에 장착됩니다." },
        { question: "사용 후 버려진 배터리에서 니켈, 코발트, 리튬 등 핵심 광물을 추출하는 도시 광산(Urban Mining) 산업이 주목받고 있다. (O/X)", answer: ["O", "o"], explanation: "폐배터리 재활용은 환경오염을 줄일 뿐만 아니라, 부족한 핵심 원자재를 안정적으로 확보할 수 있는 중요한 미래 산업입니다." },
        { question: "배터리의 양극과 음극을 만드는 핵심 물질을 '활물질'이라고 부른다. (O/X)", answer: ["O", "o"], explanation: "활물질은 배터리 내에서 전기화학 반응에 직접 참여하여 전기를 생성하는 물질을 말합니다." },
        { question: "배터리의 전압은 양극과 음극의 전위차에 의해 결정된다. (O/X)", answer: ["O", "o"], explanation: "양극과 음극이 가진 전기적 위치 에너지의 차이가 클수록 더 높은 전압을 낼 수 있습니다." },
        { question: "리튬 이온 배터리는 메모리 효과가 거의 없어 수시로 충전해도 성능 저하가 적다. (O/X)", answer: ["O", "o"], explanation: "메모리 효과는 배터리를 완전히 방전하지 않고 충전하면 최대 용량이 줄어드는 현상으로, 주로 니켈-카드뮴(Ni-Cd) 전지에서 나타납니다." },
        { question: "전기차의 주행거리를 늘리기 위해 에너지 밀도가 높은 '이것' 니켈 양극재 기술이 주목받고 있습니다. '이것'은 무엇일까요?", answer: ["하이니켈"], explanation: "하이니켈 양극재는 니켈 비중을 80% 이상으로 높여 에너지 밀도를 극대화한 기술입니다." },
        { question: "배터리 셀의 모양에 따라 원통형, 각형, 그리고 얇은 주머니 모양의 '이것'으로 나뉩니다. '이것'은 무엇일까요?", answer: ["파우치형"], explanation: "파우치형 배터리는 얇고 유연하게 만들 수 있어 다양한 모양의 기기에 적용하기 용이합니다." },
        { question: "배터리 내부 온도가 급격히 상승하면서 화재와 폭발로 이어지는 현상을 '열 폭주' 현상이라고 한다. (O/X)", answer: ["O", "o"], explanation: "분리막 손상 등으로 양극과 음극이 접촉하면 단락이 발생하고, 이로 인해 과도한 열이 발생하여 열 폭주 현상이 일어날 수 있습니다." },
        { question: "배터리 용량을 나타내는 단위로 흔히 'Ah(암페어아워)'를 사용한다. (O/X)", answer: ["O", "o"], explanation: "Ah는 1A의 전류를 1시간 동안 흘려보낼 수 있는 전기량을 의미하며, 배터리가 저장할 수 있는 총 전하량을 나타냅니다." },
        { question: "배터리 내부의 이온 전도도를 높여 성능을 향상시키기 위해 전해질에 첨가하는 물질은 무엇일까요?", answer: ["전해질 첨가제", "염"], explanation: "리튬염(LiPF6 등)과 같은 첨가제는 전해질에 녹아 리튬 이온이 원활하게 이동하도록 돕는 역할을 합니다." },
        { question: "수명이 다한 전기차 배터리의 남은 용량이 초기 용량의 70~80% 정도일 때, 다른 용도로 재사용하는 것이 일반적이다. (O/X)", answer: ["O", "o"], explanation: "주행거리에는 부족하지만, 에너지 저장 장치(ESS)나 캠핑용 파워뱅크 등으로는 충분히 활용 가치가 있습니다." },
        { question: "양극재와 음극재 가루를 판(알루미늄박, 구리박)에 바르는 공정을 무엇이라고 할까요?", answer: ["코팅 공정"], explanation: "활물질, 도전재, 바인더를 섞은 슬러리를 얇고 균일하게 금속박에 바르는 핵심 공정입니다." },
        { question: "배터리의 출력을 높이기 위해 전극 내에서 전자 이동을 돕는 탄소 소재는 무엇일까요?", answer: ["도전재"], explanation: "활물질만으로는 전기 전도성이 낮기 때문에, 카본 블랙이나 CNT(탄소나노튜브) 같은 도전재를 섞어 전자의 이동을 원활하게 합니다." },
        { question: "배터리를 급속 충전하면 수명이 단축될 수 있다. (O/X)", answer: ["O", "o"], explanation: "높은 전류로 충전하면 전극 소재에 부담을 주어 구조를 손상시키고, 배터리 열화 현상을 가속화할 수 있습니다." },
        { question: "리튬 이온 배터리의 4대 핵심소재(양극재, 음극재, 분리막, 전해액) 원가 비중이 가장 높은 것은 양극재이다. (O/X)", answer: ["O", "o"], explanation: "양극재는 니켈, 코발트, 리튬 등 비싼 희귀 광물을 원료로 사용하기 때문에 배터리 전체 원가의 약 40%를 차지합니다." },
        { question: "리튬 대신 나트륨(소듐)을 활용하여 만드는 차세대 배터리는 무엇일까요?", answer: ["나트륨 이온 배터리", "소듐 이온 배터리"], explanation: "나트륨은 매장량이 풍부하고 저렴하여 리튬을 대체할 차세대 배터리 소재로 연구되고 있습니다." },
        { question: "배터리 셀을 조립한 후, 전기적 특성을 활성화시키고 안정화하기 위해 처음으로 충·방전하는 공정은 무엇일까요?", answer: ["활성화 공정"], explanation: "이 과정에서 음극 표면에 SEI(Solid Electrolyte Interphase)라는 보호막이 형성되어 배터리 수명과 안정성에 중요한 역할을 합니다." },
        { question: "LG에너지솔루션, 삼성SDI, SK온은 대한민국을 대표하는 배터리 3사이다. (O/X)", answer: ["O", "o"], explanation: "이 세 기업은 글로벌 전기차 배터리 시장에서 높은 점유율을 차지하며 K-배터리의 위상을 높이고 있습니다." },
        { question: "전기차 배터리 용량은 보통 'kWh(킬로와트시)' 단위로 표현한다. (O/X)", answer: ["O", "o"], explanation: "kWh는 1kW의 전력을 1시간 동안 사용했을 때의 에너지 양으로, 배터리가 총 얼마의 에너지를 저장하고 있는지를 나타냅니다." },
        { question: "음극재인 흑연은 천연 흑연과 '이것' 흑연으로 나뉩니다. 석유나 석탄 찌꺼기를 고온에서 가공하여 만드는 '이것'은 무엇일까요?", answer: ["인조 흑연"], explanation: "인조 흑연은 천연 흑연보다 구조가 균일하여 배터리 수명과 급속 충전 성능이 더 우수합니다." },
        { question: "배터리 내부의 압력이 비정상적으로 높아졌을 때 가스를 배출하여 폭발을 방지하는 안전장치는 무엇일까요?", answer: ["벤트"], explanation: "벤트는 배터리 내부에 설계된 일종의 안전밸브 역할을 합니다." },
        { question: "전고체 배터리는 액체 전해질이 없어 분리막이 필요 없다. (O/X)", answer: ["O", "o"], explanation: "고체 전해질이 양극과 음극을 분리하는 분리막의 역할까지 동시에 수행합니다." },
        { question: "배터리 연구 개발 시, 실제 크기의 배터리를 만들기 전에 성능을 테스트하기 위해 만드는 작은 규격의 배터리를 무엇이라고 할까요?", answer: ["코인 셀", "코인셀"], explanation: "동전 모양으로 작게 만들어 새로운 소재의 전기화학적 특성을 빠르고 간편하게 평가할 수 있습니다." },
        { question: "활물질과 도전재가 금속박에서 떨어지지 않도록 붙여주는 역할을 하는 접착제 물질은 무엇일까요?", answer: ["바인더"], explanation: "바인더는 모든 전극 재료들을 하나로 뭉쳐주고, 집전체인 금속박에 단단히 고정시키는 역할을 합니다." },
        { question: "리튬 이온 배터리는 영하의 추운 날씨에 성능(주행거리, 충전 속도)이 저하될 수 있다. (O/X)", answer: ["O", "o"], explanation: "낮은 온도에서는 전해질의 이온 전도도가 떨어져 내부 저항이 커지기 때문에 배터리의 화학 반응이 느려집니다." },
        { question: "배터리 생산 공정 중, 조립된 셀을 평평하게 눌러 내부 공간을 최적화하고 에너지 밀도를 높이는 공정은 무엇일까요?", answer: ["프레싱 공정"], explanation: "전극을 압축하여 활물질의 밀도를 높이고 전자의 이동 경로를 단축시켜 배터리 성능을 향상시킵니다." },
        { question: "양극재의 니켈 함량을 높이면 에너지 밀도는 올라가지만, '이것'이 낮아지는 단점이 있습니다. '이것'은 무엇일까요?", answer: ["안정성"], explanation: "니켈은 화학적으로 불안정한 편이라 함량이 높아질수록 열이나 외부 충격에 취약해져 안정성이 떨어질 수 있습니다." },
        { question: "한번 쓰고 버리는 1차 전지의 대표적인 예는 알카라인 건전지이다. (O/X)", answer: ["O", "o"], explanation: "알카라인, 망간 건전지 등은 재충전이 불가능한 1차 전지에 속합니다." },
        { question: "배터리 팩 내부에 셀들을 고정하고 외부 충격으로부터 보호하기 위해 사용하는 접착제를 '이것'이라고 합니다. '이것'은 무엇일까요?", answer: ["열전도성 접착제"], explanation: "단순 고정뿐만 아니라, 각 셀에서 발생하는 열을 효율적으로 방출시키는 중요한 역할을 합니다." },
        { question: "니켈-카드뮴(Ni-Cd) 전지는 카드뮴의 유해성 때문에 현재 거의 사용되지 않는다. (O/X)", answer: ["O", "o"], explanation: "카드뮴은 인체와 환경에 유해한 중금속으로, 친환경적인 리튬 이온 배터리나 니켈-수소(Ni-MH) 배터리로 대체되었습니다." },
        { question: "전기차에서 회생 제동 시스템을 사용하면 버려지는 운동 에너지를 전기 에너지로 전환하여 배터리를 '이것'할 수 있습니다. '이것'은 무엇일까요?", answer: ["충전"], explanation: "자동차가 감속할 때 바퀴의 회전력으로 발전기를 돌려 전기를 만들어 배터리에 저장함으로써 주행거리를 늘리는 기술입니다." },
        { question: "차세대 기술로 주목받는 '리튬-황 배터리'는 이론적으로 리튬 이온 배터리보다 에너지 밀도가 훨씬 높다. (O/X)", answer: ["O", "o"], explanation: "황은 가볍고 저렴하며 에너지 저장 용량이 매우 커서, 리튬-황 배터리는 리튬 이온 배터리보다 5배 이상 높은 에너지 밀도를 구현할 수 있을 것으로 기대됩니다." },
        // 일반상식 문제 1~20번
        { question: "지구에서 가장 높은 산은 에베레스트 산이다. (O/X)", answer: ["O", "o"], explanation: "에베레스트 산은 해발 8,848.86m로 지구상에서 가장 높은 산입니다." },
        { question: "사람의 피를 빨아먹는 모기는 암컷일까요, 수컷일까요?", answer: ["암컷"], explanation: "암컷 모기는 알을 낳는 데 필요한 단백질을 얻기 위해 사람이나 동물의 피를 빨아먹고, 수컷 모기는 주로 식물의 즙이나 꿀을 먹고 삽니다." },
        { question: "우리나라의 국보 1호는 숭례문이다. (O/X)", answer: ["O", "o"], explanation: "숭례문(남대문)은 대한민국 국보 제1호로 지정되어 있습니다. (단, 2021년 문화재 지정번호 제도 폐지 방침에 따라 현재는 '국보 숭례문'으로 표기합니다.)" },
        { question: "세계에서 커피를 가장 많이 생산하는 나라는 어디일까요?", answer: ["브라질"], explanation: "브라질은 전 세계 커피 생산량의 약 3분의 1을 차지하는 세계 최대 커피 생산국입니다." },
        { question: "인체에서 가장 작은 뼈는 귀 속에 있는 '등자뼈'이다. (O/X)", answer: ["O", "o"], explanation: "등자뼈(등골)는 귓속에 있는 작은 뼈로, 쌀 한 톨보다도 작습니다." },
        { question: "'모나리자'를 그린 화가는 누구일까요?", answer: ["레오나르도 다 빈치", "다빈치"], explanation: "모나리자는 르네상스 시대의 이탈리아 화가 레오나르도 다 빈치의 대표적인 작품입니다." },
        { question: "오천 원권 지폐에 그려진 과일은 무엇일까요?", answer: ["수박"], explanation: "오천 원권 뒷면에는 신사임당의 '초충도' 중 일부인 수박과 맨드라미 그림이 있습니다." },
        { question: "컴퓨터 자판에서 'Ctrl' 키와 'C' 키를 함께 누르면 실행되는 기능은 무엇일까요?", answer: ["복사하기", "복사"], explanation: "'Ctrl+C'는 선택한 내용을 복사하는 단축키이며, 'Ctrl+V'는 붙여넣기, 'Ctrl+X'는 잘라내기 기능입니다." },
        { question: "우리나라 최초의 한글 소설은 무엇일까요?", answer: ["홍길동전"], explanation: "홍길동전은 허균이 지은 우리나라 최초의 한글 소설로 알려져 있습니다." },
        { question: "올림픽은 몇 년마다 개최될까요?", answer: ["4년", "4"], explanation: "하계 올림픽과 동계 올림픽은 각각 4년마다 개최되며, 2년 간격으로 번갈아 열립니다." },
        { question: "'세종대왕'이 한글을 반포한 것을 기념하는 날은 '한글날'이며, 10월 9일이다. (O/X)", answer: ["O", "o"], explanation: "1446년 훈민정음 반포를 기념하는 국경일입니다." },
        { question: "대한민국의 정식 국가 명칭은 'Republic of Korea'이다. (O/X)", answer: ["O", "o"], explanation: "흔히 'South Korea'로 불리지만, 공식 영문 명칭은 'Republic of Korea'입니다." },
        { question: "'웃는 얼굴에 침 못 뱉는다'와 같은 말을 네 글자로 무엇이라고 할까요?", answer: ["속담"], explanation: "예로부터 민간에 전해 내려오는 교훈이나 풍자를 담은 짧은 글귀를 말합니다." },
        { question: "세계 3대 영화제는 칸 영화제, 베를린 국제 영화제, 그리고 '이것'입니다. 이탈리아에서 열리는 '이것'은 무엇일까요?", answer: ["베니스 국제 영화제"], explanation: "세계에서 가장 오래된 역사를 자랑하는 국제 영화제입니다." },
        { question: "태양계 행성 중 태양에서 가장 가까운 행성은 '수성'이다. (O/X)", answer: ["O", "o"], explanation: "태양계는 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성 순으로 배열되어 있습니다." },
        { question: "조선 시대의 왕과 왕비의 무덤을 '능'이라고 한다. (O/X)", answer: ["O", "o"], explanation: "왕세자와 왕세자비의 무덤은 '원', 그 외 왕족의 무덤은 '묘'라고 구분하여 불렀습니다." },
        { question: "물이 끓기 시작하는 온도는 섭씨 100도이다. (O/X)", answer: ["O", "o"], explanation: "1기압 상태에서 순수한 물의 어는점은 0℃, 끓는점은 100℃입니다." },
        { question: "'셰익스피어 4대 비극'은 햄릿, 오셀로, 리어왕, 그리고 '이것'입니다. '이것'은 무엇일까요?", answer: ["맥베스"], explanation: "윌리엄 셰익스피어의 대표적인 4대 비극 작품입니다." },
        { question: "우리나라의 화폐(돈)를 만드는 기관은 어디일까요?", answer: ["한국조폐공사"], explanation: "한국은행의 요청에 따라 화폐, 우표, 여권 등을 제조하는 공기업입니다." },
        { question: "'빛의 3원색'은 빨강(Red), 초록(Green), 그리고 '이것'입니다. '이것'은 무엇일까요?", answer: ["파랑", "Blue"], explanation: "이 세 가지 색을 섞으면 흰색(백색광)이 되며, TV나 모니터 화면의 색을 구현하는 기본 원리입니다." }
    ];

    // --- 필요한 HTML 요소들 가져오기 ---
    const mainMenuContainer = document.getElementById('main-menu-container');
    const quizContainer = document.getElementById('quiz-container');
    const applicationContainer = document.getElementById('application-container');
    const questionListContainer = document.getElementById('question-list-container');
    const applicationForm = document.getElementById('application-form');

    const startMiniQuizBtn = document.getElementById('start-mini-quiz-btn');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const showApplicationBtn = document.getElementById('show-application-btn');
    const showAllQuestionsBtn = document.getElementById('show-all-questions-btn');
    const backToMenuBtns = document.querySelectorAll('.back-to-menu-btn');
    
    const quizArea = document.getElementById('quiz-area');
    const resultsContainer = document.getElementById('results-container');
    const scoreText = document.getElementById('score-text');
    const incorrectQuestionsListDiv = document.getElementById('incorrect-questions-list');
    const restartBtn = document.getElementById('restart-btn');

    const allQuestionsListDiv = document.getElementById('all-questions-list');
    const progressText = document.getElementById('progress');
    const questionNumberText = document.querySelector('.question-number');
    const questionText = document.getElementById('question-text');
    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackText = document.getElementById('feedback-text');
    const correctAnswerText = document.getElementById('correct-answer');
    const explanationText = document.getElementById('explanation');

    let shuffledQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let incorrectAnswers = [];

    // --- 화면 전환 로직 ---
    startMiniQuizBtn.addEventListener('click', () => {
        mainMenuContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        startMiniQuiz();
    });

    startQuizBtn.addEventListener('click', () => {
        mainMenuContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        startQuiz();
    });

    showApplicationBtn.addEventListener('click', () => {
        mainMenuContainer.classList.add('hidden');
        applicationContainer.classList.remove('hidden');
    });

    showAllQuestionsBtn.addEventListener('click', () => {
        mainMenuContainer.classList.add('hidden');
        displayAllQuestions();
        questionListContainer.classList.remove('hidden');
    });

    backToMenuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            quizContainer.classList.add('hidden');
            applicationContainer.classList.add('hidden');
            questionListContainer.classList.add('hidden');
            mainMenuContainer.classList.remove('hidden');
            if (applicationForm) {
                applicationForm.reset();
            }
        });
    });
    
    // --- 전체 문제 목록 생성 함수 ---
    function displayAllQuestions() {
        allQuestionsListDiv.innerHTML = '';
        const ol = document.createElement('ol');
        quizData.forEach((q) => {
            const li = document.createElement('li');
            li.innerText = q.question;
            ol.appendChild(li);
        });
        allQuestionsListDiv.appendChild(ol);
    }

    // --- 신청서 제출 로직 ---
    if (applicationForm) {
        applicationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScRI5Tbnz8EafOAfH2wl9bTqVrmdzXy_ftcF6n0-brDnyxtDg/viewform";
            const entry_department = "entry.169879123";
            const entry_studentId  = "entry.2030635485";
            const entry_name       = "entry.1082521711";
            const entry_phone      = "entry.2081734208";
            
            const department = document.getElementById('department').value;
            const studentId = document.getElementById('student-id').value;
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;

            const finalUrl = `${GOOGLE_FORM_URL}?usp=pp_url&${entry_department}=${encodeURIComponent(department)}&${entry_studentId}=${encodeURIComponent(studentId)}&${entry_name}=${encodeURIComponent(name)}&${entry_phone}=${encodeURIComponent(phone)}`;

            window.open(finalUrl, '_blank');
            alert("신청서가 새 탭으로 열렸습니다.\n내용을 확인하고 최종 제출해주세요!");
        });
    }

    // --- 퀴즈 로직 ---
    function initializeQuiz() {
        score = 0;
        incorrectAnswers = [];
        currentQuestionIndex = 0;
        resultsContainer.classList.add('hidden');
        quizArea.classList.remove('hidden');
        showQuestion();
    }

    function startMiniQuiz() {
        const tempShuffled = [...quizData].sort(() => Math.random() - 0.5);
        shuffledQuestions = tempShuffled.slice(0, 20);
        initializeQuiz();
    }

    function startQuiz() {
        shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
        initializeQuiz();
    }

    function showQuestion() {
        resetState();
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        const questionNum = currentQuestionIndex + 1;
        
        progressText.innerText = `문제 ${questionNum} / ${shuffledQuestions.length}`;
        questionNumberText.innerText = `문제 ${questionNum}`;
        questionText.innerText = currentQuestion.question;

        if (currentQuestionIndex > 0) {
            prevBtn.classList.remove('hidden');
        } else {
            prevBtn.classList.add('hidden');
        }
    }

    function resetState() {
        feedbackContainer.classList.add('hidden');
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
        answerInput.classList.remove('hidden');
        answerInput.value = '';
        answerInput.disabled = false;
        answerInput.focus();
    }
    
    function checkAnswer() {
        const userAnswer = answerInput.value.trim();
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        // 정답을 입력하지 않고 제출하면, 오답 처리 (틀린 문제 목록에 추가)
        const isCorrect = userAnswer !== '' && currentQuestion.answer.some(ans => ans.toLowerCase() === userAnswer.toLowerCase());
        
        if (isCorrect) {
            score++;
        } else {
            incorrectAnswers.push(currentQuestion);
        }

        feedbackContainer.classList.remove('hidden');
        feedbackContainer.classList.remove('correct', 'incorrect');
        if (isCorrect) {
            feedbackText.innerText = '정답입니다! 🎉';
            feedbackText.className = 'correct';
            feedbackContainer.classList.add('correct');
        } else {
            feedbackText.innerText = '오답입니다. 😥';
            feedbackText.className = 'incorrect';
            feedbackContainer.classList.add('incorrect');
        }
        correctAnswerText.innerText = `정답: ${currentQuestion.answer[0]}`;
        explanationText.innerText = `해설: ${currentQuestion.explanation}`;

        submitBtn.classList.add('hidden');
        answerInput.disabled = true;
        nextBtn.classList.remove('hidden');
    }
    
    function handleNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion();
        } else {
            showFinalMessage();
        }
    }
    
    function handlePrevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            const previousQuestion = shuffledQuestions[currentQuestionIndex];
            // 뒤로 갔을 때, 이전에 틀렸던 문제 목록에서 해당 문제를 제거 (실수 바로잡기 기회)
            const incorrectIndex = incorrectAnswers.findIndex(item => item.question === previousQuestion.question);
            if (incorrectIndex > -1) {
                incorrectAnswers.splice(incorrectIndex, 1);
            }
            // 점수도 되돌려야 한다면, 추가적인 정답 기록 로직이 필요하지만 우선은 오답 기록만 삭제
            showQuestion();
        }
    }

    function showFinalMessage() {
        quizArea.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        const totalQuestions = shuffledQuestions.length;
        scoreText.innerText = `총 ${totalQuestions}문제 중 ${score}개 정답! (틀린 문제: ${incorrectAnswers.length}개)`;

        incorrectQuestionsListDiv.innerHTML = '';
        if (incorrectAnswers.length > 0) {
            const title = document.createElement('h3');
            title.innerText = '틀린 문제 다시보기';
            incorrectQuestionsListDiv.appendChild(title);

            incorrectAnswers.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'incorrect-item';

                const questionP = document.createElement('p');
                questionP.className = 'question';
                questionP.innerText = `문항: ${item.question}`;

                const answerP = document.createElement('p');
                answerP.className = 'answer';
                answerP.innerText = `정답: ${item.answer[0]}`;

                itemDiv.appendChild(questionP);
                itemDiv.appendChild(answerP);
                incorrectQuestionsListDiv.appendChild(itemDiv);
            });
        }
        
        if (shuffledQuestions.length === 20) {
            restartBtn.onclick = startMiniQuiz;
        } else {
            restartBtn.onclick = startQuiz;
        }
    }

    // --- 이벤트 리스너 등록 ---
    submitBtn.addEventListener('click', checkAnswer);
    prevBtn.addEventListener('click', handlePrevQuestion);
    nextBtn.addEventListener('click', handleNextQuestion);
    answerInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter' && !submitBtn.classList.contains('hidden')) {
            checkAnswer();
        }
    });
});