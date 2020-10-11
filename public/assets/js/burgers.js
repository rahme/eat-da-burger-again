$ (function () {
  $ ('.form_1').on ('submit', function (event) {
    event.preventDefault ();
    const newBurger = {
      name: $ ('#new-burger').val ().trim (),
    };
    $.ajax ('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then (function () {
      location.reload ();
    });
  });

  $ ('.eat-da-burger').on ('click', function (event) {
    const id = $ (this).data ('id');
    const TF = true;
    const eaten = {
      devoured: TF,
    };
    $.ajax ('/api/burgers/' + id, {
      type: 'PUT',
      data: eaten,
    }).then (function () {
      location.reload ();
    });
  });
});
