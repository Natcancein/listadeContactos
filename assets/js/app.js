  $(document).ready(function() {
    
     /*llamando al modal*/
    $(".modal").modal();

  $("#agregar").click(function() {
     /*variables nombre y fono y limpiando el input a ambas*/
    var nombre = $(".nombre").val();
    $(".nombre").val("");
    var fono = $(".phone").val();
    $(".phone").val("");

    /*contenedor donde va el nuevo contenido*/
    var contenedor = $("#contenedor");
    /*agregando el nuevo contenido*/
    contenedor.append("<div class='container nuevoContacto'><ul class='collection'><li class='collection-item'><h4>"+ nombre +"</h4><p>"+ fono +"</p><a href='#' class='secondary-content'><i class='material-icons basura'>delete_forever</i></a></li></ul></div>");
    /*para borrar contenido*/
    borrarContacto();
  })


  function borrarContacto(){
    
    $(".basura").click(function(){
      $(".nuevoContacto").remove();
    })
  }


});