$(function(){ //DOM Ready

    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [100, 100],
        draggable: {
            handle: '.handle'
        }
    });
    
    var gridster = $(".gridster ul").gridster().data('gridster');
    
    /*
    gridster.disable( );

    $("li").resizable({
        grid: 50,
        handles:"all",
        minHeight:50,
        minWidth:50,
        // Xhelper: "outline",  Xanimate:true
        stop: function(event,ui) {
            gridster.enable();
        },
        start: function(event,ui) {
            gridster.disable();
        }
    });
    */
    
});