var data = [
  {
    make: "ثلاثية غرناطة",
    type: "Historical Electric",
    price: "$3,000",
    image: "./assets/images/tholathieteGhornata.jpg",
  },
  {
    make: "The Catcher in the Rye",
    type: "Electric",
    price: "$1,500",
    image: "./assets/images/The Catcher in the Rye.jpg",
  },
  {
    make: "Fender",
    type: "Electric",
    price: "$2,000",
    image: "./assets/images/The Great Gatsby.jpg",
  },
  {
    make: "Fender",
    type: "Electric",
    price: "$2,000",
    image: "./assets/images/feqalbi.jpg",
  },
  {
    make: "Gretsch",
    type: "Electric",
    price: "$5,000",
    image: "./assets/images/fatatnisalah.jpg",
  },
  {
    make: "Paul Reed Smith",
    type: "Electric",
    price: "$5,000",
    image: "./assets/images/Anne With an E.jpg",
  },
];


function displayProducts(products) {
  var productsHtml = "";
  products.forEach(function (product) {
    productsHtml += "<div class='col-sm-4 product wrapper' data-make='" +
      product.make + "' data-type='" + product.type + "' data-price='" +
      product.price + "'><div class='wrapper'><div class='container' ><div class='product-inner text-center' style='width: 100%;height: 100%;  height: 80%;width: 100%;  background: url(\"" +
      product.image + "\") no-repeat center center;-webkit-background-size: 100%;-moz-background-size: 100%;  -o-background-size: 100%;background-size: 100%;'></div>      <div class='bottom'><div class='left'><div class='details'>  <p> " +
      product.make + "</p><p>" + product.price + "</p></div>  </div>  </div></div></div>  </div>";
  });
  $("#products").html(productsHtml);
}


displayProducts(data);


$(".filter").on("change", function () {
  var filters = {};
  $(".filter-type:checked").each(function () {
    var type = $(this).val();
    if (type in filters) {
      filters[type].push(type);
    } else {
      filters[type] = [type];
    }
  });
  
  var priceFilter = $(".filter-price").val();
  var priceRange = priceFilter ? priceFilter.split("-") : ["0", "5001"];
  var minPrice = parseInt(priceRange[0]);
  var maxPrice = parseInt(priceRange[1]);
  
  var visibleProducts = data.filter(function (product) {
    var productTypes = product.type.split(" "); 
    var productPrice = parseInt(product.price.replace(/\$/g, "").replace(/,/g, ""));
    var priceInRange = (minPrice === 0 && maxPrice === 5001) || (productPrice >= minPrice && productPrice <= maxPrice);

    return Object.keys(filters).every(function (type) {
      return filters[type].some(function (filter) {
        return productTypes.includes(filter);
      });
    }) && priceInRange;
  });
  
  displayProducts(visibleProducts);
});