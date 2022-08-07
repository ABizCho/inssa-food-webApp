# client 소개
DDD(Domain Driven Design) 패턴을 적용했습니다.
<br><br>

기존 저희가 사용하던 MVC 패턴에선 Client 내에 <br>
1. Model/
2. View/
3. Controller(router)/

를 client디렉토리 직하로 두고, 해당 폴더들 내에서 도메인들을 묶어서 작업했는데요

저희가 작업할 방식은 팀원 각각 기능을 잡아 front-back을 일괄작업하는 방식이므로, 도메인별로 폴더를 만들고 도메인 폴더마다 MVC를 만들어 작업하는것이 커뮤니케이션이나 작업 면에서 효율적일 것이라고 확신합니다. 

예상하는 구성도는 아래와 같습니다.
<br><br>

```
client
ㄴsrc/
    ㄴcommon/
    ㄴdomain/
        ㄴ
        ㄴsignUp
```
