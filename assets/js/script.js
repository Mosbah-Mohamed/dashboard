$(document).ready(function () {
  /* ================== start scroll to sections  ============================================================ */
  $(".nav li a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 10,
      },
      1000
    );
  });

  //add class icon-active to li a
  $("nav ul li").on("click", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });
  /* =============================== end scroll to sections  ================================================= */
  /* =============================== start button up ========================================================= */
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
      $(".up").fadeIn(2000);
      $(".up").css("right", "45px");
    } else {
      $(".up").fadeOut(2000);
      $(".up").css("right", "-45px");
    }
  });
  $(".up").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
  /* =============================== end button up ============================================================ */

  /* =============================== start Settings of content tabs (payment) ================================= */
  $(".auct").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active_tab").siblings().removeClass("active_tab");
    var id = $(this).attr("data-content");
    $('.box_content[id="' + id + '"]')
      .addClass("activeTab")
      .siblings()
      .removeClass("activeTab");
  });

  $(".paginate ul li").on("click", function (e) {
    // e.preventDefault();

    $(this)
      .addClass("active-paginate")
      .siblings()
      .removeClass("active-paginate");
  });

  /* =============================== end Settings of content tabs (payment) =================================== */

  /*=================== start side menu ======================================================================= */

  $(".small_collapse").on("click", function (e) {
    e.stopPropagation();
    $(".side-bar").toggleClass("open_small");
    // $(this).hide();
  });
  $(".navbar-toggler").on("click", function (e) {
    e.stopPropagation();
    $(".side-bar").toggleClass("open");
    $(this).find("i").toggleClass("fa-bars fa-times");
    // $(this).hide();
  });

  $(".navbar-toggler_2").on("click", function (e) {
    e.stopPropagation();
    $(".side-bar").toggleClass("open");
  });

  $("body").click(function (e) {
    if (
      $(".side-bar").hasClass("open") &&
      !$(e.target).closest(".side-bar").length
    ) {
      $(".side-bar").toggleClass("open");
      $("nav .one").toggleClass("top");
      $("nav .two").toggleClass("hidden");
      $("nav .three").toggleClass("bottom");
    }
  });

  /*=================== end side menu ========================================================================= */
  /*============================ start navbar toggler ========================================================= */
  $("nav .navbar-toggler").on("click", function () {
    $("nav .one").toggleClass("top");
    $("nav .two").toggleClass("hidden");
    $("nav .three").toggleClass("bottom");
  });

  /*============================ end navbar toggler =========================================================== */
  $(".search_icon").on("click", function (e) {
    e.preventDefault();

    var id = $(this).attr("data-content");

    console.log(id);

    // Add "show" class to the specific search overlay
    $('.search-overlay[id="' + id + '"]').addClass("show");

    // Remove "show" class from other search overlays
    $('.search-overlay[id!="' + id + '"]').removeClass("show");

    $(".search-overlay,.close").click(function (e) {
      $(".search-overlay").removeClass("show");
    });

    $(".close_btn_overlay").click(function (e) {
      $(".search-overlay").removeClass("show");
    });
  });

  /* =============================== start  WOW.js  =========================================================== */
  new WOW().init();
  /* =============================== end  WOW.js  ============================================================= */
  /* =============================== start AOS.js  ============================================================ */
  $(function () {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
  });
  /* =============================== end  AOS.js  ============================================================= */

  /* =============================== start Settings of content tabs (payment) ================================= */
  $(".muo_tab").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
    var id = $(this).attr("data-content");
    $('.box_content[id="' + id + '"]')
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  /* =============================== end Settings of content tabs (payment) =================================== */

  /* =============================== start nice select  ======================================================= */
  // $(".nice-select").niceSelect();
  $(".js-example-basic-multiple").select2({
    placeholder: "Select a programming language",
    allowClear: true,
  });
  $(".js-example-basic-multiple").on(
    "select2:opening select2:closing",
    function (event) {
      var $searchfield = $(this).parent().find(".select2-search__field");
      $searchfield.prop("disabled", true);
    }
  );
  $("select").niceSelect();
  /* =============================== end nice select  ========================================================= */
  /* ===============================  start slick library section  ============================================ */
  $('[data-fancybox="images"]').fancybox();
  /* =============================== end slick library section  ===================================================== */
  $(".show_whats").on("click", function (e) {
    e.preventDefault();
    console.log("first");
    $("#show_whats_div").toggleClass("show_whats_div");
  });

  /* =============================== start intlTelInput ===================================================== */
  $("#phone").intlTelInput({
    preferredCountries: ["sa", "gb"],
    separateDialCode: true,
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
      $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
        resp
      ) {
        var countryCode = resp && resp.country ? resp.country : "us";
        success(countryCode);
      });
    },
  });

  /* =============================== end intlTelInput ===================================================== */

  $(".not").on("click", function (e) {
    e.stopPropagation();
    $(".notification").toggleClass("show-cart");
  });

  $(".notification .close-cart").on("click", function (e) {
    e.stopPropagation();
    $(".notification").removeClass("show-cart");
  });
});

/*==================== start spinner ========================================================================== */
/*==================== start spinner ========================================================================== */
$(window).on("load", function () {
  $(".loading-spinner").fadeOut(1500);
});

/*==================== end spinner ============================================================================ */

/* ======================== start js ========================================================================== */

// DataTable initialisation
$("#example,.example").DataTable({
  paging: true,
  autoWidth: true,
  ordering: false,
  bInfo: false,
  lengthChange: false,
  columnDefs: [
    {
      // targets: 3,
      render: function (data, type, full, meta) {
        var cellText = $(data).text(); //Stripping html tags !!!
        // if (type === 'display' &&  (cellText == "Done" || data=='Done')) {
        //   var rowIndex = meta.row+1;
        //   var colIndex = meta.col+1;
        //   $('#example tbody tr:nth-child('+rowIndex+')').addClass('lightRed');
        //   $('#example tbody tr:nth-child('+rowIndex+') td:nth-child('+colIndex+')').addClass('red');
        //   return data;
        // } else {
        //   return data;
        // }
      },
    },
  ],
  language: {
    paginate: {
      previous: '<i class="fas fa-chevron-left"></i>',
      next: '<i class="fas fa-chevron-right"></i>',
    },
    search: "_INPUT_",
    searchPlaceholder: "Search...",
    Search: '<i class="fas fa-search"></i>',
  },
});
// ================================ charts =============================

var ctx = document.getElementById("barChart").getContext("2d");
var barChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sst",
      "Sun",
      "Wed",
      "Thu",
      "Fri",
      "Sst",
      "Sun",
    ],
    datasets: [
      {
        label: "data-1",
        data: [12, 19, 3, 17, 28, 24, 7, 3, 17, 28, 24, 7],
        backgroundColor: "#FFCA78",
      },
      {
        label: "data-2",
        data: [30, 29, 5, 5, 20, 3, 10, 3, 17, 28, 24, 7],
        backgroundColor: "#B00AB0",
      },
    ],
  },
  options: {
    animation: {
      duration: 2000, // Set the duration of the animation in milliseconds
      easing: "easeInOutQuart", // Set the easing function for the animation
    },
  },
});

// ================================ chart 2 ==============
var ctx_two = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx_two, {
  type: "doughnut",
  data: {
    labels: ["M", "T", "W", "T", "F"],
    datasets: [
      {
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#3FBAFF",
          "#B00AB0",
          "#FFCA78",
        ],
        data: [12, 19, 3, 17, 28],
      },
    ],
  },
});

var ctx_last = document.getElementById("myChart_3").getContext("2d");
var myChart = new Chart(ctx_last, {
  type: "doughnut",
  data: {
    labels: ["M", "T", "W", "T", "F"],
    datasets: [
      {
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#3FBAFF",
          "#B00AB0",
          "#FFCA78",
        ],
        data: [12, 19, 3, 17, 28],
      },
    ],
  },
});
