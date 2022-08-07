## 개발 시 서버 구동 커맨드
```
$npm start 
```
package.json에 `nodemon app.js`를 npm start 커맨드에 적용시켜뒀습니다. 즉, 개발 시 클라이언트와 서버 모두 npm start 명령어로  테스트 가능합니다.

---

## secure_data 폴더란?
보안 취약점이 될 수 있는 데이터는, 사용하는 파일 내에서 직접 입력하기보다 모듈화하여 최소한의 보안성을 갖춰야 할 것 같습니다. 
<br><br>

해당 secure_data폴더는 팀플 개발 종료 시, `root/.gitignore`에 추가해 외부노출이 되지 않도록 처리해줄 예정입니다.
가장 베이직하게 [server,db]의 포트번호를 `sercure_data/ports.js`파일로 모듈화시켜 관리하도록 설정해뒀습니다.
<br><br>
이후에 mailer 자동화 시에도 누군가의 google계정 2차 비밀번호를 사용할텐데, 해당 정보도 반드시 secure_data에 모듈화시켜야 할 것 같습니다. (실제로 실습시 사용한 제 구글 2차 비밀번호가 깃허브에 올린 후 파싱되어, 프랑스 postal 기업 사칭 스팸메일에 악용되었습니다..)