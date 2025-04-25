function drawViz(data, style, config) {
    const container = document.getElementById('chart-container');
    container.innerHTML = '';
  
    if (!data.tables.DEFAULT || data.tables.DEFAULT.length === 0) {
      container.innerText = 'No call sign found.';
      return;
    }
  
    const callSign = data.tables.DEFAULT[0].dimensionValues[0].value.toUpperCase();
    const service = 'FM';
  
    const imageUrl = `https://radio-locator.com/cgi-bin/pat?call=${callSign}&service=${service}`;
  
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `Coverage map for ${callSign}`;
    img.style.maxWidth = '100%';
  
    container.appendChild(img);
  }
  
