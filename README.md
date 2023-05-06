# React Modal HP



Modal Component with React and Typescript.

리액트와 타입스크립트를 사용한 모달 컴포넌트.



## Installation



### In React App

```bash
# use npm
npm install react-modal-hp

#use yarn
yarn add react-modal-hp
```



## Before Use

Before use, create a root div for the modal in `public/index.html`.

사용 전 `public/index.html`에 모달의 root div를 생성해주세요.



```html
<!-- public/index.html -->
<head>
  <title>Your React Project</title>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <!-- Add the following code to create a root div for the modal. -->
  <!-- 이 부분에 아래와 같이 작성해주세요. -->
  <div id="modal-root"></div>
</body>
```



## Modal && useModal



### Import

```tsx
import Modal from 'react-modal-hp';
```

```tsx
import { useModal } from 'react-modal-hp'
```



### Example

```tsx
import Modal, { useModal } from 'react-modal-hp';

// Get the portal element using the ID of the root div you created earlier.
// 위에서 생성한 root div의 id 값으로 portal을 가져옵니다.
const portal = document.getElementById('modal-root') as HTMLDivElement;

function App() {
  // The useModal hook is used to manipulate the modal.
  // 모달을 조작할 수 있는 hook 입니다.
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>open</button>
      <Modal open={isOpen} onClose={closeModal} portal={portal}>
        Write Your Modal Content Here
      </Modal>
    </>
  );
}
```



### Modal Props

| Attribute | Type | Description | Default |
| :-------: | :--: | :---------- | :-----: |
| open | boolean |Indicates whether the modal is open or closed<br />모달이 열고 닫힌 상태||
| onClose | () => void |A function to close the modal<br />모달을 닫는 함수||
| position | ModalPosition |The position of the modal<br />모달의 위치|'bottom'|
| animation | boolean \| undefined |Whether the modal should have an animation<br />모달 애니메이션 유무||
| portal | Element |The root element of the modal<br />모달의 root가 되는 엘리먼트||
| children | React.ReactNode |The contents of the modal<br />모달 컨텐츠||



```tsx
type ModalPosition = 'bottom'
```



### useModal Type

| Property   | Type       | Description                                                  | Initial |
| ---------- | ---------- | ------------------------------------------------------------ | ------- |
| isOpen     | boolean    | Indicates whether the modal is open or closed<br />모달의 열고 닫힌 상태 | false   |
| openModal  | () => void | A function to update isOpen to true<br />isOpen을 true로 업데이트 |         |
| closeModal | () => void | A function to update isOpen to false<br />isOpen을 false로 업데이트 |         |



## useModalContext

A hook used in the modal content.

모달 컨텐츠에서 사용하는 hook.

The close function can be used inside.

내부에서 모달 닫기 메서드를 사용할 수 있다.



### Import

```tsx
import { useModalContext } from 'react-modal-hp';
```



### Example

```tsx
import { useModalContext } from 'react-modal-hp';

function ModalContent() {
  const { close } = useModalContext();

  const onClose = () => {
    // Perform the desired logic before closing.
    close();
  };

  return (
    <div>
      <button onClick={onClose}>close</button>
      <p>Hi. This is Modal</p>
    </div>
  );
}
```



### Types

| Property | Type       | Description                                          |
| -------- | ---------- | ---------------------------------------------------- |
| close    | () => void | A function to close the modal.<br />모달을 닫는 함수 |

