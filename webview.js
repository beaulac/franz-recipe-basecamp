module.exports = (Franz, options) => {
  const getMessages = () => {
    const readBadgeCount = e => parseInt(e.getAttribute('data-badge-count'), 10);

    const [indirect, direct] = [...document.querySelectorAll('.unread-badge')].map(readBadgeCount);

    Franz.setBadge(direct, indirect);
  };


  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
