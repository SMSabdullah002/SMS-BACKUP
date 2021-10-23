$(document).ready(function () {
    $("#Save").click(function () {


        var person = new Object();
        person.FName = $("#FName").val();
        person.MName = $("#MName").val();
        person.LName = $("#LName").val();
        person.FatName = $("# FatName").val();
        person.Dob = $("#Dob").val();
        person.Wt = $("#Wt").val();
        person.Ht = $("#Ht").val();
        person.BlGroup = $("#BlGroup").val();
        person.Gender = $("#Gender").val();
        person.MothLang = $("#MothLang").val();
        person.OccupFat = $("#OccupFat").val();
        person.FatContact = $("#FatContact").val();
        person.FatEmail = $("#FatEmail").val();
        person.Province = $("#Province").val
        person.City = $("#City").val();
        person.CurrAdd = $("#CurrAdd").val();
        person.PermAdd = $("#PermAdd").val();
        person.StdEmail = $("#StdEmail").val();
        person.StdUsername = $("#StdUsername").val();
        person.StdContact = $("#StdContact").val();
        $.ajax({
            Headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            url: "https://localhost:44315/api/v1/student/createStudent",
            type: "POST",
            dataType: "json",
            data: JSON.stringify(person),
            contentType: "application/json",
            success: function (data, textStatus, xhr) {
                console.log(data.status);
                $('#response').html("<div class='alert alert-success'> Thanks For Registering to our app </div>");
                clearField();
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#response').html("<div class='alert alert-danger'>Please check your credentials </div>");
                clearField();
            },
        });

        /* function clearField() {
             $("#FName").val("");
             $("#MName").val("");
             $("#LName").val("");
             $("#FatName").val("");
             $("#Dob").val("");
             $("#Wt").val("");
             $("#Ht").val("");
             $("#BlGroup").val("");
             $("#Gender").val("");
             $("#MothLang").val("");
             $("#OccupFat").val("");
             $("#FatContact").val("");
             $("#FatEmail").val("");
             $("#Province").val("");
             $("#City").val("");
             $("#CurrAdd").val("");
             $("#PermAdd").val("");
             $("#StdEmail").val("");
             $("#StdUsername").val("");
             $("#StdContact").val("");
     }*/


        

    })
})
