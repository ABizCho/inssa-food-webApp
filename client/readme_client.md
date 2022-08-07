# client 소개 (08.07)
약간의 DDD(Domain Driven Design) 패턴을 적용했습니다.<br><br>

조직된 client 구성도는 아래와 같습니다.

설명이 불필요한 (ex. public) 요소는 구성도에서 제외했습니다.
<br><br>

```
client

ㄴsrc/        - 실질적인 작업영역
    ㄴApp.js        
    ㄴApp.css   - 앱 전역에 적용할 layout 등 정의 
    ㄴindex.js

    ㄴapp/     - 리덕스 정의 영역
        ㄴreducer/
            ㄴ....js
        ㄴStore.js

    ㄴcommon/   - 앱 전역레벨의 공통 사용가능 자원 관리
        ㄴcomponents/
            ㄴFooter.js
            ㄴHeader.js

    ㄴpages/    - 라우팅 대상 페이지 관리 
        ㄴHistory/
            ㄴHistory.js  - History 페이지
            ㄴcomponents/...

        ㄴIntro/
            ㄴIntro.js    - Intro 페이지: 기본경로 페이지
            ㄴcomponents/
                ㄴFoodInfo/
                    ㄴFoodInfo.js
                    ㄴFoodInfo.css
                ㄴGetImg/
                    ㄴGetImg.js
                    ㄴGetImg.css
                ㄴServiceInfo/
                    ㄴServiceInfo.js
                    ㄴServiceInfo.css

```
