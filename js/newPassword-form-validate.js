$(document).ready(function () {
  function checkAndUpdateClasses() {
    var passwordValue = $("#new-password").val();
    var confirmPasswordValue = $("#confirm-password").val();

    if (passwordValue === "") {
      $(".empty-new-pass").addClass("active");
      $(".pass-input.new-pass").css({
        "border-color": "var(--red)",
        animation: "shake 0.5s",
      });
    } else {
      $(".empty-new-pass").removeClass("active");
      $(".pass-input.new-pass").css({
        "border-color": "",
        animation: "",
      });
    }
    if (confirmPasswordValue === "") {
      $(".confirm-new-pass").addClass("active");
      $(".pass-input.confirm-pass").css({
        "border-color": "var(--red)",
        animation: "shake 0.5s",
      });
    } else {
      $(".confirm-new-pass").removeClass("active");
      $(".pass-input.confirm-pass").css({
        "border-color": "",
        animation: "",
      });
    }
  }

  $("form .submit-form").on("click", function () {
    checkAndUpdateClasses();
  });

  $("#new-password, #confirm-password").on("keyup", function () {
    checkAndUpdateClasses();
  });
});
