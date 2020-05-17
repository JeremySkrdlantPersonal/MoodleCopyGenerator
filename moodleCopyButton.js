function updateDemoAndCode(){
  let unique = document.getElementById('unique').value;
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
      <textarea id="clone-${unique}" rows="1" style="background-color:#444;color:#fff; font-weight:400;resize:none;cursor:text; border:solid 1px #000;box-shadow:inset 0px 0px 5px #000;padding-left:10px;text-shadow:0px 1px 1px #000;font-family:sans-serif;">${copyString}</textarea>
      <button id="copy-${unique}" style="background-color:#CE1126; color:#FFF; border-radius:5px 0px 0px 5px;display:inline-block;position:absolute;right:0px; top:1px; padding:0px 10px;border: solid #000 2px; cursor:pointer; box-shadow:inset 2px 0px 3px #e34;text-shadow:0px 1px 1px #000;outline:none;">
          Copy
      </button>
  </div>
  <script>
      let copyButton${unique} = document.getElementById("copy-${unique}");
      copyButton${unique}.addEventListener("click", () => {
          let tArea${unique} = document.getElementById("clone-${unique}");
          tArea${unique}.select();
          document.execCommand('copy');
          copyButton${unique}.innerHTML = "Copied to Clipboard";
          document.getSelection().removeAllRanges();
          setTimeout(() => {
              copyButton${unique}.innerHTML = "Copy";
          }, 500);
      });
  </script>`;

  let demoString = `${titleArea}
  ${subtitleArea}
  <div style="position:relative">
      <textarea id="clone" rows="1" style="background-color:#444;color:#fff; font-weight:400;resize:none;cursor:text; border:solid 1px #000;box-shadow:inset 0px 0px 5px #000;padding-left:10px;text-shadow:0px 1px 1px #000;font-family:sans-serif;">${copyString}</textarea>
      <button id="copy" style="background-color:#CE1126; color:#FFF; border-radius:5px 0px 0px 5px;display:inline-block;position:absolute;right:0px; top:1px; padding:0px 10px;border: solid #000 2px; cursor:pointer; box-shadow:inset 2px 0px 3px #e34;text-shadow:0px 1px 1px #000;outline:none;">
          Copy
      </button>
  </div>`;

  document.getElementById('demoWrapper').innerHTML = demoString;
  document.getElementById('codeblock').value = finalString;
  reloadBinding();
}

updateDemoAndCode();

document.getElementById('unique').addEventListener("input", ()=>{
  updateDemoAndCode();
});
document.getElementById('sectionTitle').addEventListener("input", ()=>{
  updateDemoAndCode();
});
document.getElementById('subTitle').addEventListener("input", ()=>{
  updateDemoAndCode();
});
document.getElementById('copyString').addEventListener("input", ()=>{
  updateDemoAndCode();
});

function reloadBinding(){
  let copyButton = document.getElementById("copy");
  copyButton.addEventListener("click", () => {
      let tArea = document.getElementById("clone");
      tArea.select();
      document.execCommand('copy');
      copyButton.innerHTML = "Copied to Clipboard";
      document.getSelection().removeAllRanges();
      setTimeout(() => {
          copyButton.innerHTML = "Copy";
      }, 500);
    });
}

let codeCopy = document.getElementById("copyCodeSnippet")
codeCopy.addEventListener("click", ()=>{
  let codeArea = document.getElementById('codeblock');
  codeArea.select();
  document.execCommand('copy');
  codeCopy.innerHTML = "Copied in Clipboard";
  document.getSelection().removeAllRanges();
  setTimeout(()=>{
    codeCopy.innerHTML = "Copy the Code";
  }, 500)

})
