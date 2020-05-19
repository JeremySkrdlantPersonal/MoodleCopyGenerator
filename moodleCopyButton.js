function updateDemoAndCode(){
  let unique = document.getElementById('unique').value.replace(/\s/g, '');;
  let title = document.getElementById('sectionTitle').value;
  let subString = document.getElementById('subTitle').value;
  let copyString = document.getElementById('copyString').value;

  let finalString = ""
  let titleArea = `<h2 style="color:#ce1126; text-shadow:0px 1px 1px #aaa;margin-bottom:0px; padding-bottom:0px;">${title}</h2>`
  let subtitleArea = `<p style="color:#222; font-size:14px; margin:3px 0px 5px 0px; padding:0px;">${subString}</p>`

  if(title != ""){
    finalString += titleArea + "\n";
  }

  if(subString != ""){
    finalString += subtitleArea + "\n";
  }

 finalString += `<div style="position:relative">
      <textarea readonly id="clone-${unique}" rows="1" style="background-color:#444;outline:none;color:#fff; font-weight:400;resize:none;cursor:text; border:solid 1px #000;box-shadow:inset 0px 0px 5px #000;padding-left:10px;text-shadow:0px 1px 1px #000;font-family:sans-serif;">${copyString}</textarea>
      <button id="copy-${unique}" style="background-color:#CE1126; color:#FFF; border-radius:5px 0px 0px 5px;display:inline-block;position:absolute;right:0px; top:1px; padding:0px 10px;border: solid #000 2px; cursor:pointer; box-shadow:inset 2px 0px 3px #e34;text-shadow:0px 1px 1px #000;outline:none;">
          Copy
      </button>
  </div>
  <script>
      let copyButton${unique} = document.getElementById("copy-${unique}");
      copyButton${unique}.addEventListener("click", () => {
          let tArea${unique} = document.getElementById("clone-${unique}");
          tArea${unique}.select();
          tArea${unique}.setSelectionRange(0, 99999);
          document.execCommand('copy');
          copyButton${unique}.innerHTML = "Copied to Clipboard";
          document.getSelection().removeAllRanges();
          setTimeout(() => {
              copyButton${unique}.innerHTML = "Copy";
          }, 500);
      });
  </script>`;

  let demoString = `${titleArea} ${subtitleArea}
  <div style="position:relative">
      <textarea readonly id="clone" rows="1" style="background-color:#444;outline:none;color:#fff; font-weight:400;resize:none;cursor:text; border:solid 1px #000;box-shadow:inset 0px 0px 5px #000;padding-left:10px;text-shadow:0px 1px 1px #000;font-family:sans-serif;">${copyString}</textarea>
      <button id="copy" style="background-color:#CE1126; color:#FFF; border-radius:5px 0px 0px 5px;display:inline-block;position:absolute;right:0px; top:1px; padding:0px 10px;border: solid #000 2px; cursor:pointer; box-shadow:inset 2px 0px 3px #e34;text-shadow:0px 1px 1px #000;outline:none;">
          Copy
      </button>
  </div>`;

  document.getElementById('demoWrapper').innerHTML = demoString;
  document.getElementById('codeblock').value = finalString;
}

updateDemoAndCode();

document.querySelectorAll("#settings input").forEach((item, i) => {
  item.addEventListener("input",()=>{
    updateDemoAndCode();
  })
});

//takes a text area and copies its text, then calls done copying.
function copyToClipboard(textAreaID, doneCopying){
  let tArea = document.getElementById(textAreaID);
  tArea.select();
  tArea.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.getSelection().removeAllRanges();
  doneCopying();
}

//Listen for a click in the dynamic demo area
document.body.addEventListener("click", (event)=>{
  if (event.srcElement.id == "copy"){
    copyToClipboard("clone", ()=>{
      event.srcElement.innerHTML = "Copied to Clipboard";

      setTimeout(() => {
            event.srcElement.innerHTML = "Copy";
      }, 500);
    });
  }
});

//Copy the code snippet for Moodle
let codeCopy = document.getElementById("copyCodeSnippet")
codeCopy.addEventListener("click", ()=>{
  copyToClipboard("codeblock", ()=>{
    codeCopy.innerHTML = "Copied in Clipboard";

    setTimeout(()=>{
      codeCopy.innerHTML = "Copy the Code";
    }, 500);
  });
});
