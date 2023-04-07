const notificationsTotal = document.getElementById("notifications-total");
const markAllReadBtn = document.getElementById("mark-all-read-btn");
const notifications = document.querySelectorAll(".notification");
const activeDots = document.querySelectorAll(".active-dot");
const privateMessage = document.querySelector(".private-message__container");

notificationsTotal.textContent = 3;

markAllReadBtn.addEventListener("click", () => {
  notificationsTotal.textContent = 0;
  notifications.forEach((notification) => {
    notification.classList.contains("notification-component_pm")
      ? privateMessage.classList.remove("unread")
      : notification.classList.remove("unread");
  });
});

notifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    if (notification.classList.contains("notification-component_pm")) {
      notificationsTotal.textContent = !privateMessage.classList.contains(
        "unread"
      )
        ? Number(notificationsTotal.textContent) + 1
        : Number(notificationsTotal.textContent) - 1;

      privateMessage.classList.toggle("unread");
    } else {
      notificationsTotal.textContent = !notification.classList.contains(
        "unread"
      )
        ? Number(notificationsTotal.textContent) + 1
        : Number(notificationsTotal.textContent) - 1;

      notification.classList.toggle("unread");
    }
  });
});
