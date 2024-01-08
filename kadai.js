document.getElementById('posterLink').addEventListener('click', function() {
    var iframe = document.getElementById('posterFrame');
    
    // iframeが非表示の場合は表示し、表示されている場合は非表示にする
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
});