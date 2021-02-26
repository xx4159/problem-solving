# 연결 리스트

![linkedlist](./linkedlist.png)
이미지 출처: https://www.geeksforgeeks.org/data-structures/linked-list/

- 자바스크립트 배열은 객체이므로 C++, 자바 등에 비해 비효율적
- 노드 객체가 모여 연결리스트 
- 링크 = 다른 노드를 참조하는 레퍼런스
- Node 클래스
    - element: 데이터 저장
    - next: 다음 노드 링크 저장
        ```js
        function Node(element) {
        	this.element = element;
        	this.next = null;
        }
        ```
- LinkedList 클래스: 노드 삽입, 삭제, 검색 등의 기능 제공
    ```js
    function LList() {
    	this.head = new Node('head');
    	this.find = find;
    	this.insert = insert;
    	this.remove = remove;
    	this.display = display;
    }
    ```
