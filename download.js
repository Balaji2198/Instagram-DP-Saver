var link = document.createElement("link");
link.href = chrome.extension.getURL("style.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

function display() {
  buttons = document.querySelectorAll('button');
  headings = document.querySelectorAll('h2');

	headers = document.querySelectorAll('header');

  images = document.querySelectorAll('img');

  let dlbutton = document.createElement('a');
  dlbutton.innerHTML = `
              <a download href=${images[0].src}>
              <button class="button"><span> Download DP </span></button>`;
  if(headers[0].querySelectorAll('button').length < 4) {
    headers[0].appendChild(dlbutton);
  }
}

display();
