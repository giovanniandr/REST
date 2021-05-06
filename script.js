// JS For tabs to change
// Reference to https://codepen.io/kazmeyer/pen/lzqhf and http://www.entheosweb.com/tutorials/css/tabs.asp
$(".tab_content").hide();
$(".tab_content:first").show();

/* Inside tab mode hide and fade option for smooth transactions */
$("ul.tabs li").click(function() {
    
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		
    
  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");

  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
  
});
/* Drawer mode hide and fade are smooth too */
$(".tab_drawer_heading").click(function() {
  
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel"); 
  $("#"+d_activeTab).fadeIn();
  
  $(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");
  
  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
});


/* Extra tab */
$('ul.tabs li').last().addClass("tab_last");

/* JS For user notification */ 
$("#create-item").submit(function(event){
  alert("Ingredient created successfully!");
})

/* JS For update and delete */
$("#update_item").submit(function(event){
  event.preventDefault();

  var unindexed_array = $("#update_item").serializeArray();
  var data = {}
  console.log(unindexed_array)

  $.map(unindexed_array, function(n, i){
    data[n['name']] = n['value']
})


var request = {
    "url" : `https://8000-amber-mouse-mi9cewty.ws-eu03.gitpod.io/items/${data.id}`,
    "method" : "PUT",
    "data" : data
}

$.ajax(request).done(function(response){
    alert("Item updated");
})

})

if(window.location.pathname == "/"){
$ondelete = $(".table tbody td button.delete");
$ondelete.click(function(){
    var id = $(this).attr("data-id")

    var request = {
        "url" : `https://8000-amber-mouse-mi9cewty.ws-eu03.gitpod.io/items/${id}`,
        "method" : "DELETE"
    }

    if(confirm("Delete this item ?")){
        $.ajax(request).done(function(response){
            alert("Item deleted");
            location.reload();
        })
    }

})
}