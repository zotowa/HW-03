function blob_to_base64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  
  document.getElementsByTagName('button')[0].addEventListener('click', async function(){
    var out = document.getElementById('output');
    var w = parseInt(document.getElementById('w').value);
    var h = parseInt(document.getElementById('h').value);
    if (100 <= w && w <= 300 && 100 <= h && h <= 300) {
      out.innerHTML = '';
      var response = await fetch('https://picsum.photos/' + w + '/' + h);
      var img = document.createElement('img');
      img.style = 'width:' + w + 'px; height:' + h + 'px';
      img.src = await blob_to_base64(await response.blob());
  
      out.append(img);
    } else {
      out.innerHTML =
        'Одно из чисел вне диапазона от 100 до 300.';
    }
  });
  