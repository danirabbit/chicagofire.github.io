$.getJSON('/data/locations.json', function (json) {
    for (var key in json) {
        var location = json[key];

        var card = '<div class="card ' + key + '"></div>';
        $('.deck').append (card);

        var image_header = '<div class="' + key + ' image-header"></div>';
        $('.card.' + key).append (image_header);

        var content_area = '<div class="content-area"></div>'
        $('.card.' + key).append (content_area);

        var title = '<h1>' + location.title + '</h1>';
        $('.' + key +' .content-area').append (title);

        for (var day in location.hours) {
            var p = '<p>' + location.hours[day] + '</p>';
            $('.' + key +' .content-area').append (p); 
        }

        $('.' + key +' .content-area').append ('<hr/>');

        var map_link = '<a class="action" href="'
            + location.address.url
            + '" target="_blank"><i class="fa fa-fw fa-lg fa-map-marker"></i><span>'
            + location.address.label + '<span></a>';
        $('.' + key +' .content-area').append (map_link);

        var phone_link = '<a class="action" href="'
            + location.phone.url
            + '" target="_blank"><i class="fa fa-fw fa-lg fa-phone"></i><span>'
            + location.phone.label + '<span></a>';
        $('.' + key +' .content-area').append (phone_link);

        var email_link = '<a class="action" href="'
            + location.email.url
            + '" target="_blank"><i class="fa fa-fw fa-lg fa-envelope"></i><span>'
            + location.email.label + '<span></a>';
        $('.' + key +' .content-area').append (email_link);
    }
});
