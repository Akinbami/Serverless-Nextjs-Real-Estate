$(document).ready(function() {
    $('#example').DataTable();

    $('#example tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );
 
} );