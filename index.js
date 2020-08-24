function selectOnlyThis(id) {
  var myCheckbox = document.getElementsByName("myCheckbox");
  Array.prototype.forEach.call(myCheckbox, function(el) {
    console.log(el);
    el.checked = false;
    el.parentElement.style.opacity = 1;
    el.parentElement.style.background = "#f4f4f4";
  });

  id.checked = true;
  id.parentElement.style.background = "#cfe3ff";

  Array.prototype.forEach.call(myCheckbox, function(el) {
    if (!el.checked) {
      el.parentElement.style.opacity = 0.5
    }
  });
}
