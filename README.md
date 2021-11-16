# to-do list
react와 css를 활용하여 만든 to-do list 목표기능으로는
오늘 날짜불러오기, 체크목록 생성, 삭제가 있습니다.

사용한 라이브러리는

styled-components ( css관련 )
react-icons (아이콘)
gh-pages (페이지 보여주기)

사용한 훅은
useRef
useReducer
ContextAPI (-> TodoUseContext)
-createContext
-useContext

커스텀
useTodoState
useTodoDispatch
useTodoNextId

처음에 원하는 todo-list의 디자인을 해
거기에 맞게 css작업을 하고 JS와 CSS, react관련 공부를 같이 하면서 만들었습니다.
contextAPI와 기능부분을 주로 참고했던 링크는 
https://react.vlpt.us/mashup-todolist/01-create-components.html
입니다.

# 21.10.28
doto-list관련 웹-앱디자인을 figma로 기획했습니다.

( 링크에서 확인 가능합니다. 그러나 무료계정이기에 다른사람이 수정할 수 있음으로 figgam으로 복사하였습니다.)

# 21.11.02
기본적으로 화면비율을 맞추기위해 vh,vw으로 기획했습니다. react-icons 라이브러리를 설치했습니다. (TodoItem, 리스트 체크와 삭제관련)

# 21.11.03
styled-components 라이브러리를 사용하여 일부분의 js안에 css를 삽입했습니다.

# 21.11.05
to-do list 작성시, 일정 문자수 초과시 다음줄로 내려받게 조정했습니다.
to-do 항목이 많으면 스크롤되게 조정했습니다.
(css의 webkit-scrollbar로 커스텀 스크롤바를 만들었습니다)

# 21.11.06
웹 css 완성 / gh-pages로 페이지를 만들고 다른 모니터로 테스트

# 21.11.07~13
css와 JS, react공부를 다시 재개하느라 잠시 개발을 멈췄습니다.
css 부분에서 create 버튼의 영역을 애니메이션으로 전환시키는 방법을 고민하고있습니다.

//https://react.vlpt.us/mashup-todolist/02-manage-state.html
참고하기.

# 21.11.14
ContextAPI 관련 들어가기
useRef 관련 참고를 하여 배열의 고유값인 id값을 nextid로 조정했습니다.
https://yoonjong-park.tistory.com/entry/React-useRef-%EB%8A%94-%EC%96%B8%EC%A0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EA%B0%80

ContextAPI의 나 자신이 헷갈리지않게 설명부분을 추가했습니다.


<b>74번째 줄 중요.</b>
1. 만약 useTodoState,dispatch,nextID가
APP.js에서 요소들이 TodoUseContext 로 감싸져있지 않다면 에러를 발생시키도록 if문 처리
2. 외부에서 호출하는건 먼저 app에서 TodoUseContext로 감쌌으니
이 밑의 useTodo~의 이름을 가진 useContext들을 원하는곳에 호출가능.

# 21.11.15
MainHead에서 오늘 날짜를 불러오는것은 
https://niceman.tistory.com/115
를, 날짜 양식은
http://www.devdic.com/javascript/refer/native/method:1285/toLocaleDateString()
를 참고했습니다.

react-live-clock( 현재 시간 불러오기 )를 하려고했으나,, 간단하게 가져오기위해 JS 내장함수인 date와 toLocaleDateString를 사용해 가져왔습니다.

# 21.11.16
todoitem의 삭제기능 완성.

목록 추가 (create) 부분에서 onSubmit의 dispatch에 추가하면 심각한 오류가 생겨
https://velog.io/@velopert/typescript-context-api
를 참고하였습니다.

id와 done을 멀쩡히 추가했지만 text부분이 undefined로 뜨는 오류 발견
concat으로 복사하여 추가하였지만, id값이 객체로 저장되어 key값도 같이 겹치는 상황발생

# 21.11.17
-- 모바일 css 다뤄보기.


# 기본기능이 있는 todo_list를 완성 뒤에 해야할것
수정해야하는것
-create의 애니메이션... -> +버튼과 전체버튼의 애니메이션 처리를 해보자
-모바일 css를 만들자

이제 추가하면 좋겠다고 생각한 것
-완료된것들은 맨 위로 올려보내는 처리해주기 
-현재 날짜외에도 캘린더기능을 추가하여 todolist를 작성한 날 모아둬서 조회하기