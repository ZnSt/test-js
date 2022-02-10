import BSN from "bootstrap.native";

// -----------------setTimeout--------------------
// console.log("до вызова setTimeout");

// setTimeout(() => {
//   console.log("внутри колбэк для setTimeout");
// }, 2000);

// console.log("После вызова setTimeout");

// const logger = (time) => {
//   console.log(`лог через ${time}, потому что не отменили таймаут`);
// };

// ---------------------clearTimeout---------------------
// const timerId = setTimeout(logger, 2000, 2000);
// console.log("timerId", timerId);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(" shouldCancelTimer", shouldCancelTimer);
// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }

// const logger = (time) => console.log(`лог каждые ${time}ms - ${Date.now()}`);

// const intervalValid = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log("shouldCancelInterval", shouldCancelInterval);
// if (shouldCancelInterval) {
//   clearInterval(intervalValid);
// }

// -----------------Модальное окно--------------------

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const refs = {
//   notification: document.querySelector(".js-alert"),
// };

// refs.notification.addEventListener("click", onNotificationClick);

// showNotification();

// function onNotificationClick() {
//   hideNotification();
//   clearTimeout(timeoutId);
// }

// function showNotification() {
//   refs.notification.classList.add("is-visible");
//   timeoutId = setTimeout(() => {
//     console.log("закрываем алерт автоматически чтобы не висел");
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//   refs.notification.classList.remove("is-visible");
// }

// ---------------------Надоедалка---------------------

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPS || hasSubscribed) {
//     console.log("Нужно остановить интервал");
//     clearInterval(intervalId);
//     return;
//   }
//   console.log("Подпишись на рассылку! - " + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);

const modal = new BSN.Modal("#exampleModal");

const refs = {
  modal: document.querySelector("#exampleModal"),
};

const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPS = 3;
let promptCounter = 0;
let hasSubscribed = false;

openModal();

refs.modal.addEventListener("hide.bs.modal", () => {
  openModal();
});

function openModal(params) {
  if (promptCounter === MAX_PROMPT_ATTEMPS) {
    return;
  }
  setTimeout(() => {
    console.log("Открываем модалку");
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}
