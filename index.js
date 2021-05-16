const showLoader = (options) => {
  let localOptions = {
    fullPage: true,
    loaderTitle: "Loading...",
  };
  if (!isNullOrUndefined(options)) {
    if (hasParam(options.fullPage)) {
      localOptions.fullPage = options.fullPage;
    }
    if (hasParam(options.title)) {
      localOptions.loaderTitle = options.title;
    }
  }

  if (document) {
    let loaderDiv = document.createElement("div");
    loaderDiv.id = "dk-js-loader";
    loaderDiv.innerHTML = `
   <style>
.overlay {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    opacity:0.4;
    background: #222;
}

.overlay__inner {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}

.overlay__content {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    color:#fff;
}

.spinner {
    width: 75px;
    height: 75px;
    display: inline-block;
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.05);
    border-top-color: #fff;
    animation: spin 1s infinite linear;
    border-radius: 100%;
    border-style: solid;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
   <div class="overlay">
      <div class="overlay__inner">
          <div class="overlay__content"><span class="spinner"></span>
          <p>${localOptions.loaderTitle}</p>
          </div>
      </div>
		</div>`;
    document.body.appendChild(loaderDiv);
  }
};

const hasParam = (param) => {
  return typeof param !== "undefined";
};
const isNullOrUndefined = (value) => {
  return value === null || value === undefined;
};

const hideLoader = () => {
  if (document) {
    let loaderElem = document.getElementById("dk-js-loader");
    if (!isNullOrUndefined(loaderElem)) {
      loaderElem.parentElement.removeChild(loaderElem);
    }
  }
};

module.exports = { showLoader, hideLoader };
