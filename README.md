# inssa-food-client
inSSA-Food 프로젝트 co-work를 진행하는 레포입니다.

<br><br>

---
## Core기능 시연
<br><br>

<img width="150px" src="./Animation.gif">

<br><br><br>

## Co-Work Space
---

### [**NOTION: 인싸푸드**](https://www.notion.so/a4954223b7db40328712652a080aab24?v=ccefa0f4dc2142f995fbd3383f288ec1) <br>
### [**Figma: 인싸푸드**](https://www.figma.com/files/team/1051496486497256392/inssaFood?fuid=1051496482104027174)<br>

<br><br><br>

---
<br>

## 기획 초안 ( 2022년 7월 11일 )<br><br>

### 2022 AI, 소프트웨어(SW) 개발자 양성 과정 
<br>

#### 팀명 : 인싸푸드
#### 주제 : 이 음식 뭐야? 인싸푸드
<br>

### 개요  
Ingredient Insight, 인싸푸드. 외국인 관광객 등을 위해 음식 사진을 통해 맵기, 채식, 할랄, 알러지 정보 등 성분검색을 제공하는 웹 서비스. 

<br>

### 배경 및 목표
관광객의 현지 식당 및 음식 정보가 부족하다. 이는 국가나 개인간의 식문화 차이의 문제(ex. 할랄, 비건) 혹은 개인의 신체적 결함에 기인한 섭취할 음식의 알러지 유발 문제 등을 야기할 수 있다. 해당 프로젝트는 국내외의 해외여행 관광객을 타겟으로 음식 상세정보를 제공하고자 한다. AI 이미지 분류 모델을 활용해 사용자가 메뉴판 등에서 촬영한 텍스트 정보나 음식 사진을 분류하여 해당 음식의 상세 정보 제공 서비스를 제공한다. 또, 식당(음식) 평가 커뮤니티를 웹앱 서비스로 구현하여, 관광객의 현지 식당과 음식 정보의 접근성을 높임으로써 이런 정보 부족 문제를 해결하고자 한다.

<br>

### 일정

1. 8월 5일 ~ 7일 : 정의 및 분석 
2. 8월 8일 ~ 10일 : 텐서플로우 학습. 프런트/ 백구성
3. 8월 11일 ~ 12일 : 설계 (산출물: 요구사항, 다이어그램, 와이어프레임)
4. 8월 13일 ~ 17일 : 구현 
5. 8월 18일 ~ 19일 : Testing 

<br>

### 시장성 분석

- 유사 서비스 조사 : <br>
  -  푸드렌즈 <br>
  활용하는 AI기술 및 데이터 유사하나 식단관리 앱의 기능에 집중하여 재료가 아닌 영양정보를 제공한다는 점에서 본 서비스와 방향성이 다름. 푸드렌즈 앱 다운로드 수는 플레이스토어 기준 1000회 단위. 그러나 인싸푸드는 웹 기반으로 만들 것이기 때문에, 더 많은 사용자 유입을 기대함.<br><br>

  - 네이버 지도, 카카오맵 <br>
  본 서비스들은 위치기반으로 사용자의 평가가 반영된 식당 정보를 제공한다. 주로 내국인 회원을 타겟으로 하며 메뉴, 음식에 대한 상세 정보가 제공되지 않기 때문에 방향성이 다르다. <br><br>

- 타겟 및 수요 조사 : <br>
  - 국내 체류 외국인 수 : 2019년 2,524,656명. 2020년 2,036,075명. 2021년 1,956,781명. // 국내 방문 외국인 수 : 31,048,752명, 35,752,704명, 5,530,350명, 2,127,176명. 코로나 시국이 끝나는 대로 다시 연간 3천만명 수준으로 회복할 것으로 예상. (출처 : 법무부 출입국통계 https://www.moj.go.kr/moj/2411/subview.do)
    - 국내 채식주의자 수 : 약 100만명에서 150만명 사이 규모 (출처 : 불교신문 이성진 기자 http://www.ibulgyo.com/news/articleView.html?idxno=160733)

<br><br>

### 데이터 수집 및 전처리
AI-hub에서 한국 음식 150종(종별 약 1천장)의 데이터를 구축한 이미지 데이터셋을 활용할 예정이다. <br><br>
한식 등 국내 특화 시각지능기술 및 서비스 개발을 위해 필요한 이미지 데이터의 제작, 수집,분류 체계를 마련하고 관련 정보가 레이블링 된 데이터이다. 한국 음식 인식성능 강화를 위해 한국 음식 150종(종별 약 1천장)의 데이터 수집 및 세그먼트 정보 등을 태깅한 데이터이다. 이 데이터는 이미 전처리가 완료된 데이터이다.
https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&aihubDataSe=realm&dataSetSn=79 <br><br>

### 모델 구현
OCR,  TensorFlow 이미지 분류 모델을 활용한다.<br>
텐서플로우에 있는 케라스를 이용한 이미지 분류를 사용할 예정이다. 이 모델은 ImageNet 데이터베이스의 라벨로 이미지를 분류하며, CNN(Convolution Neural Network)를 사용하는데 이는 인간의 시신경 구조를 모방한 Convolution과 Pooling을 반복해 특징을 추출하고, 완전연결계층을 통해 입력된 이미지를 분류하기 위한 변별적 학습을 수행한다. <br><br>
Convolution은 인간의 시신경 구조를 모방한 Convolutional kernal을 이용하여 이루어진다. 이를 통해 이미지의 추상적인 특징을 여러 관점에서 추출해 위치에 무관한 특징을 추출한다. Pooling은 이미지의 특징을 유지하면서 차원을 축소한다.
OCR은 텍스트 이미지를 기계가 읽을 수 있는 텍스트 포맷을 변환하는 과정이다. 기존의 이미지 파일에서는 텍스트 편집기를 사용하여 단어를 편집, 검색하거나 단어 수를 계산할 수 없었다. 그러나 OCR을 사용하면 이미지를 텍스트 문서로 변환하여 내용을 텍스트 데이터로 저장할 수 있다.

<br><br>

### 기술스택 및 개발환경
- 운영 체제: windows
- 언어: HTML,CSS,JS,TS
- DB: MongoDB(NoSQL) 
- 라이브러리: react.js
- AI모델: TensorFlow
- 에디터: visual studio code
- UI 디자인: Figma
- 협업 툴: GitHub, Notion

<br><br>

### Flow Chart
<img src='./doc/flow-chart.png'>















