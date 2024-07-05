document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.devices').addEventListener('click', function(event) {
        if (event.target.closest('a')) {
            event.preventDefault();
            var device_selected = event.target.closest('a').getAttribute('href').replace('#', '');
            document.querySelectorAll('.device').forEach(function(device) {
                device.className = 'device device-' + device_selected;
            });
        }
    });
});
