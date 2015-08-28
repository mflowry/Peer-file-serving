//add jQuery here
$(document).ready(function() {
////access the list of customers - make an AJAX call

//get our content UL
    var $results = $('#content');

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/cute'
    }).done(function (data) {//.done is the same as success
        //for each customer, create an LI with their name in a p tag
        console.log('getting images');
        for (var picCounter = 0; picCounter < 5; picCounter++) {
            var $img = $('<img>', {src: data[picCounter].location});
            var $p = $('<p>');
            $p.text(data[picCounter].name);
            $p.append($img);
            $results.append($p);
            ;

            //console.log('There was an error: ', error)//use a comma if you want the object data to show, otherwise it will just log Object
        }
        var $btn = $('<button>', {id: "resort", text: "Re-sort Pictures"});
        $results.append($btn);

        $('#content').on('click', '#resort', function (data) {
            alert("button works");
            for (var revCounter = 5; revCounter > 0; revCounter--) {
                var $img = $('<img>', {src: data[revCounter].location});
                var $p = $('<p>');
                $p.text(data[revCounter].name);
                $p.append($img);
                $results.append($p);


    }


        })
    });

    });
