$(document).ready(function() {
    // YOUR CODE HERE!
    $.ajax({
        url: "https://one-month-jquery.s3.us-west-2.amazonaws.com/apartments.json",
        dataType: "json",
        success: function(response){
            $.each(response.apartments, function(i, apartment){
                var apartmentClass = apartment.city.toLowerCase().replace(" ","-" );
          
            var listing = "<a href='#' id=" + apartment.id + " class='list-group-item "+apartmentClass+" listings'> <h4 class='list-group-item-heading'>"+ apartment.description + " BR / " + apartment.bedrooms + " / " + apartment.price + "</h4><p class='list-group-item-text'></p>"+apartment.neighborhood+"</a>"
            $(".apartments").append(listing);


            });
        },

        error: function(error){
            console.log(error);
        }

        });

    $(".filter").click(function(){
        $(".filter").removeClass("active");
        $(this).addClass("active");
        $(".listings").show();

        var city = $(this).attr("id");

        if(city!="all"){
            $(".listings").not("."+city).css("display","none");

        }
    });

    $(document).on("click", ".listings", function(){
        var id = $(this).attr("id");
        $.ajax({
        url: "https://one-month-jquery.s3.us-west-2.amazonaws.com/apartments.json",
        dataType: "json",
        success: function(response){
            var selectedApartment = $.grep(response.apartments, function(apartment){
                return apartment.id == id;
            })
            var address = selectedApartment[0].address;
            window.open("http://maps.google.com/?q=" + address);
        
        },

            error: function(error){
                console.log(error);
            }

        });



    });
    
});


