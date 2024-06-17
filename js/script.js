function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        var notification = document.getElementById('notification');
        notification.classList.add('show');
        setTimeout(function() {
            notification.classList.remove('show');
        }, 2000);
    }, function(err) {
        console.error('Failed to copy text: ', err);
    });
}
