

$(document).ready(function () {
    // ----- data table
    new DataTable('#control-table');


    // ------ multi select
    new TomSelect("#select-type", {
        maxItems: 3
    });
    new TomSelect("#select-case", {
        maxItems: 3
    });
    new TomSelect("#select-subcase", {
        maxItems: 3
    });
});
   
