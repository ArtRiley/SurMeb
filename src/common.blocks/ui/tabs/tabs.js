const tabs = document.querySelectorAll('.tabs-list__item');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].onclick = () => {
    const currentFrame = tabs[i].closest('.tabs');
    const currentFrameTabs = currentFrame.querySelectorAll('.tabs-list__item');
    let tabIndex = null;
    for (let j = 0; j < currentFrameTabs.length; j++) {
      currentFrameTabs[j].classList.remove('is-active');
      if (tabs[i] === currentFrameTabs[j]) {
        tabIndex = j;
        console.log(tabIndex);
      }
    }
    tabs[i].classList.add('is-active');

    const currentFrameContents = currentFrame.querySelectorAll('.tabs-content__item');
    for (let j = 0; j < currentFrameContents.length; j++) {
      currentFrameContents[j].classList.remove('is-active');
    }
    currentFrameContents[tabIndex].classList.add('is-active');
  };
}
